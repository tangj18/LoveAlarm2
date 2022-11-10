import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button, TextInput } from 'react-native-paper';


import { LinearGradient } from 'expo-linear-gradient';


const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
        style={styles.background}
        start={{ x: 0, y: 0.4 }}
      />
      <Image source={require("../assets/lovealarm.png")} style={styles.image} />
      <TextInput
        placeholder="Username"
        placeholderTextColor="#587A8C"
        style={{
          width: "80%",
          marginTop: 150,
        }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#587A8C"
        style={{
          width: "80%",
          marginTop: 30,
        }}
      />
      <Button
        mode="contained"
        style={{
          borderRadius: 10,
          backgroundColor: "#FBC9F9",
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("TabMain")}
      >
        <Text style={{ color: "#587A8C", fontSize: 20 }}>Login</Text>
      </Button>
      <Text style={{
        color: "black",
        marginTop: 20,
        fontSize: 16
      }}>Don't have an account? <Text onPress={() => {navigation.navigate("SignUpPage")}} style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>Sign up</Text></Text>
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
    marginTop: 0,
    height: "7%",
    resizeMode: "contain",
  },
});
export default LoginPage;
