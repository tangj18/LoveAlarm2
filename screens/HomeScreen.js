import { SafeAreaView, Text, View, Image, StyleSheet, Animated } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button } from 'react-native-paper';


import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
        style={styles.background}
        start={{ x: 0, y: 0.4 }}
      />
      <Image source={require("../assets/lovealarm.png")}  style={styles.image} />
      <Image
        source={require("../assets/lovealarmyellow.png")}
        //center image in the screen
        style={{
          width: 500,
          height: 500,
          alignSelf: "center",
          transform: [{ rotate: "20deg" }],
          marginLeft: 20,
        }}
      />
      

      <Button mode="contained" style={{
        borderRadius: 10,
        backgroundColor: '#FBC9F9',
      }}
      onPress={() => navigation.navigate("LoginPage")}
      ><Text style={{ color: "#587A8C", fontSize: 20}}>Login</Text></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    //flipped the gradient
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  image: {
    height: 55,
    resizeMode: "contain",
  },
});
export default HomeScreen;
