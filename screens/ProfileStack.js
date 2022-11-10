import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';


const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{
        headerShown: false
         }}>
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
  );
};

export default ProfileStack;