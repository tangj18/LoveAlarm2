import { Text, View, StyleSheet, ScrollView } from "react-native";
import * as React from "react";
import { LinearGradient } from 'expo-linear-gradient';

import {Avatar, List} from 'react-native-paper';

const MessageScreen = ({ navigation, route }) => {
   return (
     <View style={styles.container}>
       <LinearGradient
         // Background Linear Gradient
         colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
         style={styles.background}
         start={{ x: 0, y: 0.4 }}
       />
       <Text style={{ color: "black", fontSize: 25, left: 5 }}>
         New Matches
       </Text>
       <ScrollView
         horizontal={true}
         style={{
           width: "98%",
           paddingBottom: 10,
         }}
       >
         <View
           style={{
             flexDirection: "row",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <Avatar.Text
             size={75}
             label="RP"
             style={{
               marginTop: 10,
               marginLeft: 10,
               backgroundColor: "#587A8C",
             }}
           />
           <Avatar.Text
             size={75}
             label="JP"
             style={{
               marginTop: 10,
               marginLeft: 10,
               backgroundColor: "#587abC",
             }}
           />
           <Avatar.Text
             size={75}
             label="MP"
             style={{
               marginTop: 10,
               marginLeft: 10,
               backgroundColor: "#0c0a8C",
             }}
           />
           <Avatar.Text
             size={75}
             label="LP"
             style={{ marginTop: 10, marginLeft: 10 }}
           />
           <Avatar.Text
             size={75}
             label="KP"
             style={{
               marginTop: 10,
               marginLeft: 10,
               backgroundColor: "#007aff",
             }}
           />
         </View>
       </ScrollView>
       <Text style={{ color: "black", fontSize: 25, left: 5 }}>Messages</Text>
       <ScrollView
         style={{
           height: "70%",
         }}
       >
         
         <List.Item
           title="Rachel Lee"
           description="Rachel: Omg, you have to teach me how to do that!"
           left={(props) => (
             <Avatar.Text
               label="RL"
               style={{
                 marginTop: 10,
                 marginLeft: 10,
                 marginRight: 10,
                 backgroundColor: "#FDF4E3",
               }}
             />
           )}
         />
         <List.Item
           title="Tina Park"
           description="You: I'm so excited to meet you!"
           left={(props) => (
             <Avatar.Text
               label="TP"
               style={{
                 marginTop: 10,
                 marginLeft: 10,
                 marginRight: 10,
                 backgroundColor: "#BDECB6",
               }}
             />
           )}
         />
         <List.Item
           title="Kimi Lin"
           description="You: Did you watch this show? Its so good!"
           left={(props) => (
             <Avatar.Text
               label="KL"
               style={{
                 marginTop: 10,
                 marginLeft: 10,
                 marginRight: 10,
                 backgroundColor: "#C51D34",
               }}
             />
           )}
         />
         <List.Item
           title="Allison Kim"
           description="Allison: 2 dogs and 1 cat!"
           left={(props) => (
             <Avatar.Text
               label="AK"
               style={{
                 marginTop: 10,
                 marginLeft: 10,
                 marginRight: 10,
                 backgroundColor: "#C1876B",
               }}
             />
           )}
         />
         <List.Item
           title="Chloe Ahn"
           description="Chloe: Where should we go?"
           left={(props) => (
             <Avatar.Text
               label="CA"
               style={{
                 marginTop: 10,
                 marginLeft: 10,
                 marginRight: 10,
               }}
             />
           )}
         />
       </ScrollView>
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
export default MessageScreen;
