import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { stylesReg } from "../Styles/StylesReg.js";
import { AuthContext } from "../context/authContext.js";
import { useContext } from "react";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      await register(email, password);
      alert("Usuario Registrado con Exito!.");
      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
    return (
      <View style={stylesReg}>
        <Text>Register</Text>
        <TextInput
          style={stylesReg.input}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={stylesReg.input}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={stylesReg.button} onPress={handleRegister}>
          <Text style={stylesReg.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    );
  };
}
