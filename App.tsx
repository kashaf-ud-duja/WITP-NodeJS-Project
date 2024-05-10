import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import MainContainer from './maincontainer/MainContainer';
import MainContainer from './maincontainer/screens/HomeScreen';
import React from 'react';
import ItemDetailsScreen from './maincontainer/screens/ItemDetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
<NavigationContainer>
 <Stack.Navigator>
  <Stack.Screen name = "MainContainer" component = {MainContainer}/>
  <Stack.Screen name = "Details" component = {ItemDetailsScreen}/>
 </Stack.Navigator>
</NavigationContainer>

    </SafeAreaProvider>
  );
  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
