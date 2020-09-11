import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './NavigationRoot';
import HomeStackScreen from './stack/HomeStackNavigator';
import DetailStackScreen from './stack/DetailStackNavigator';
import * as NavigationRoot from './NavigationRoot'
import TabsNavigator from './TabsNavigator';

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabsNavigator}/>
        {/* <Drawer.Screen name="Detail" component={DetailStackScreen}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;