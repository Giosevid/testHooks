import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { navigationRef } from './NavigationRoot'
import DrawerNavigator from './DrawerNavigator'
import TabsNavigator from './TabsNavigator'
import Settings from '../screens/Settings'
import Supoports from '../screens/Supoports'
import RootStackScreen from './stack/RootStackNavigator'
import Loader from '../components/commons/Loader/Loader'
import { LOGOUT } from '../utils/constants'
import UserListStackScreen from './stack/UserListStackNavigator'

const Drawer = createDrawerNavigator();

function RootNavigator() {
  const dispatch = useDispatch()
  const {loading, userToken} = useSelector(({ login }) => login)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: LOGOUT })
    }, 1000);
  }, [])

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <NavigationContainer ref={navigationRef}>
      { 
        userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerNavigator {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={TabsNavigator} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Supports" component={Supoports} />
            <Drawer.Screen name="UserDetails" component={UserListStackScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )
      }
    </NavigationContainer>
  );
}

export default RootNavigator;