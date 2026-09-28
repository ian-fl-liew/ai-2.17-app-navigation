import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../components/Header";
import { Colors } from "../styles/colors";


// MenuScreen -> HomeScreen (state: "apple") -> ProductDetailScreen

// Scenario 1
// MenuScreen -> HomeScreen (state: "apple") # Click "Back"
// MenuScreen  # HomeScreen is destroyed/unmounted, state is lost
// MenuScreen -> HomeScreen (state: "")

// Scenario 2
// MenuScreen -> HomeScreen (state: "apple") -> ProductDetailScreen # Click "Back"
// MenuScreen -> HomeScreen (state: "apple") # HomeScreen is still mounted, state is preserved
// Because Homescreen stack was not pop in the second scenario.

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  useFocusEffect(() => {
    console.log("🟢 HomeScreen is focused");

    return () => console.log("🔴 HomeScreen is unfocused");
  });

  // const clearSearchQuery = () => setSearchQuery("");
  // const clearSearchQuery = useCallback(() => setSearchQuery(""), []);
  // useFocusEffect(clearSearchQuery);

  // useFocusEffect(
  //   useCallback(() => {
  //     setSearchQuery("");
  //   }, []),
  // );

  return (
    <View style={styles.container}>
      <Header>Home</Header>
      <Text style={styles.welcomeText}>Welcome to the Home screen!</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button
        title="Apple iPad @ $299"
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product: "Apple iPad",
            id: 123,
            price: 299,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "80%",
  },
});
