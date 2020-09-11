import React from 'react'
import { View, Text } from 'react-native';
import Button from '../components/commons/Button';

export default function Detail() {
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
      </View>
    );
};
