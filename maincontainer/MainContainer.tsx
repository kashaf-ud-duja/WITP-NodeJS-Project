import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingsScreen';
import DetailScreen from './screens/Profile';
import Profile from './screens/Profile';
import { Settings } from 'react-native';

const homeName = 'Home';
const ProfileName = 'Profile';
const SettingName = 'Settings';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "home-outline";
          let routeName = route.name;
          if (routeName === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (routeName === ProfileName) {
            iconName = focused ? "search" : "search-outline";
          } else if (routeName == SettingName) {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#21463C",
        tabBarInactiveTintColor: "#8B8F8A",
        tabBarLabelStyle: {
          fontFamily: "Inter-Medium",
        },
        tabBarStyle: {
          paddingHorizontal: 15,
        },
        tabBarOptions: {},
        headerStyle: {},

        headerTintColor: "#575C57",
      })}
    >
         <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ProfileName}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={SettingName}
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
            </Tab.Navigator>
        </NavigationContainer>
    )
}