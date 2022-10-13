import {authenticatedRequest} from "../../network/requests";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GROUPS_URL} from "../../network/endpoints";
import Overview from "./Overview";
import Members from "./Members";
import {Image} from "react-native";
import {useEffect} from "react"

const Tab = createBottomTabNavigator();

export default function Group({ route, navigation }) {
    let { group } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: group.name,
        });
    }, []);

    const fetchGroup = () =>
        authenticatedRequest(
            GROUPS_URL + '/' + id,
            'GET'
        ).then((response) => response.json()).then(async (json) => {
            let group = json.data
        })

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Members"
                component={Members}
                initialParams={{
                    members: group.members,
                    milestones: group.milestones
                }}
                options={{
                    title: group.name,
                    tabBarIcon: ({size,focused,color}) => {
                        return (
                            <Image
                                style={{ width: size, height: size }}
                                source={require('../../assets/member_tab.png')}
                            />
                        );
                    },
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name="Overview"
                component={Overview}
                initialParams={ group }
                options={{
                    title: group.name,
                    tabBarIcon: ({size,focused,color}) => {
                        return (
                            <Image
                                style={{ width: size, height: size }}
                                source={require('../../assets/group_overview.png')}
                            />
                        );
                    },
                    tabBarLabel: ''
                }}
            />
        </Tab.Navigator>
    )
}