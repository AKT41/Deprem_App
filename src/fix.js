import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

function SonDepremler(props) {
  const [depremler, setDepremler] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  useEffect(() => {
    fetch("https://api.kursad.app/deprem/last?count=50")
      .then((response) => response.json())
      .then((data) => setDepremler(data))
      .catch((error) => console.error(error));
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Son Depremler</Text>
      </View>
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
            <View style={styles.card}>
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
                    <Text style={styles.cardtext2}> {deprem.magnitude}</Text>
                  </Text>
                  <Text style={styles.cardtext}>
                    Derinlik:
                    <Text style={styles.cardtext2}> {deprem.depth}</Text>
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
                    Saat: <Text style={styles.cardtext2}> {deprem.time}</Text>
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
