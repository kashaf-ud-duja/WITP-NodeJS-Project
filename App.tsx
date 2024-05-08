import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainContainer from './maincontainer/MainContainer';
import React from 'react';
import {
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function App() {

  return (
    <SafeAreaProvider>

    <MainContainer/>

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
