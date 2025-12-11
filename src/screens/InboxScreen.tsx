import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Inbox = real player DMs + game chats.
 */
const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      <Text style={styles.subtitle}>
        Direct messages and game chat threads will appear here.
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
  title: { fontSize: 26, color: "#fff", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#ccc" },
});

export default InboxScreen;
