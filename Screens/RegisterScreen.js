import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { stylesReg } from "../Styles/StylesReg.js";
import { AuthContext } from "../context/authContext.js";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      await register(email, password);
      alert("Usuario Registrado con Exito!.");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  return (
    <View style={stylesReg.container}>
      <TextInput
        style={stylesReg.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={stylesReg.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
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
}
