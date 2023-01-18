import Account from "./Account"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DataPrivacy from "./DataPrivacy"
import EnvironmentalRecord from "./EnvironmentalRecord"
import Loans from "./Loans"
import Savings from "./Savings"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react"
import { Image } from "react-native"

const Tab = createBottomTabNavigator()

export default function Dashboard({ route, navigation }) {
  const { member, milestones } = route.params

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        //   title: member.first_name + ' ' + member.last_name,
      })
    }, [navigation])
  )

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: "Member View",
          tabBarIcon: ({ size, focused, color }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 25, height: 20 }}
                  source={require("../../assets/member_view_selected.png")}
                />
              )
            }

            return (
              <Image
                style={{ width: 25, height: 20 }}
                source={require("../../assets/member_view_unselected.png")}
              />
            )
          },
          tabBarLabel: "",
        }}
        initialParams={{ member: member }}
      />
      <Tab.Screen
        name="Environmental Record"
        component={EnvironmentalRecord}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/environmental_selected.png")}
                />
              )
            }
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/environmental_unselected.png")}
              />
            )
          },
          tabBarLabel: "",
        }}
        initialParams={{ milestones, member }}
      />
      <Tab.Screen
        name="Savings"
        component={Savings}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/savings_selected.png")}
                />
              )
            }
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/savings_unselected.png")}
              />
            )
          },
          tabBarLabel: "",
        }}
        initialParams={{ savings: member.savings }}
      />
      <Tab.Screen
        name="Loans"
        component={Loans}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/loans_selected.png")}
                />
              )
            }
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/loans_unselected.png")}
              />
            )
          },
          tabBarLabel: "",
        }}
        initialParams={{ loans: member.loans }}
      />
      <Tab.Screen
        name="Data Privacy"
        component={DataPrivacy}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/privacy_selected.png")}
                />
              )
            }
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/privacy_unselected.png")}
              />
            )
          },
          tabBarLabel: "",
        }}
        initialParams={{ member }}
      />
    </Tab.Navigator>
  )
}
