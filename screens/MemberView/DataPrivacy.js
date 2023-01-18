import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import CardComponent2 from "../../components/CardComponent2"

const DataPrivacy = ({ route }) => {
  const { member } = route.params

  const outputPrivacyOption = (option) => {
    return option ? "Yes" : "No"
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardComponent2
          title={"Data Processing"}
          value={outputPrivacyOption(member.data_processing)}
        />
        <CardComponent2
          title={"Data Sharing"}
          value={outputPrivacyOption(member.data_sharing)}
        />
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

export default DataPrivacy
