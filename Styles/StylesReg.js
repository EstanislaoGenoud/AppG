// Estilos para pantalla de Registro
import { StyleSheet } from "react-native";

export const stylesReg = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A", // azul oscuro elegante
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#1E3A8A", // azul oscuro
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#F9FAFB", // gris muy suave
  },
  button: {
    backgroundColor: "#1E3A8A", // azul principal
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    color: "#6B7280", // gris medio
    fontSize: 14,
  },
  linkText: {
    color: "#2563EB", // azul brillante para enlaces
    fontWeight: "600",
  },
});