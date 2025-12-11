// App.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who Got Next - Smoke Test</Text>
      <Text style={styles.subtitle}>If you see this, the entry is working.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    marginBottom: 8,
  },
  subtitle: {
    color: "#CCCCCC",
    fontSize: 14,
  },
});
