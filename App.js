import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Dashboard from "./screens/MemberView/Dashboard";
import Groups from "./screens/Groups";
import Group from "./screens/GroupView/Group";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
          />

          <Stack.Screen
              name="Dashboard"
              component={Dashboard}
          />

          <Stack.Screen
              name="Groups"
              component={Groups}
              options={{ headerShown: false }}
          />

            <Stack.Screen
                name="Group"
                component={Group}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
      </NavigationContainer>
  );
}
