import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Coaching & drills (The Lab).
 * Will load real Firestore videos and lessons.
 */
const LabScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Lab</Text>
      <Text style={styles.subtitle}>
        Real drills and coaching sessions will appear here.
      </Text>
      <Text style={styles.body}>
        Once connected to Firestore, this will show lessons from real creators
        and influencers.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 14,
  },
  body: {
    color: "#aaa",
  },
});

export default LabScreen;
