import { Text, View, Image } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MessageScreen from "./MessageScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const TabMain = ({ navigation, route }) => {
  return (
    <Tab.Navigator
    screenOptions={{
      // tab bar active background color
      tabBarActiveBackgroundColor: '#DEB1DE',
      // tab bar inactive background color
      tabBarInactiveBackgroundColor: '#FBC9F9',
      //hide label
      tabBarLabelStyle: { display: 'none' },
      //height
      tabBarStyle: { height: 60 },
      headerStyle: {
        backgroundColor: '#8EC7E4',
        height: 110
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center'
   }}
   >
      <Tab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={"yellow"}
              size={35}
            />
          ),
          headerTitle: () => (
            <Image
              style={{  height: 24, resizeMode: "contain", }}
              source={require('../assets/Matches.png')}
            />
          )
          
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              color={"yellow"}
              size={35}
            />
          ),
          headerTitle: () => (
            <Image
              style={{  height: 32, resizeMode: "contain", }}
              source={require('../assets/Explore.png')}
            />
          )
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={"yellow"}
              size={35}
            />
          ),
          headerTitle: () => (
            <Image
              style={{  height: 30, resizeMode: "contain", }}
              source={require('../assets/Profile.png')}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabMain;
