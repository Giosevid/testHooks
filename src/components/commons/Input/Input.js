import React from 'react';
import {TextInput, StyleSheet, Platform} from 'react-native';

export default function Input({ placeholder, onChange, password=false }) {
    return(
        <TextInput 
            style={styles.textInput} 
            placeholder={placeholder} 
            onChangeText={onChange} 
            secureTextEntry={password}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a' 
    },
})