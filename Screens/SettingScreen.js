import React, { useContext } from "react";
import { View, Button } from "react-native";
import { AuthContext } from "../context/authContext.js";

export default function SettingsScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
}
