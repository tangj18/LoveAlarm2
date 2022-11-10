import { Text, View, StyleSheet, TouchableOpacity, Icon, Image } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import {
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
  IconButton,
} from "react-native-paper";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";


const ExploreScreen = ({ navigation, route }) => {
  const [counter, setCounter] = React.useState(-1);
  const [mute, setMute] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [matched, setMatched] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.front);
  const [flash, setFlash] = React.useState(Camera.Constants.FlashMode.off);
  const cameraRef = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, [])

  React.useEffect(() => {
    if (!pause && counter > 0) {
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if(counter == 0){
      setSearch(false);
      setMatched(false);
      navigation.navigate("MatchScreen");
    }
  }, [counter]);

 
  const changeLoading = () => {
    setLoading(true);
    setSearch(true);
    setTimeout(() => {
      setMatched(true);
      setLoading(false);
      setCounter(600);
    }, 3000);
  };

  function convertTime() {
    let minutes = Math.floor(counter / 60);
    let seconds = counter % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (counter === 0 || counter === -1) {
      return "00:00";
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
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
          height: "70%",
          marginTop: 0,
          borderRadius: 20,
          backgroundColor: "#C2E3F3",
          // add border
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <Card.Content
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {matched ? (
            <View>
              <Image
                source={require("../assets/rose.png")}
                style={styles.image}
                style={{
                  
                  width: 322,
                  height: 426,
                  zIndex: 1,
                  borderRadius: 20,

                }}
              />

              <Camera
                type={type}
                flashMode={flash}
                ref={cameraRef}
                style={{
                  position: "absolute",
                  border: "solid",
                  borderColor: "black",
                  borderWidth: 1,

                  width: "30%",
                  height: "30%",
                  bottom: 10,
                  right: 10,
                  zIndex: 2,
                }}
              ></Camera>
            </View>
          ) : null}
          {search ? null : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Ready To Connect?</Text>
              <Text style={{ fontSize: 20 }}>Search For A New Match</Text>
              <Button
                onPress={() => {
                  if (counter == 0 || counter == -1) {
                    changeLoading();
                  }
                }}
                style={{
                  width: "50%",
                  height: 40,
                  backgroundColor: "#FBC9F9",
                  marginTop: 20,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  //add shadow
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                Search
              </Button>
            </View>
          )}
          {loading ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Loading...</Text>
            </View>
          ) : null}
        </Card.Content>
      </Card>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            //add shadow
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Time Left: {convertTime()}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <IconButton
          icon={mute ? "microphone-off" : "microphone"}
          size={40}
          color={mute ? "red" : "#F6FFB1"}
          mode="outlined"
          onPress={() => setMute(!mute)}
          style={{ backgroundColor: "#FBC9F9", marginTop: 20 }}
        />
        <IconButton
          icon="camera-flip-outline"
          size={40}
          color={"#F6FFB1"}
          mode="outlined"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
          style={{
            backgroundColor: "#FBC9F9",
            marginLeft: 40,
            marginRight: 40,
            marginTop: 20,
          }}
        />
        <IconButton
          icon="phone-hangup-outline"
          size={40}
          color={"#F6FFB1"}
          mode="outlined"
          onPress={() => {
            if (counter !== 0) {
              setCounter(0);
              setSearch(false);
              setMatched(false);
              navigation.navigate("MatchScreen");
            } else {
              //do nothing
              console.log("do nothing");
            }
          }}
          style={{ backgroundColor: "red", marginTop: 20 }}
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
