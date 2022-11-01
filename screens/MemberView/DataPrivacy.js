import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import CardComponent from "../../components/CardComponent";

const DataPrivacy = ({ route }) => {
    const { member } = route.params

    const outputPrivacyOption = (option) => {
        return option ? 'Yes' : 'No'
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                { CardComponent('Data Processing:', outputPrivacyOption(member.data_processing)) }
                { CardComponent('Data Sharing:', outputPrivacyOption(member.data_sharing)) }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: "#f5f6fa",
    },
})

export default DataPrivacy