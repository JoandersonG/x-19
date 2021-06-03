import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

//import { MainStackNavigator } from "./StackNavigator";
//import { MainStackNavigator } from "../navigation/StackNavigator";
import HomeScreen from "../components/HomeScreen";
import ProfileScreen from "../components/ProfileScreen";
//import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;