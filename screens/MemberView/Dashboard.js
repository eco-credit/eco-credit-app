import Account from "./Account";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DataPrivacy from "./DataPrivacy";
import EnvironmentalRecord from "./EnvironmentalRecord";
import Loans from "./Loans";
import Savings from "./Savings";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback} from "react";
import {Button} from "react-native";

const Tab = createBottomTabNavigator();

export default function Dashboard({ route, navigation }) {
    const { member, milestones } = route.params;

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                title: member.first_name + ' ' + member.last_name,
            });
        }, [navigation])
    );

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Account"
                component={Account}
                initialParams={{member: member}}
            />
            <Tab.Screen name="Environmental Record" component={EnvironmentalRecord} initialParams={{milestones}}/>
            <Tab.Screen name="Savings" component={Savings} initialParams={{savings: member.savings}}/>
            <Tab.Screen name="Loans" component={Loans} initialParams={{loans: member.loans}}/>
            <Tab.Screen name="Data Privacy" component={DataPrivacy} initialParams={{member}} />
        </Tab.Navigator>
    );
}