import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './NavigationRoot';
import DrawerNavigator from './DrawerNavigator';
import TabsNavigator from './TabsNavigator';
import Settings from '../screens/Settings';
import Supoports from '../screens/Supoports';
import * as NavigationRoot from './NavigationRoot';
import RootStackScreen from './stack/RootStackNavigator';

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerNavigator {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={TabsNavigator} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Supports" component={Supoports} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default RootNavigator;