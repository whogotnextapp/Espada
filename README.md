(Who Got Next™ MVP)

Espada is the foundational codebase for the Who Got Next™ mobile app — a real-time pickup sports platform built with Expo + React Native and designed for scalability across iOS and Android.

This codebase is focused on:

🎮 Real-time basketball & pickleball game discovery

🗺️ Player location map (Google Maps / Apple MapKit)

🧪 “The Lab” coaching content (influencers, creators, trainers)

🎵 Deep-linked Spotify playlists

▶️ Deep-linked YouTube podcast integration

💬 Messaging + DMs (Firestore-backed)

🔐 Firebase Auth (Email, Google, Apple)

🔥 Firestore real-time data

🎁 Profile tab with premium, loot boxes, and merch

📈 Wearable data + court heatmaps (future)

🚀 Tech Stack
Frontend

React Native (Expo)

React Navigation

Expo Maps (Google / Apple MapKit)

Deep linking (Spotify + YouTube)

Dark Mode UI theme

Backend

Firebase Authentication

Firebase Firestore

Firebase Storage

📂 Project Structure
Espada/
  App.tsx
  babel.config.js
  package.json
  app.json

  src/
    screens/
      LabScreen.tsx
      MusicScreen.tsx
      YoutubeScreen.tsx
      MapScreen.tsx
      InboxScreen.tsx
      ProfileScreen.tsx
      SettingsScreen.tsx

    navigation/
      RootTabs.tsx

    context/
      AuthContext.tsx
      PlayerContext.tsx
      GameContext.tsx

    services/
      firebase/
        firebaseConfig.ts
      index.ts

    theme/
      colors.ts
      theme.ts

    components/
      README.md

🏁 Getting Started

Install dependencies:

npm install


Run the project:

npx expo start


To open the app:

Press i for iOS Simulator

Press a for Android

Or scan the QR code using Expo Go on your device

🎨 Branding

The app uses the Who Got Next™ brand color palette:

Vibrant Orange — #F78A3A

Deep Red — #EE3D2C

Dark Gray / Black — #2A2A2A

White — #FFFFFF

Light Gray — #E6E6E6

Splash and icon assets live in /assets.

📦 Feature Roadmap
MVP Phase

Fix App entrypoint + boot navigation

Add Firebase Authentication

Add Firestore profile creation

Integrate Map with real court discovery

Add player avatar presets

Build friend system + DMs

Add game creation + result confirmation logic

Phase 2

Heatmaps (court activity levels)

Wearable integration (Smartwatch to detect real games)

Premium subscriptions

In-app currency + challenges

Live scorekeeping

Skill ranking and anti-collusion engine

🤝 Contributing

This repo will support your internal dev team (CTO + Uruguay team).
Code should follow:

Consistent formatting

Avoid Expo Router

Keep navigation inside App.tsx + src/navigation

Keep screens modular under /screens

PRs welcome once the project stabilizes.

⚖️ License

Private — All rights reserved. Who Got Next™ / Espada.