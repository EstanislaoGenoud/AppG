// Estilos de Perfil
import { StyleSheet } from "react-native";

export const stylesPro = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FD", padding: 20 },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  profileTextName: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
    textAlign: "center",
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "center",
    backgroundColor: "#F8F9FD",
    borderShadowColor: "#000",
    borderShadowOpacity: 0.1,
    borderShadowOffset: { width: 0, height: 2 },
    borderShadowRadius: 4,
    elevation: 2,
  },
  profileContText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  profileText: {
    fontSize: 14,
    color: "#888",
  },
  profileSideBar: {
    backgroundColor: "#f0f0f0",
    width: "50%",
    height: "100%",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    justifyContent: "flex-start",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  profileSideBarItem: {
    fontSize: 16,
    marginVertical: 10,
  },
});
