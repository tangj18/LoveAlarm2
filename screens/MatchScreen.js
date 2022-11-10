import { Text, View, StyleSheet, Image } from "react-native";
import * as React from "react";
import { LinearGradient } from 'expo-linear-gradient';

import { Button, TextInput } from 'react-native-paper';

const MatchScreen = ({ navigation, route }) => {
   return (
     <View style={styles.container}>
       <LinearGradient
         // Background Linear Gradient
         colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
         style={styles.background}
         start={{ x: 0, y: 0.4 }}
       />
       <Text
         style={{
           color: "black",
           fontSize: 25,
           textAlign: "center",
           paddingTop: 10,
           fontWeight: "bold",
         }}
       >
         Do You Wish To Connect With?
       </Text>
       <Image
         source={require("../assets/rose2.jpg")}
         style={{
           width: 150,
           height: 150,
           marginTop: 20,
           borderRadius: 25,
           border: "solid",
           borderColor: "#587A8C",
           borderWidth: 2,
           position: "absolute",
           top: 30,
           left: 30,
         }}
       />
       <View
         style={{
           marginLeft: 210,
           marginTop: 12,
         }}
       >
         <Text
           style={{
             fontSize: 25,
             fontWeight: "bold",
           }}
         >
           Rose Park
         </Text>
         <Text
           style={{
             fontSize: 25,
           }}
         >
           Age: 25
         </Text>
         <Text
           style={{
             fontSize: 25,
           }}
         >
           Markham, Ontario
         </Text>
       </View>
       <Text
         style={{
           fontSize: 25,
           margin: 10,
           marginTop: 30,
           lineHeight: 35,
         }}
       >
         Enjoys singing, dancing, pineapple pizza and Kdramas!
       </Text>
       {/*  put two buttons side by side */}
       <Text
         style={{
           fontSize: 20,
           color: "black",
           fontWeight: "bold",
           marginTop: 20,
           marginLeft: 10,
         }}
       >
         Send them a message to connect:
       </Text>
       <TextInput
         multiline
         numberOfLines={8}
         style={{
           margin: 10,
           borderRadius: 0,
         }}
       />
       <View
         style={{
           flexDirection: "row",
           justifyContent: "space-between",
           width: "100%",
           marginTop: 10,
         }}
       >
         <Button
           mode="contained"
           onPress={() => navigation.goBack()}
           color="#DC9292"
           style={{ width: "35%", marginLeft: 30 }}
         >
           <Text style={{ color: "black", fontSize: 16 }}>Pass</Text>
         </Button>
         <Button
           mode="contained"
           onPress={() => navigation.goBack()}
           color="#AAE387"
           style={{ width: "35%", marginRight: 30 }}
         >
           <Text style={{ color: "black", fontSize: 16 }}>Connect</Text>
         </Button>
       </View>
     </View>
   );
};

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
export default MatchScreen;
