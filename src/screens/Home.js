import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/commons/Button';
import Input from '../components/commons/Input';


export default function Home() {
    const actionButton = () => NavigationRoot.navigate('Detail');
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Input placeholder="correo electrónico" />
        <Button action={actionButton} label='Ir a Detail' />
      </View>
    );
};