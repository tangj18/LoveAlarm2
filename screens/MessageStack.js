import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessageScreen from './MessageScreen';
const Stack = createNativeStackNavigator();

const MessageStack = () => {
  return (
    
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
      </Stack.Navigator>
  );
};

export default MessageStack;