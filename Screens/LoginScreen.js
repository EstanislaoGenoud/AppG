import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/authContext.js";
import { stylesLg } from "../Styles/StylesLg.js";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={stylesLg.container}>
      <TextInput
        style={stylesLg.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={stylesLg.input}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={stylesLg.button} onPress={handleLogin}>
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