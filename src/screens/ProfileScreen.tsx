import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Profile = W/L, tier, avatar, premium, loot box, merch.
 */
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.subtitle}>
        Stats, tier, avatar, premium status will live here.
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

export default ProfileScreen;
