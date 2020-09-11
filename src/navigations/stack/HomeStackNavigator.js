import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../../screens/Home";
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

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
      <HomeStack.Screen name="Home" component={Home} options={{
        title: 'Inicio',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>
        )
      }}/>
    </HomeStack.Navigator>
)

export default HomeStackScreen