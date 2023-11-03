import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeMain from './components/Screens/Home/HomeMain';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
     <Tab.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
       }}
     >
       <Tab.Screen 
         name="Home" 
         component={HomeMain} 
         options={{
           tabBarLabel: 'Home',
           tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="home" color={color} size={size} />
           ),
         }}
       />
       <Tab.Screen 
         name="Favorite" 
         component={HomeMain} 
         options={{
           tabBarLabel: 'Favorite',
           tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="heart" color={color} size={size} />
           ),
         }}
       />
       <Tab.Screen 
         name="Cart" 
         component={HomeMain} 
         options={{
           tabBarLabel: 'Cart',
           tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="cart" color={color} size={size} />
           ),
         }}
       />
       <Tab.Screen 
         name="Car" 
         component={HomeMain} 
         options={{
           tabBarLabel: 'Car',
           tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="wave" color={color} size={size} />
           ),
         }}
       />
     </Tab.Navigator>
   </NavigationContainer>
  );
}

