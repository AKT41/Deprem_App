import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import Settings from "./settings";
import SonDepremler from "./SonDepremler";
// import Navbar from "./navbar";
import About from "./about.js";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const screenOptionStyle = {
  hearShown: false,
  headerStyle: {
    backgroundColor: "#7ead96e0",
  },
};

export default function HomeStackNaVigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => alert("Settings button clicked!")}
            style={{ marginRight: 15 }}
          >
            <FontAwesome name="gear" size={25} color="#000" />
          </TouchableOpacity>
        ),
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Ana Sayfa" component={Home} />
      <Stack.Screen name="Ayarlar" component={Settings} />
      <Stack.Screen name="Son Depremler" component={SonDepremler} />
      <Stack.Screen name="Hakkımızda" component={About} />
    </Stack.Navigator>
  );
}
