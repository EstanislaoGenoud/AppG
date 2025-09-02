import { View, Text, TextInput, TouchableOpacity } from "react-native";
import SecureStore from "expo-secure-store";
import { useState, useEffect } from "react";

import { stylesLg } from "../Styles/StylesLg";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  return (
    <View style={stylesLg}>
      <Text>Login</Text>
      <TextInput
        style={stylesLg.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
				value={email}
				onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={stylesLg.input}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        placeholder="Password"
				value={password}
				onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={stylesLg.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={stylesLg.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={stylesLg.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={stylesLg.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
