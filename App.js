import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from './screens/perfilpersonal';
import BottomTab from './screens/BottomTab';
import feed from './screens/feed';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="feed" screenOptions={{ headerShown: false }}>
        {}
        <Stack.Screen name="Home" component={BottomTab} />
        {}
        <Stack.Screen name="Perfilpersonal" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
