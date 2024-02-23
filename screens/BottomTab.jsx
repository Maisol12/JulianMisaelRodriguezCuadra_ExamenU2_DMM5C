import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import feed from './feed';
import buscar from './buscar';
import perfilpersonal from './perfilpersonal';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'feed') {
            iconName = focused ? 'home' : 'ios-home-outline';
          } else if (route.name === 'Buscar') {
            iconName = focused ? 'search' : 'ios-search-outline';
          } else if (route.name === 'PerfilPersonal') {
            iconName = focused ? 'person' : 'ios-person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="feed" component={feed} />
      <Tab.Screen name="Buscar" component={buscar} />
      <Tab.Screen name="PerfilPersonal" component={perfilpersonal} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
