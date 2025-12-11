import React from "react";
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/5xlm8F3QLdJcyS6uKoMYHK?si=QpNxnU2XR4K0rcFTy_KiYA";

/**
 * Deep link to your Spotify playlist.
 */
const MusicScreen = () => {
  const openSpotify = async () => {
    try {
      const supported = await Linking.canOpenURL(SPOTIFY_PLAYLIST_URL);
      if (supported) {
        await Linking.openURL(SPOTIFY_PLAYLIST_URL);
      } else {
        Alert.alert("Error", "Spotify is not available on this device.");
      }
    } catch (err) {
      Alert.alert("Error", "Could not open Spotify.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who Got Next Playlist</Text>
      <Text style={styles.subtitle}>Tap below to open on Spotify.</Text>

      <TouchableOpacity style={styles.button} onPress={openSpotify}>
        <Text style={styles.buttonText}>Open in Spotify</Text>
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

export default MusicScreen;
