import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TabMain from './screens/TabMain';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Stack.Screen name="TabMain" component={TabMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;