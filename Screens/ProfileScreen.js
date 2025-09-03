// Pantalla de Perfil
import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../context/authContext.js";
import { stylesPro } from "../Styles/StylesPro.js";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function ProfileScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <View style={stylesPro.container}>
      <View style={stylesPro.profileCard}>
        <Ionicons
          style={stylesPro.profileImg}
          name="person-outline"
          size={100}
          color="#333"
        />
        <Text style={stylesPro.profileTextName}>
          {user?.displayName || user?.email}
        </Text>
        <View style={stylesPro.profileContText}>
          <Text style={stylesPro.profileText}>Proyects</Text>
          <Text style={stylesPro.profileText}>In Process</Text>
          <Text style={stylesPro.profileText}>Finished</Text>
        </View>
      </View>
    </View>
  );
}
