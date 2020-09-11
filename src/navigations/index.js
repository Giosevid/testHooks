import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Button from '../components/commons/Button/Button';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Input from '../components/commons/Input';
import { navigationRef } from './NavigationRoot';
import * as NavigationRoot from './NavigationRoot'

import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen(props) {
  const actionButton = () => NavigationRoot.navigate('Detail');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Input placeholder="correo electrónico" />
      <Button action={actionButton} label='Ir a Detail' />
    </View>
  );
}

function DetailScreen(props) {
  const actionButtonPush = () => props.navigation.push('Detail');
  const actionButton = () => props.navigation.navigate('Home');
  const actionButtonBack = () => props.navigation.goBack();
  const actionButtonPop = () => props.navigation.popToTop();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Button action={actionButtonPush}  label='Ir a Detail de nuevo' />
      <Button action={actionButton}  label='Ir a Home' />
      <Button action={actionButtonBack}  label='Ir a atras..' />
      <Button action={actionButtonPop}  label='Ir a la primera pantalla..' />
    </View>
  );
}

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#009387",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Inicio',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>
      )
    }}/>
  </HomeStack.Navigator>
)

const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#009387",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailStack.Screen name="Detail" component={DetailScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>
      )
    }} />
  </DetailStack.Navigator>
)

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