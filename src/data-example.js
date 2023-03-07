export const data = [
  {
    id: 1,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },

  {
    id: 2,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },

  {
    id: 3,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },

  {
    id: 4,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },

  {
    id: 5,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },
  {
    id: 6,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },
  {
    id: 7,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },
  {
    id: 8,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },
  {
    id: 9,
    title: "4.3 - BOZGEDIK-CELIKHAN (ADIYAMAN)",
    mapimage: require("../assets/map.jpg"),
    buyukluk: "4.6",
    derinlik: "6.6",
    tarih: "04.03.2023",
    saat: "06:03:40",
  },
];

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function About() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        // backgroundColor: "#393e46",
      }}
    >
      <View style={styles.cardBody}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 21,
            color: "#047800",
            textAlign: "left",
            // marginBottom: ,
            fontFamily: "serif",
          }}
        >
          Deprem Bilgiye hoş geldiniz
        </Text>

        <View style={styles.containerText}>
          <Text style={styles.text}>
            Bu uygulama, Türkiye'deki son depremleri görüntülemek için
            tasarlanmıştır. Uygulamamız verilerini kandilliden alıp güvenilir ve
            her zaman günceldir. Deprem Bilgi uygulamamız, Türkiye'deki
            depremler hakkında güncel ve doğru bilgiler sağlar.
          </Text>

          <Text
            style={[
              styles.text,
              { fontWeight: "bold", fontSize: 18, color: "#000", marginTop: 5 },
            ]}
          >
            Sağlıklı günler dileriz ...
          </Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            color: "#040404",
            textAlign: "center",
            marginTop: 10,
            backgroundColor: "#3e6c85",
            padding: 10,
            borderRadius: 20,
            position: "absolute",
            bottom: 15,
            right: -115,
          }}
        >
          Hadi uygulamayı keşfedelim
        </Text>
        {/* buraların altında telegram adresi bot adresi ve ahmetkemal.tech olsun  */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    margin: 15,
    fontFamily: "serif",
  },
  containerText: {
    // backgroundColor: lightBg,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  cardBody: {
    backgroundColor: "#9fd3c7d6",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "75%",
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default About;
