import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Supoports() {
    return (
        <View style={styles.container}>
            <Text>Supoports Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})
