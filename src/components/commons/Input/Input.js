import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Colors, Mixins } from '../../../styles';
import { onChange } from 'react-native-reanimated';

export default function Input({ placeholder, onChange }) {
    return(
        <TextInput style={styles.wrapper} placeholder={placeholder} onChangeText={onChange} />
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.PRIMARY,
        width: 200,
        ...Mixins.padding(10,15, 10, 15)
    }
})