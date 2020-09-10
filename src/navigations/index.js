import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Button from '../components/commons/Button/Button';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Input from '../components/commons/Input';
import Menu from './Menu';
import { navigationRef } from './NavigationRoot';
import * as NavigationRoot from './NavigationRoot'

function HomeScreen(props) {
  const actionButton = () => NavigationRoot.navigate('Perfiles');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Input placeholder="correo electrónico" />
      <Button action={actionButton} label='Ir a' />
    </View>
  );
}

function Perfiles(props) {
  const actionButton = () => props.navigation.navigate('Home')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Perfil Screen</Text>
      <Button action={actionButton}  label='Ir a' />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfiles" component={Perfiles} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;