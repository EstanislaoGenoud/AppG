// Configuracion de Firebase

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxArN43bwYjgN9T9XfV6AjUvi3kagkzto",
  authDomain: "integradormoviles.firebaseapp.com",
  projectId: "integradormoviles",
  storageBucket: "integradormoviles.firebasestorage.app",
  messagingSenderId: "1066021044496",
  appId: "1:1066021044496:web:465c5fbecbb9b08f15a595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);