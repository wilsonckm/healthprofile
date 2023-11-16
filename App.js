import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Value from "./src/components/Values";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>HealthKit Testing</Text>
      </View>
      <View style={styles.values}>
        <Value label={"Steps"} value={10} />
        <Value label={"Distance"} value={100} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#black",
    // alignItems: "center",
    justifyContent: "center",
  },

  values: {
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap",
  },
});
