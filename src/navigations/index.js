import React, { useState, useEffect, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './NavigationRoot';
import DrawerNavigator from './DrawerNavigator';
import TabsNavigator from './TabsNavigator';
import Settings from '../screens/Settings';
import Supoports from '../screens/Supoports';
import * as NavigationRoot from './NavigationRoot';
import RootStackScreen from './stack/RootStackNavigator';
import Loader from '../components/commons/Loader/Loader';

const Drawer = createDrawerNavigator();

function RootNavigator() {
  const [loading, setloading] = useState(true)
  const [userToken, setuserToken] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }, [])

  const auth = () => useMemo(() => ({
    signIn: () => {
      setuserToken('123')
      setloading(false)
    },
    signOut: () => {
      setuserToken(null)
      setloading(false)
    },
    signUp: () => {
      setuserToken('123')
      setloading(false)
    }
  }))

  if (loading) {
    return (
      <Loader />
    )
  }

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