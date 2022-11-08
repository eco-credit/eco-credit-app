import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./screens/Login"
import Dashboard from "./screens/MemberView/Dashboard"
import Groups from "./screens/Groups"
import Group from "./screens/GroupView/Group"
import {useEffect, useState} from 'react'
import LoadingComponent from "./components/LoadingComponent"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MenuProvider } from 'react-native-popup-menu'
import Milestone from "./screens/MemberView/Milestone";

const Stack = createNativeStackNavigator()

export default function App() {
    const [defaultRoute, setDefaultRoute] = useState(null)

    const getToken = async () => {
        return await AsyncStorage.getItem('token')
    }

    useEffect(() => {
        getToken.call().then(token => {
            if (!token) {
                setDefaultRoute('Login')
                return
            }
            setDefaultRoute('Groups')
        })
    }, [])

    if (!defaultRoute) {
        return <LoadingComponent />
    }

    return (
        <MenuProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={defaultRoute}>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={{
                            title: "Member View",
                            headerTitleAlign: 'center'
                        }}
                    />
                    <Stack.Screen
                        name="Groups"
                        component={Groups}
                        options={{
                            title: "Home View",
                            headerLeft: () => null,
                            headerTitleAlign: 'center'
                        }}
                    />

                    <Stack.Screen
                        name="Group"
                        component={Group}
                        options={{
                            headerTitleAlign: 'center'
                        }}
                    />

                    <Stack.Screen
                        name="Milestone"
                        component={Milestone}
                        options={{
                            title: "Verification",
                            headerTitleAlign: 'center'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </MenuProvider>
    )
}
