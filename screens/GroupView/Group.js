import {authenticatedRequest} from "../../network/requests";
import {GROUPS_URL} from "../../network/endpoints";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useEffect, useState} from "react";
import * as React from "react";
import Overview from "./Overview";
import Members from "./Members";

const Tab = createBottomTabNavigator();

export default function Group({ route, navigation }) {
    // const [group, setGroup] = useState([]);

    let { group } = route.params;

    console.log(group)

    const fetchGroup = () =>
        authenticatedRequest(
            GROUPS_URL + '/' + id,
            'GET'
        ).then((response) => response.json()).then(async (json) => {
            let group = json.data
            console.log(group)
            // setGroup(group)
        })

    // useEffect(() => {
    //     console.log('here')
    //     void fetchGroup();
    //
    // }, group)
    //
    // if (group !== []) {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Overview" component={Overview} initialParams={ group } options={{ title: group.name + ": Overview" }}/>
                <Tab.Screen name="Members" component={Members} initialParams={ group.members } options={{ title: group.name + ": Members" }}/>
            </Tab.Navigator>
        )
    // } else {
    //     return null
    // }
    // return null


}