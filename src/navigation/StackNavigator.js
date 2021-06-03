import React, { Component } from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../components/HomeScreen";
import Profile from "../components/ProfileScreen";
import Login from "../components/LoginScreen";
import Register from "../components/RegisterScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const LoginStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, LoginStackNavigator };