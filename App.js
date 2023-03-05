import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNaVigator from "./src/navigation";
import Navbar from "./src/navbar";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNaVigator />
      <StatusBar
        backgroundColor={"#7ead96e0"}
        animated={true}
        barStyle={"dark-content"}
      />
    </NavigationContainer>
  );
}
