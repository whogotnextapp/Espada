import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Settings = privacy, data sharing, wearable toggle, notifications.
 */
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>
        Control data sharing, notifications, wearables, and account settings.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 24,
    justifyContent: "center",
  },
  title: { fontSize: 26, color: "white", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#ccc" },
});

export default SettingsScreen;
