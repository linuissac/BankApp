/**
 * Created by Linu Sherin Issac
 * on Jan 5, 2023
 * Navigation - Navigation methods
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

/** Screens */
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import PreLoadingScreen from '../screens/PreLoadingScreen';

import Constants from '../config/Constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Token = () => {
  return null;
};

const Register = () => {
  return null;
};
const More = () => {
  return null;
};

const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          var iconName;
          switch (route.name) {
            case 'Insurance':
              iconName = 'flight';
              break;
            case 'RAKToken':
              iconName = 'vpn-key';
              break;
            case 'Register':
              iconName = 'library-books';
              break;
            case 'More':
              iconName = 'keyboard-control';
              break;
            default:
              iconName = 'flight';
              break;
          }
          return (
            <Icon
              name={iconName}
              size={22}
              color={
                focused ? Constants.APP_THEME_COLOR : Constants.APP_GREY_COLOR
              }
            />
          );
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: Constants.APP_BLACK_COLOR,
          elevation: 10,
          shadowColor: Constants.APP_BLACK_COLOR,
          shadowOpacity: 0.75,
          shadowRadius: 10,
          borderTopWidth: 0,
        },
        activeTintColor: Constants.APP_THEME_COLOR,
        inactiveTintColor: Constants.APP_GREY_COLOR,
        keyboardHidesTabBar: true,
        backBehavior: 'none ',
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Insurance"
        component={LoginStack}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="RAKToken"
        component={Token}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <Tab.Screen options={{headerShown: false}} name="More" component={More} />
    </Tab.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="preloading"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="preloading" component={PreLoadingScreen} />
      <Stack.Screen name="home" component={MyTabs} />
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
