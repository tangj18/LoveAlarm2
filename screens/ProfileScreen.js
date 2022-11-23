import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity} from "react-native";
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Video, AVPlaybackStatus } from 'expo-av'
import Tags from "react-native-tags";
import EditProfileScreen from "./EditProfileScreen";


const images = [
  {
    id: 1,
    link: require("../assets/josh1.jpg"),
    type: "image",
  },
  {
    id: 2,
    link: require("../assets/josh2.jpg"),
    type: "image",
  },
  
  {
    id: 3,
    link: require("../assets/joshVid1.mp4"),
    type: "video",
  }
]


const {width} = Dimensions.get("window") ;
const height = width * 0.8;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10

const ProfileScreen = ({ navigation: {navigate} }) => {
  const [name, setName] = React.useState("Joshua Ng");
  const [location, setLocation] = React.useState("Markham, Ontario");
  const [interests, setInterests] = React.useState("Music, Coding, and Gaming");
  const [edit, setEdit] = React.useState(false);

  const [active, setActive] = React.useState(0);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  function change({nativeEvent}) {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== active) {
      setActive(slide);
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
      <View>
      
        <ScrollView
          horizontal // Change the direction to horizontal
          pagingEnabled // Enable paging
          onScroll={change} // Add this prop
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => {
            if (image.type == "video") {
              return (
                <Video
                key={index}
                  ref={video}
                  style={styles.video}
                  source={image.link}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  style={{
                    width,
                    height,
                  }}
                />
              );
            } else {
              return (
                <Image
                  key={index}
                  source={image.link}
                  style={{
                    width,
                    height,
                  }}
                />
              );
            }
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          Top: 0,
          alignSelf: "center",
          marginTop: 250,
        }}
      >
        {images.map((image, index) => {
          return (
            <Text
              key={index}
              style={
                index == active ? styles.pagingActiveText : styles.pagingText
              }
            >
              ⬤
            </Text>
          );
        })}
      </View>
      
      <View
        style={{
          height: "52%",
          marginTop: 5,
        }}
      >
        <ScrollView>
         {/* position text to the right side of the screen */}
         <IconButton
        icon="square-edit-outline"
        color="black"
        size={30}
        //position top right corner
        style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
        onPress={() =>
          navigate("EditProfileScreen", { name: name, location: location })
        }
      />


          <Card
            style={{
              borderRadius: 20,
              backgroundColor: "#C2E3F3",
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              //drop down shadow
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 10,
            }}
          >
            <Card.Content>
              <Text
                style={{
                  color: "black",
                  fontSize: 30,
                  textAlign: "center",
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                {location}
              </Text>
            </Card.Content>
          </Card>
          <Card
            style={{
              borderRadius: 20,
              backgroundColor: "#C2E3F3",
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              //drop down shadow
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 10,
            }}
          >
            <Card.Content>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                <Icon name="home" size={30} /> Date Joined: 2021-01-01
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  paddingLeft: 3.5,
                  paddingTop: 7,
                  paddingBottom: 7,
                  
                }}
              >
                <Icon name="user" size={32} /> Gender: Male{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                <Icon name="heart" size={28} /> Interested In: Women
              </Text>
            </Card.Content>
          </Card>
          <Card
            style={{
              borderRadius: 20,
              backgroundColor: "#C2E3F3",
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              //drop down shadow
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 10,
            }}
          >
            <Card.Content>
              <Text
                style={{
                  fontSize: 20,
                  border: "1px solid black",
                }}
              >
                 Interests
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginTop: 10,
                }}
              >
                <Button
                  mode="contained"
                  clickable={false}
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#faafec",
                    alignSelf: "center",
                    margin: 5,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Rock Climbing
                  </Text>
                </Button>
                <Button
                  mode="contained"
                  clickable={false}
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#faafec",
                    alignSelf: "center",
                    margin: 5
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Gaming
                  </Text>
                </Button>
                <Button
                  mode="contained"
                  clickable={false}
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#faafec",
                    alignSelf: "center",
                    margin: 5
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Movies
                  </Text>
                </Button>
                <Button
                  mode="contained"
                  clickable={false}
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#faafec",
                    alignSelf: "center",
                    margin: 5
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Photography
                  </Text>
                </Button>
                <Button
                  mode="contained"
                  clickable={false}
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#faafec",
                    alignSelf: "center",
                    margin: 5
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Travelling
                  </Text>
                </Button>
                <Button
                  mode="contained"
                  clickable={false}
                  style={{
                    borderRadius: 25,
                    backgroundColor: "#faafec",
                    alignSelf: "center",
                    margin: 5
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Working Out
                  </Text>
                </Button>
              </View>
            </Card.Content>
          </Card>
          <Card style={{
              borderRadius: 20,
              backgroundColor: "#C2E3F3",
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 20,
              //drop down shadow
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 10 }}>
            <Card.Content>
            <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    About
                  </Text>
                  <Text style={{fontSize: 15}}>23 year old looking for a serious relationship. Enjoy listening to music, meeting new people and working out. Just moved to Markham and looking to make some new kind faces.</Text>
              </Card.Content>
            </Card>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  pagingText: {
    color: '#888', margin: 3
  },
  pagingActiveText: {
    color: '#fff', margin: 3
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
});
export default ProfileScreen;

{
  /* <View>
  <Text
    style={{
      //center text
      textAlign: "center",
    }}
  >
    Images
  </Text>
  <ScrollView
    horizontal // Change the direction to horizontal
    //  onScroll={change} // Add this prop
    showsHorizontalScrollIndicator={false}
  >
    {images.map((image, index) => {
      return (
        <Image
          key={index}
          source={image}
          style={{
            width,
            height,
          }}
        />
      );
    })}
  </ScrollView>
</View>; */
}