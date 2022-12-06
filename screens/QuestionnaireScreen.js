import { Text, View, StyleSheet } from "react-native";
import * as React from "react";
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {
  Card,
  TextInput,
  Button,
} from "react-native-paper";


const QuestionnaireScreen = ({ navigation, route }) => {
  const [answer, setAns] = useState('');
  const [tries, setTries] = useState(2);

  const verifyAnswer = () => {
    if (tries > 0) {
      var check_list = ["Singing", "Dancing", "Photography", "Movies", "Travelling", "Food"];
      var answers_array = answer.split(" ");
      var counter = 0; // count how many interests were matched

      check_list.forEach(interest => {
        answers_array.forEach(answer_i => {
          if (answer_i.toLowerCase() == interest.toLowerCase()) {
            counter++;
          }
        });
      });

      if (counter > 1) {
        navigation.navigate("ExploreScreen");
      }
      else {
        setTries(tries - 1);
      }
    }
    else {
      navigation.navigate("ExploreScreen");
    }
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

          <Text style={styles.text}> What are two of Rose's interests?</Text>

          <TextInput
            multiline
            editable
            maxLength={100}
            style={{
              width: 280,
              height: 120,
              textAlignVertical: 'top',
            }}
            onChangeText={(text) => setAns(text)}
          />

        </Card.Content>
      </Card>

      <View
        style={{
          marginTop: "10%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <Text style={{
          marginBottom: "5%",
          fontSize: 18,
          fontWeight: "bold",
          backgroundColor: "transparent",
          color: "#000000",
        }}> You only have {tries} tries remaining.</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            mode="contained"
            onPress={() => navigation.navigate("ExploreScreen")}
            color="#ff6052"
            style={{ width: "40%", marginRight: 36 }}
          >
            <Text style={{ color: "black", fontSize: 16 }}>Skip Match</Text>
          </Button>

          <Button
            mode="contained"
            onPress={() => verifyAnswer()}
            color="#40ed51"
            style={{ width: "40%" }}
          >
            <Text style={{ color: "black", fontSize: 16 }}>Match!</Text>
          </Button>
        </View>
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
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    marginBottom: 40,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: "#da76f5",
  },
  image: {
    height: 55,
    resizeMode: "contain",
  },
});

export default QuestionnaireScreen;
