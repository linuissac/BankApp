/**
 * Created by Linu Sherin Issac
 * on Jan 5, 2023
 * Navigation - Navigation methods
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/** Screens */
import LoginScreen from '../screen/Login';
import PreLoaderScreen from '../screen/PreLoaderScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="driver_list" component={{}} />
      <Tab.Screen name="driver_create" component={{}} />
      <Tab.Screen name="list_passenger" component={{}} />
    </Tab.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="preloading"
      screenOptions={{
        headerMode: 'none',
      }}>
      <Stack.Screen name="preloading" component={PreLoaderScreen} />
      <Stack.Screen name="login_screen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
