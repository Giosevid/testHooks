import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Button from '../components/commons/Button/Button';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen(props) {
  const actionButton = () => props.navigation.navigate('Perfiles');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
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

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={HomeScreen} />
        <Drawer.Screen name="Article" component={Perfiles} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;