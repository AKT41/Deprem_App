import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Home = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  //   ***************************
  const handlePressIn2 = () => {
    setIsHovered2(true);
  };

  const handlePressOut2 = () => {
    setIsHovered2(false);
  };

  //   ***************************

  const handlePressIn3 = () => {
    setIsHovered3(true);
  };

  const handlePressOut3 = () => {
    setIsHovered3(false);
  };

  //   ***************************

  const handlePressIn4 = () => {
    setIsHovered4(true);
  };

  const handlePressOut4 = () => {
    setIsHovered4(false);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dceef5",
      }}
    >
      <Text>Home</Text>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate("Ana Sayfa")}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <FontAwesome name="home" size={25} color="#fff" />
          {isHovered ? <Text style={styles.navtext}>Ana Sayfa</Text> : null}
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.navItem}>
        <FontAwesome name="home" size={25} color="#fff" />
      </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate("Son Depremler")}
          onPressIn={handlePressIn2}
          onPressOut={handlePressOut2}
        >
          {/* <FontAwesome name="info" size={25} color="#fff" /> */}
          <Image
            source={require("../assets/24-hours.png")}
            style={{ width: 32, height: 32 }}
          />
          {isHovered2 ? (
            <Text style={styles.navtext}>Son Depremler</Text>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate("Hakkımızda")}
          onPressIn={handlePressIn4}
          onPressOut={handlePressOut4}
        >
          <FontAwesome name="exclamation" size={25} color="#fff" />
          {isHovered4 ? <Text style={styles.navtext}>Bilgi</Text> : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate("Ayarlar")}
          onPressIn={handlePressIn3}
          onPressOut={handlePressOut3}
        >
          <FontAwesome name="gear" size={25} color="#fff" />
          {isHovered3 ? <Text style={styles.navtext}>Ayarlar</Text> : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    width: "90%",
    backgroundColor: "#7ead96",
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
  navtext: {
    fontSize: 11,
    color: "#fff",
  },
  topnav: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    width: "100%",
    backgroundColor: "#f4f4f4",
    zIndex: 999,
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
  },
  Titletext: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#1A120B",
    marginLeft: 20,
  },
  navItemText: {
    color: "#1A120B",
    fontSize: 16,

    position: "absolute",
    bottom: 45,
  },
});
