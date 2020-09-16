import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import UserDetails from '../../screens/UserDetails';

const UserStack = createStackNavigator();

const UserListStackScreen = ({navigation}) => (
    <UserStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <UserStack.Screen name="UserDetails" component={UserDetails} options={{
        title: 'Inicio',
        headerLeft: () => (
          <Icon.Button name="arrow-undo-outline" size={25} backgroundColor="#009387" onPress={() => navigation.navigate('Home')}/>
        )
      }}/>
    </UserStack.Navigator>
)

export default UserListStackScreen