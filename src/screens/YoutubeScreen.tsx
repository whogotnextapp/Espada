import React from "react";
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const YOUTUBE_CHANNEL_URL = "https://youtube.com/@2tearsinabucketpodcast707";

/**
 * Deep link to your YouTube channel.
 */
const YoutubeScreen = () => {
  const openYouTube = async () => {
    try {
      const supported = await Linking.canOpenURL(YOUTUBE_CHANNEL_URL);
      if (supported) {
        await Linking.openURL(YOUTUBE_CHANNEL_URL);
      } else {
        Alert.alert("Error", "YouTube is not available.");
      }
    } catch (err) {
      Alert.alert("Error", "Could not open YouTube.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>2 Tears in a Bucket</Text>
      <Text style={styles.subtitle}>Tap below to open on YouTube.</Text>

      <TouchableOpacity style={styles.button} onPress={openYouTube}>
        <Text style={styles.buttonText}>Open in YouTube</Text>
      </TouchableOpacity>
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
  subtitle: { fontSize: 16, color: "#ccc", marginBottom: 20 },
  button: {
    backgroundColor: "#F78A3A",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 999,
  },
  buttonText: { color: "#121212", fontWeight: "bold", fontSize: 16 },
});

export default YoutubeScreen;
