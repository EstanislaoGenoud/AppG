// Pantalla de Perfil
import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
      <View style={stylesPro.profileSideBar}>
        <TouchableOpacity>
          <Text style={stylesPro.profileSideBarItem}>
            <MaterialIcons name="settings" size={24} color="black" /> Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={stylesPro.profileSideBarItem}>
            <MaterialIcons name="logout" size={24} color="black" /> Logout
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={stylesPro.profileSideBarItem}>
            <MaterialIcons name="delete" size={24} color="black" /> Delete
            Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
