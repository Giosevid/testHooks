import React from 'react'
import * as Animatable from 'react-native-animatable'
import { StyleSheet, Text, View } from 'react-native'

export default function Error({ label }) {
    return (
        <Animatable.View animation="flipInY" duration={1100} delay={1400}>
            <Text style={styles.textRed}>{label}</Text>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    textRed: {
        color: 'red'
    }
})
