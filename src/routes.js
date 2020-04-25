import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Timer from './pages/Timer';


const AppStack = createStackNavigator();

const Routes = () => (
  <AppStack.Navigator screenOptions={{headerShown: false}}>
    <AppStack.Screen name="Welcome" component={Welcome} />
    <AppStack.Screen name="Timer" component={Timer} />

  </AppStack.Navigator>
);

export default Routes;
