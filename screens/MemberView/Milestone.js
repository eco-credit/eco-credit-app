import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import CardComponent2 from "../../components/CardComponent2"
import GridImageComponent from "../../components/GridImageComponent"
import { appUrl } from "../../config/config"

const getImages = (member, milestoneId) => {
  return member.files
    .filter((file) => file.milestone_id === milestoneId)
    .map((file) => appUrl + file.file)
}

export default function Milestone({ route }) {
  const { milestone, member } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardComponent2
          title={"Requirement"}
          value={milestone.requirement}
          title2={"Timing"}
          value2={milestone.time}
        />
        <View>
          <GridImageComponent data={getImages(member, milestone.id)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#f5f6fa",
  },
})
