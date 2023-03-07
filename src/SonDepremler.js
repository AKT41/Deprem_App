import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
  Modal,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

function SonDepremler(props) {
  const [depremler, setDepremler] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const [isVisible, setIsVisible] = useState(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  useEffect(() => {
    fetch("https://api.kursad.app/deprem/last?count=50")
      .then((response) => response.json())
      .then((data) => setDepremler(data.data))
      .catch((error) => console.error(error));
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    fetch("https://api.kursad.app/deprem/last?count=50")
      .then((response) => response.json())
      .then((data) => {
        setDepremler(data.data);
        setRefreshing(false);
      });
  }, []);

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
  const image = {
    uri: "https://images.unsplash.com/photo-1603869311144-66b03d340b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGhxdWFrZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  };

  return (
    <ImageBackground
      source={image}
      style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4e4e4e9c",
        }}
      >
        {/* Büyüklük: 4.0 Derinlik: 6.6 Tarih: 04.03.2023 Saat: 06:03:40 */}
        <ScrollView
          style={{
            // backgroundColor: "transparent",
            width: "100%",
            zIndex: -1,
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor={"#fff"}
            />
          }
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 35,
          }}
        >
          {/* Deprem büyüklüğüne göre ya yazının backgroundu yada yazının rengi değişsin  */}
          <View style={styles.cards}>
            {depremler.map((deprem) => (
              <View style={styles.card} key={deprem.id}>
                <TouchableOpacity
                  onPress={() => {
                    setIsVisible(deprem.id);
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={styles.cardTitle}>
                    {deprem.magnitude} - {deprem.location}
                  </Text>
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: "red",
                      backgroundColor:
                        deprem.magnitude >= 4.0 && deprem.magnitude <= 4.9
                          ? "yellow"
                          : deprem.magnitude >= 5.0 && deprem.magnitude <= 5.9
                          ? "orange"
                          : deprem.magnitude >= 6.0 && deprem.magnitude <= 6.9
                          ? "red"
                          : deprem.magnitude >= 7.0 && deprem.magnitude <= 7.9
                          ? "purple"
                          : deprem.magnitude >= 8.0 && deprem.magnitude <= 8.9
                          ? "brown"
                          : deprem.magnitude >= 1.0 && deprem.magnitude <= 2.0
                          ? "green"
                          : deprem.magnitude >= 2.1 && deprem.magnitude <= 3.0,
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  />
                  <View
                    style={{
                      borderBottomColor: "#000",
                      borderBottomWidth: 0.2,
                      width: "106%",
                      marginLeft: -10,
                      marginTop: 10,
                      marginBottom: 25,
                    }}
                  ></View>
                  <Image
                    style={{
                      width: 300,
                      height: 150,
                      resizeMode: "contain",
                      marginLeft: 10,
                      // borderColor: "#000",
                      // borderWidth: 1,
                    }}
                    source={{ uri: deprem.map_url }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#4d4d4d",
                      textAlign: "right",
                    }}
                  >
                    {deprem.time}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: "#000",
                    // borderBottomWidth: 0.4,
                    width: "106%",
                    marginLeft: -10,
                    marginTop: 10,
                    marginBottom: 25,
                  }}
                ></View>
                <Modal
                  animationType="none"
                  transparent={true}
                  visible={isVisible === deprem.id}
                  statusBarTranslucent={true}
                  onRequestClose={() => {
                    setIsVisible(false);
                  }}
                  hardwareAccelerated={Platform.OS === "android" ? true : false}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#7979799c",
                    }}
                  >
                    <View style={styles.Modalcard}>
                      <Text style={styles.cardTitle}>{deprem.location}</Text>
                      <View
                        style={{
                          borderBottomColor: "#000",
                          borderBottomWidth: 0.2,
                          width: "106%",
                          marginLeft: -10,
                          marginTop: 10,
                          marginBottom: 25,
                        }}
                      ></View>
                      <TouchableOpacity
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                        }}
                        onPress={() => setIsVisible(null)}
                      >
                        <FontAwesome name="close" size={25} color="#000" />
                      </TouchableOpacity>
                      <Image
                        style={{
                          width: 300,
                          height: 150,
                          resizeMode: "contain",
                          marginLeft: 10,
                          // borderColor: "#000",
                          // borderWidth: 1,
                        }}
                        source={{ uri: deprem.map_url }}
                      />
                      <View
                        style={{
                          borderBottomColor: "#000",
                          borderBottomWidth: 0.4,
                          width: "106%",
                          marginLeft: -10,
                          marginTop: 10,
                          marginBottom: 25,
                        }}
                      ></View>
                      <View style={styles.cardTexts}>
                        <View>
                          <Text style={styles.cardtext}>
                            Büyüklüğü:
                            <Text style={styles.cardtext2}>
                              {" "}
                              {deprem.magnitude}
                            </Text>
                          </Text>
                          <Text style={styles.cardtext}>
                            Derinlik:
                            <Text style={styles.cardtext2}>
                              {" "}
                              {deprem.depth}
                            </Text>
                          </Text>
                        </View>
                        <View
                          style={{
                            borderLeftColor: "#000",
                            borderLeftWidth: 0.2,
                          }}
                        ></View>
                        <View>
                          <Text style={styles.cardtext}>
                            Tarih:
                            <Text style={styles.cardtext2}> {deprem.date}</Text>
                          </Text>
                          <Text style={styles.cardtext}>
                            Saat:{" "}
                            <Text style={styles.cardtext2}> {deprem.time}</Text>
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#4d4d4d",
                          textAlign: "right",
                          margin: 5,
                        }}
                      >
                        Haritada Gör
                      </Text>
                    </View>
                  </View>
                </Modal>
              </View>
            ))}
          </View>
        </ScrollView>

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

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate("Son Depremler")}
            onPressIn={handlePressIn2}
            onPressOut={handlePressOut2}
          >
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
    </ImageBackground>
  );
}

export default SonDepremler;

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
  cards: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // marginTop: 25,
    marginBottom: 50,
  },
  card: {
    width: "90%",
    // height: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginBottom: 25,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A120B",
    marginBottom: 5,
    marginLeft: 5,
  },
  cardTexts: {
    fontSize: 16,
    color: "#1A120B",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
  },
  cardtext: {
    fontSize: 16,
    color: "#1A120B",
    marginBottom: 5,
    fontWeight: "bold",
  },
  cardtext2: {
    fontSize: 16,
    color: "#1A120B",
    marginBottom: 5,
    fontWeight: "normal",
  },
  Modalcard: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginBottom: 25,
    marginHorizontal: 20,
    marginTop: 100,
  },
});
