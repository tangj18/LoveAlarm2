import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from './ExploreScreen';
import MatchScreen from './MatchScreen';
import QuestionnaireScreen from './QuestionnaireScreen';


const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="ExploreScreen"
        screenOptions={{
        headerShown: false
         }}>
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        <Stack.Screen name="MatchScreen" component={MatchScreen} />
        <Stack.Screen name="QuestionnaireScreen" component={QuestionnaireScreen} />
      </Stack.Navigator>
  );
};

export default ExploreStack;