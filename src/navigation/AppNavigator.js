import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Test1, Test2 } from '../screens'
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppNavigator = () => (
<NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown: null,
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test1" component={Test1} />
        <Stack.Screen name="Test2" component={Test2} />
    </Stack.Navigator>
  </NavigationContainer>
)