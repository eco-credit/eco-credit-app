import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EnvironmentalRecord from "./EnvironmentalRecord";
import Account from "./Account";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback} from "react";
import Savings from "./Savings";
import Loans from "./Loans";
import DataPrivacy from "./DataPrivacy";

const Tab = createBottomTabNavigator();

export default function Dashboard({ route, navigation }) {

    const { title } = route.params;

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                title: title,
            });
        }, [navigation])
    );

    return (
        <Tab.Navigator>
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="Environmental Record" component={EnvironmentalRecord} />
            <Tab.Screen name="Savings" component={Savings} />
            <Tab.Screen name="Loans" component={Loans} />
            <Tab.Screen name="Data Privacy" component={DataPrivacy} />
        </Tab.Navigator>
    );
}