import { Text, View, StyleSheet, TouchableOpacity, Icon } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LinearGradient } from "expo-linear-gradient";
import { Card, Title, Paragraph, Button, Avatar, IconButton} from "react-native-paper";

const ExploreScreen = ({ navigation, route }) => {
  
  const [counter, setCounter] = React.useState(0);
  const [mute, setMute] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  React.useEffect(() => {
    if(!pause && counter > 0){
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [counter]);

  function convertTime() {
    let minutes = Math.floor(counter / 60);
    let seconds = counter % 60;
    if(seconds === 0){
      seconds = "00";
    }
    return `${minutes}:${seconds}`;
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#FBC9F9", "#7BDAFD", "#B2F2FB"]}
        style={styles.background}
        start={{ x: 0, y: 0.4 }}
      />
      <Card
        style={{
          width: "90%",
          height: "60%",
          marginTop: -100,
        }}
      >
        {/* convert counter to minutes */}

        <Text>Time Left: {convertTime()}</Text>
        <Button
          onPress={() => {
            if (counter == 0) {
              setCounter(600);
            }
          }}
        >
          Press me
        </Button>
      </Card>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon={mute ? "microphone-off" : "microphone"}
          size={40}
          color={mute ? "red" : "#F6FFB1"}
          mode="outlined"
          onPress={() => setMute(!mute)}
          style={{backgroundColor: "#FBC9F9", marginTop: 20}}
        />
        <IconButton
          icon="camera-flip-outline"
          size={40}
          color={"#F6FFB1"}
          mode="outlined"
          onPress={() => console.log("Pressed")}
          style={{backgroundColor: "#FBC9F9", marginLeft:40, marginRight: 40, marginTop: 20}}
        />
        <IconButton
          icon="phone-hangup-outline"
          size={40}
          color={"#F6FFB1"}
          mode="outlined"
          onPress={() => setCounter(0)}
          style={{backgroundColor: "red", marginTop: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    //flipped the gradient
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  image: {
    height: 55,
    resizeMode: "contain",
  },
  
  
});

export default ExploreScreen;
