import { Text, View, StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from 'expo-linear-gradient';
import {
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
  IconButton,
  TextInput,
} from "react-native-paper";

const EditProfileScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
        style={styles.background}
        start={{ x: 0, y: 0.4 }}
      />
      <Text style={{ color: "black", fontSize: 25, marginLeft: 10, marginTop: 10}}>Edit Profile Information</Text>
      {/* change text on change */}
      <Avatar.Image size={150} source={require("../assets/profileDP.png")} style={{marginLeft: 20, marginTop: 10}}/>
      <Button 
        mode="contained"
        style={{
          borderRadius: 10,
          marginTop: 30,
          width: "40%",
          position: "absolute",
          right: 20,
          top: 70,
          backgroundColor: "#8EC7E4"
        }}
      >
        <Text >Upload Image</Text>
      </Button>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <TextInput
        label="Name"
        style={{width: "90%", marginTop: 20, height: 50}}
      />
      <TextInput
        label="Birthday"
        style={{width: "90%", marginTop: 20, height: 50}}
      />
      {/* create a form to edit name, age, location, and interests */}
      <TextInput
        label="Location"
        style={{width: "90%", marginTop: 20, height: 50}}
      />
      <TextInput
        label="Interests"
        style={{width: "90%", marginTop: 20, height: 100}}
      />
      <Button mode="contained" style={{
        borderRadius: 10,
        backgroundColor: '#FBC9F9',
        marginTop: 10,
        marginLeft: 240,
      }}
      onPress={() => navigation.goBack()}
      ><Text style={{ color: "#587A8C", fontSize: 20}}>Save</Text></Button>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default EditProfileScreen;