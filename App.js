import "react-native-gesture-handler";
import React from "react";
import { AuthProvider } from "./context/authContext.js";
import AppNavigator from "./Navigation/appNavigation.js";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
