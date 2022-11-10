import { SafeAreaView, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button, TextInput } from 'react-native-paper';


import { LinearGradient } from 'expo-linear-gradient';


const SignUpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
        style={styles.background}
        start={{ x: 0, y: 0.4 }}
      />
      <Image source={require("../assets/lovealarm.png")} style={styles.image} />
      <ScrollView style={{
        marginTop: 50,
        paddingRight: 10,
        paddingLeft: 10,
        width: "100%",
      }}>
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
        }}>Login Information</Text>
        <TextInput
            placeholder="Username"
            placeholderTextColor="#587A8C"
            style={{
                margin: 10,
                height: 50
            }}
        />
        <TextInput
            placeholder="Email"
            placeholderTextColor="#587A8C"
            style={{
                margin: 10,
                height: 50
            }}
        />
        <TextInput
            placeholder="Password"
            placeholderTextColor="#587A8C"
            style={{
                margin: 10,
                height: 50
            }}
        />
        <TextInput
            placeholder="Password Confirmation"
            placeholderTextColor="#587A8C"
            style={{
                margin: 10,
                height: 50
            }}
        />
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
        }}>Profile Information</Text>
        <TextInput
            placeholder="Full Name"
            placeholderTextColor="#587A8C"
            style={{
                margin: 10,
                height: 50
            }}
        />
        <TextInput
            placeholder="Age"
            placeholderTextColor="#587A8C"
            style={{
                margin: 10,
                height: 50
            }}
        />
        <TextInput
            placeholder="Location"
            placeholderTextColor="#587A8C"
            style={{
                margin: 10,
                height: 50
            }}
        />
        <TextInput
            placeholder="Interests"
            placeholderTextColor="#587A8C"
            style={{
                margin: 10,
            }}
            multiline
            numberOfLines={4}
        />
        {/* align two buttons side by side */}
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 10,
            marginRight: 20,
            marginLeft: 20,
            
        }}>
            <Button 
            mode="contained"
            style={{
                borderRadius: 10,
                backgroundColor: "#DC9292",
                width: "40%",
                alignSelf: "flex-end",

            }}
            onPress={() => navigation.goBack()}
        >
            <Text style={{ color: "#587A8C", fontSize: 16 }}>Cancel</Text>
        </Button>
        <Button 
            mode="contained"
            style={{
                borderRadius: 10,
                backgroundColor: "#AAE387",
                width: "40%",
                alignSelf: "flex-end",

            }}
            onPress={() => navigation.navigate("TabMain")}
        >
            <Text style={{ color: "#587A8C", fontSize: 16 }}>Sign Up</Text>
        </Button>
        </View>
      </ScrollView>
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
    marginTop: 40,
    height: "7%",
    resizeMode: "contain",
  },
});
export default SignUpPage;
