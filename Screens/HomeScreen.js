import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {styles} from "../Styles/StylesHo.js";
import { AuthContext } from "../context/authContext.js";

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const projects = [
    { id: "1", title: "Mobile App", date: "May 30, 2022", progress: "60%" },
    { id: "2", title: "Dashboard", date: "May 30, 2022", progress: "40%" },
    { id: "3", title: "Banner", date: "May 30, 2022", progress: "20%" },
    { id: "4", title: "UI/UX", date: "May 30, 2022", progress: "80%" },
    { id: "5", title: "Website", date: "May 30, 2022", progress: "50%" },
    { id: "6", title: "Design", date: "May 30, 2022", progress: "70%" },
    { id: "7", title: "Logo", date: "May 30, 2022", progress: "30%" },
    { id: "8", title: "Wireframe", date: "May 30, 2022", progress: "90%" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="grid-outline" size={24} color="#333" />
        
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>

      <Text style={styles.greeting}>
        Hi {user?.displayName || user?.email}!
      </Text>
      <Text style={styles.subGreeting}>Good Morning</Text>

      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Card de bienvenida */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>Welcome!</Text>
        <Text style={styles.welcomeSubtitle}>Let’s schedule your projects</Text>
      </View>

      {/* Proyectos */}
      <View style={styles.projectsHeader}>
        <Text style={styles.sectionTitle}>Ongoing Projects</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.projectCard}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text style={styles.progress}>Progress: {item.progress}</Text>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={26} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="list-outline" size={26} color="#333" />
        </TouchableOpacity>

        {/* FAB */}
        <TouchableOpacity style={styles.fab}>
          <MaterialIcons name="add" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="card-outline" size={26} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="person-outline" size={26} color="#333" />
        </TouchableOpacity>
      </View>
      {/* Modal de menu de usuario */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              {user?.displayName || user?.email}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#e74c3c",
                padding: 10,
                borderRadius: 8,
                marginBottom: 10,
                width: "100%",
              }}
              onPress={() => {
                logout();
                setMenuVisible(false);
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Cerrar sesión
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Text style={{ color: "#333" }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
