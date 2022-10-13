import * as React from 'react'
import {authenticatedRequest} from "../network/requests"
import {GROUPS_URL} from "../network/endpoints"
import {FlatList, SafeAreaView, StyleSheet} from 'react-native'
import LoadingComponent from "../components/LoadingComponent"
import {useEffect, useState} from 'react'
import GroupComponent from "../components/GroupComponent"
import PopUpMenuComponent from "../components/PopUpMenuComponent"

export default function Groups({ navigation }) {
    const [groups, setGroups] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const renderItem = ({ item }) => (
        <GroupComponent 
            group={item}
            navigation={navigation}
        />
    )

    const fetchGroups = () => authenticatedRequest(
        GROUPS_URL,
        'GET'
    ).then((response) => response.json()).then(async (json) => {
        let groups = json.data
        setGroups(groups)
    })

    const onRefresh = async () => {
        setGroups([])
        setRefreshing(true)
        void await fetchGroups()
        setRefreshing(false)
    }

    useEffect(() => {
        void fetchGroups()
        navigation.setOptions({
            headerRight: () => (
                <PopUpMenuComponent handleRefresh={onRefresh}/>
            ),
        });

    }, [navigation])

    if (groups.length > 0) {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                    data={groups}
                    renderItem={renderItem}
                    //  keyExtractor={(Math.random() + 1).toString(36).substring(7)}
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
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: "#f5f6fa",
    },
})
