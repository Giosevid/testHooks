import React from 'react';
import Notifications from '../../screens/Notifications';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationsStack = createStackNavigator();

const NotificationsStackScreen = ({navigation}) => (
    <NotificationsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <NotificationsStack.Screen name="Notifications" component={Notifications} options={{
        title: 'Inicio',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>
        )
      }}/>
    </NotificationsStack.Navigator>
)

export default NotificationsStackScreen;