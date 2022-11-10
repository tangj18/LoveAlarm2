import { Text, View, Image } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

import MessageStack from "./MessageStack";
import ProfileStack from "./ProfileStack";
import ExploreStack from "./ExploreStack";
import {IconButton } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabMain = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{
        // tab bar active background color
        tabBarActiveBackgroundColor: "#DEB1DE",
        // tab bar inactive background color
        tabBarInactiveBackgroundColor: "#FBC9F9",
        //hide label
        tabBarLabelStyle: { display: "none" },
        //height
        tabBarStyle: { height: 60 },
        headerStyle: {
          backgroundColor: "#8EC7E4",
          height: 110,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerRight: () => (
          <IconButton
            icon="logout"
            onPress={() => navigation.navigate("Home")}
            color="#F6FFB1"
            size={30}
          />
        ),
      }}
    >
      <Tab.Screen
        name="MessageStack"
        component={MessageStack}
        options={{
          
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-multiple-outline"
              color={"yellow"}
              size={35}
            />
          ),
          headerTitle: () => (
            <Image
              style={{ height: 30, resizeMode: "contain", marginTop:8 }}
              source={require("../assets/Messages.png")}
            />
          ),
          
        }}
      />
      
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
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
              style={{ height: 32, resizeMode: "contain", marginTop: 5}}
              source={require("../assets/Explore.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
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
              style={{ height: 30, resizeMode: "contain", marginTop: 5 }}
              source={require("../assets/Profile.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabMain;
