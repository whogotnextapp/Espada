import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import InboxScreen from "../screens/InboxScreen";
import LabScreen from "../screens/LabScreen";
import MapScreen from "../screens/MapScreen";
import MusicScreen from "../screens/MusicScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import YoutubeScreen from "../screens/YoutubeScreen";

const Tab = createBottomTabNavigator();

/**
 * This is the bottom tab bar:
 * Lab | Music | YouTube | Map | Inbox | Profile | Settings
 */
const RootTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "#333333",
        },
        tabBarActiveTintColor: "#F78A3A",
        tabBarInactiveTintColor: "#888888",
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Lab":
              return (
                <MaterialCommunityIcons
                  name="flask-outline"
                  size={size}
                  color={color}
                />
              );
            case "Music":
              return (
                <Ionicons name="musical-notes" size={size} color={color} />
              );
            case "YouTube":
              return (
                <MaterialCommunityIcons
                  name="youtube-tv"
                  size={size}
                  color={color}
                />
              );
            case "Map":
              return (
                <Ionicons name="location-outline" size={size} color={color} />
              );
            case "Inbox":
              return (
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={size}
                  color={color}
                />
              );
            case "Profile":
              return (
                <Ionicons
                  name="person-circle-outline"
                  size={size}
                  color={color}
                />
              );
            case "Settings":
              return (
                <Ionicons name="settings-outline" size={size} color={color} />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Lab" component={LabScreen} />
      <Tab.Screen name="Music" component={MusicScreen} />
      <Tab.Screen name="YouTube" component={YoutubeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default RootTabs;
