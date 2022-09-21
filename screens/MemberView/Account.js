import * as React from 'react';
import {Text, View} from "react-native";

export default function Account({ route }) {
    const { member } = route.params

    return (
        <View>
            <Text>First Name: {member.first_name}</Text>
            <Text>Last Name: {member.last_name}</Text>
            {member.email &&
                <Text>Email: member.email</Text>
            }
            <Text>Livelihood: {member.livelihood}</Text>
        </View>
    )
}