import {Text, View} from "react-native";

const DataPrivacy = ({ route }) => {
    const { member } = route.params

    const outputPrivacyOption = (option) => {
        return option ? 'Yes' : 'No'
    }

    return (
        <View>
            <Text>
                Data Processing:
                { outputPrivacyOption(member.data_processing) }
            </Text>
            <Text>
                Data Sharing:
                { outputPrivacyOption(member.data_sharing) }
            </Text>
        </View>
    )
}

export default DataPrivacy