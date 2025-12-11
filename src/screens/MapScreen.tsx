import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Map screen placeholder.
 * Next step: integrate MapView + Firestore real-time games & players.
 */
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map</Text>
      <Text style={styles.subtitle}>
        This will show real players and games around you.
      </Text>
      <Text style={styles.body}>
        We will wire GPS, Firestore, and geofencing next.
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
  subtitle: { fontSize: 16, color: "#ccc", marginBottom: 12 },
  body: { color: "#aaa" },
});

export default MapScreen;
