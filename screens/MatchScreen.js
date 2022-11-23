import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import * as React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
  IconButton,
  TextInput
} from "react-native-paper";

import { Video, AVPlaybackStatus } from 'expo-av'

const images = [
  {
    id: 1,
    type: "image",
    link: require("../assets/rose1.jpg"),
  },
  {
    id: 2,
    type: "image",
    link: require("../assets/rose3.jpg"),
  },
  {
    id: 3,
    type: "image",
    link: require("../assets/rose4.jpg"),
  },
  {
    id: 4,
    type: "video",
    link: require("../assets/roseVid.mp4"),
  },
  {
    id: 5,
    type: "video",
    link: require("../assets/roseVid2.mp4"),
  }
]

const {width} = Dimensions.get("window") ;
const height = width * 0.8;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10


const MatchScreen = ({ navigation, route }) => {
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
       <ScrollView>
         <View>
           {/* make a horizontal scrolling image section */}
           <ScrollView
             horizontal // Change the direction to horizontal
             pagingEnabled // Enable paging
             onScroll={change} // Add this prop
              showsHorizontalScrollIndicator={false}
           >
             {images.map((image, index) => {
              if(image.type === "image") {
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
                  } else {
                    return(
                      <Video
                      ref={video}
                      key={index}
                      style={styles.video}
                      source={image.link}
                      useNativeControls
                      resizeMode="contain"
                      isLooping
                      onPlaybackStatusUpdate={(status) =>
                        setStatus(() => status)
                      }
                      style={{
                        width: 360,
                      }}
                    />
                    )
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
             marginTop: 260,
           }}
         >
           
           {images.map((image, index) => {
              return (
                <Text
                  key={index}
                  style={index == active ? styles.pagingActiveText : styles.pagingText}
                >
                  ⬤
                </Text>
              );
           }
            )}
         </View>
         <Text
           style={{
             color: "black",
              fontSize: 25,
             textAlign: "center",
             paddingTop: 20,
             fontWeight: "bold",
             
           }}
           adjustsFontSizeToFit={true}
numberOfLines={1}
         >
           Do You Wish To Connect With?
         </Text>
         <Image
           source={require("../assets/rose2.jpg")}
           style={{
             width: 150,
             height: 150,
             borderRadius: 25,
             border: "solid",
             borderColor: "#587A8C",
             borderWidth: 2,
             position: "absolute",
             top: "30.5%",
             left:"7%"
             
           }}
         />
         <View
           style={{
             marginLeft: 210,
             marginTop: 12,
             position: "relative",
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
         <Card  style={{
              borderRadius: 20,
              backgroundColor: "#C2E3F3",
              marginTop: 30,
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
            }}>
             <Card.Content>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
              <Text style={{fontSize: 15}}>Enjoys singing, dancing, pineapple pizza and watching Kdramas!</Text>
              </Card.Content>
          </Card>
          <Card  style={{
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
            }}>
             <Card.Content>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Interests</Text>
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
                    Singing
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
                    Dancing
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
                    Traveling
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
                    Food
                  </Text>
                </Button>
              </View>
              </Card.Content>
          </Card>
         

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
             paddingBottom: 30,
           }}
         >
           <Button
             mode="contained"
             onPress={() => navigation.goBack()}
             color="#ff6052"
             style={{ width: "35%", marginLeft: 30 }}
           >
             <Text style={{ color: "black", fontSize: 16 }}>Pass</Text>
           </Button>
           <Button
             mode="contained"
             onPress={() => navigation.goBack()}
             color="#40ed51"
             style={{ width: "35%", marginRight: 30 }}
           >
             <Text style={{ color: "black", fontSize: 16 }}>Connect</Text>
           </Button>
         </View>
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
  pagingText: {
    color: '#888', margin: 3
  },
  pagingActiveText: {
    color: '#fff', margin: 3
  }
});

export default MatchScreen;
