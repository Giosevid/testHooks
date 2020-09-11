import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../../screens/Detail';
import Icon from 'react-native-vector-icons/Ionicons';


const DetailStack = createStackNavigator();

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
      <DetailStack.Screen name="Detail" component={Detail} options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>
        )
      }} />
    </DetailStack.Navigator>

)
 
export default DetailStackScreen;