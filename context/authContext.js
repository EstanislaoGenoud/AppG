// Contexto de autenticacion

import React, {useState, useContext, useEffect } from "react";
import { createContext} from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";
import * as SecureStore from "expo-secure-store";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        await SecureStore.setItemAsync("userToken", firebaseUser.uid);
      } else {
        setUser(null);
        await SecureStore.deleteItemAsync("userToken");
      }
      setLoading(false);
    });
    return unsuscribe;
  }, []);
  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = async () => {
    return signOut(auth);
  };
  const register = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name });
    setUser({ ...userCredential.user });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
