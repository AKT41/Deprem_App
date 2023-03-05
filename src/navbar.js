import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Navbar = (navigation, props) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate("Home")}
      >
        <FontAwesome name="home" size={25} color="#fff" />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.navItem}>
        <FontAwesome name="home" size={25} color="#fff" />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.navItem}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate("About")}
      >
        {/* <FontAwesome name="info" size={25} color="#fff" /> */}
        <Image
          source={require("../assets/24-hours.png")}
          style={{ width: 35, height: 35 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
        <FontAwesome name="exclamation-circle" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate("Settings")}
      >
        <FontAwesome name="gear" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    width: "90%",
    backgroundColor: "#058a00b2",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    zIndex: 999,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
