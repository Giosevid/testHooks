import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Mixins, Typography, Colors, Spacing } from '../../../styles';

export default function Button({ label, onPress, outline=false }) {
    return(
        <TouchableOpacity style={[styles.wrapper, outline ? styles.outline : styles.primary]} onPress={onPress}>
            <Text style={[styles.label, outline ? styles.labelOutline : styles.labelPrimary]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        ...Mixins.margin(10, 20, 10, 20),
        ...Mixins.padding(10),
        width: '100%',
        alignItems: "center",
        borderRadius: Spacing.SCALE_8
    },
    primary: {
        backgroundColor: '#009387',
    },
    outline: {
        borderColor: '#009387',
        borderWidth: 1 
    },
    label: {
        fontSize: Typography.FONT_SIZE_16,
        ...Typography.FONT_BOLD
     },
    labelPrimary: {
       color: Colors.WHITE,
    },
    labelOutline: {
        color: '#009387'
    }
})