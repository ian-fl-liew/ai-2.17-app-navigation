import { StyleSheet, Text, View, Button } from "react-native";
import Header from "../components/Header";
import { Colors } from "../styles/colors";


// React Navigation provides navigation prop to all registered screens
// we can then call navigation.navigate("ScreenName") to navigate to different screens
export default function HotDealsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header>Hot Deals</Header>
      <Text>Welcome to the Hot Deals screen!</Text>
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
      <Button
        title="Apple iPhone @ $999"
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product: "Apple iPhone",
            id: 124,
            price: 999,
          })
        }
      />
      <Button
        title="Apple Watch @ $399"
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product: "Apple Watch",
            id: 125,
            price: 399,
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
});
