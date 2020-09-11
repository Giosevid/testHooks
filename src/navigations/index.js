import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './NavigationRoot';
import HomeStackScreen from './HomeStackNavigator';
import DetailStackScreen from './DetailStackNavigator';
import * as NavigationRoot from './NavigationRoot'

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name="Detail" component={DetailStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;