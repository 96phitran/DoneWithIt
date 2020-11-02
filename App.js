import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
} from "react-native";

import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetaisScreen from "./app/screen/ListingDetaisScreen";
import MessagesScreen from "./app/screen/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}
