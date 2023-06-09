import * as React from "react"
import { authenticatedRequest } from "../network/requests"
import { GROUPS_URL } from "../network/endpoints"
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ToastAndroid,
} from "react-native"
import LoadingComponent from "../components/LoadingComponent"
import { useEffect, useState } from "react"
import PopUpMenuComponent from "../components/PopUpMenuComponent"
import CardComponent2 from "../components/CardComponent2"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Groups({ navigation }) {
  const [groups, setGroups] = useState([])

  const [refreshing, setRefreshing] = useState(false)

  function goToGroupScreen(navigation, group) {
    navigation.push("Group", {
      group,
    })
  }

  const renderItem = ({ item }) => (
    <Pressable onPress={() => goToGroupScreen(navigation, item)}>
      <CardComponent2
        title={item.name}
        image={require("../assets/group_group.png")}
      />
    </Pressable>
  )

  const fetchGroupsFromStorage = async () => {
    let groups = await AsyncStorage.getItem("groups")
    ToastAndroid.show(
      "No internet connection detected, data was loaded from offline storage!",
      ToastAndroid.SHORT
    )
    return JSON.parse(groups)
  }

  const saveGroupsToStorage = async (groups) => {
    await AsyncStorage.setItem("groups", JSON.stringify(groups))
  }

  const fetchGroups = () =>
    authenticatedRequest(GROUPS_URL, "GET")
      .then((response) => response.json())
      .then(async (json) => {
        if (json.data) {
          let groups = json.data
          // await saveGroupsToStorage(groups)
          setGroups(groups)
        } else {
          await fetchGroupsFromStorage()
          setGroups(groups)
        }
      })
      .catch(async () => {
        let groups = await fetchGroupsFromStorage()
        setGroups(groups)
      })

  const onRefresh = async () => {
    setGroups([])
    setRefreshing(true)
    void (await fetchGroups())
    setRefreshing(false)
  }

  useEffect(() => {
    void fetchGroups()
    navigation.setOptions({
      headerRight: () => <PopUpMenuComponent handleRefresh={onRefresh} />,
    })
  }, [navigation])

  if (groups.length > 0) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          data={groups}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshing={refreshing}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    )
  }

  return <LoadingComponent />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#f5f6fa",
  },
})
