import { Text, View, StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from 'expo-linear-gradient';

const MessageScreen = ({ navigation, route }) => {
   return (
    <View style={styles.container}>
    <LinearGradient
      // Background Linear Gradient
      colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
      style={styles.background}
      start={{ x: 0, y: 0.4 }}
    />
    <Text style={{ color: "#587A8C", fontSize: 20}}>Find A Match</Text>
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
export default MessageScreen;
