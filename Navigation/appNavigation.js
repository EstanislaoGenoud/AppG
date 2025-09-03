import React, {useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/authContext.js";

import LoginScreen from "../Screens/LoginScreen.js";
import RegisterScreen from "../Screens/RegisterScreen.js";
import HomeScreen from "../Screens/HomeScreen.js";
{
  /*import ProfileScreen from "";*/
}
import SettingScreen from "../Screens/SettingScreen.js";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);
  const [, setLoading] = React.useState(true);

  if (loading) return null;

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          {/* Rutas privadas */}
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
          <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          {/* Rutas públicas */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
