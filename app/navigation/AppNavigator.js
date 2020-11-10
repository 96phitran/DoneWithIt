import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screen/AccountScreen";
import ListingEditScreen from "../screen/ListingEditScreen";
import ListingScreen from "../screen/ListingScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listing" component={ListingScreen} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
    <Tab.Screen name="Acount" component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
