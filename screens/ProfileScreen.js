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
} from "react-native-paper";

import EditProfileScreen from "./EditProfileScreen";

const ProfileScreen = ({ navigation: {navigate} }) => {
  const [name, setName] = React.useState("Joshua Ng");
  const [location, setLocation] = React.useState("Markham, Ontario");
  const [interests, setInterests] = React.useState("Music, Coding, and Gaming");
  const [edit, setEdit] = React.useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
        style={styles.background}
        start={{ x: 0, y: 0.4 }}
      />
      <IconButton icon="square-edit-outline" color="black" size={30} 
      //position top right corner
      style={{position: 'absolute', top: 0, right: 0, margin: 10}}
      onPress={() => navigate("EditProfileScreen", {name: name, location: location})} 
      
      />
      <Avatar.Image size={100} source={require('../assets/profileDP.png')} style={{
        //position top left corner
        position: 'absolute', top: 0, left: 0, marginTop: 40, marginLeft: 30
      }}/>
      <Text style={{ color: "black", fontSize: 30, position: 'absolute', top: 0, left: 0, marginTop: 60, marginLeft: 140 }}>{name}</Text>
      <Text style={{ color: "black", fontSize: 20, position: 'absolute', top: 0, left: 0, marginTop: 100, marginLeft: 140 }}>{location}</Text>
      <Card  style={{
          width: "90%",
          height: "70%",
          marginTop: 120,
          borderRadius: 20,
          backgroundColor: "#C2E3F3",
          // add border
          borderWidth: 1,
          borderColor: "black",
        }}>
        <Card.Content>
          <Title>Interests</Title>
          <Paragraph>{interests}</Paragraph>
        </Card.Content>
      </Card>

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
export default ProfileScreen;
