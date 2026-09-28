// App.js
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");

  let content;
  if (currentScreen === "Home") {
    content = <HomeScreen />;
  } else if (currentScreen === "Settings") {
    content = <SettingsScreen />;
  }

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => setCurrentScreen("Home")} />
      <Button title="Settings" onPress={() => setCurrentScreen("Settings")} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
});