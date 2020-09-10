import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Mixins, Typography, Colors, Spacing } from '../../../styles';

export default function Button({ label, action }) {
    return(
        <TouchableOpacity style={styles.wrapper} onPress={action}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        ...Mixins.margin(20),
        ...Mixins.padding(10),
        width: 200,
        backgroundColor: Colors.WARNING,
        alignItems: "center",
        borderRadius: Spacing.SCALE_8
    },

    label: {
       color: Colors.WHITE,
       fontSize: Typography.FONT_SIZE_16,
       ...Typography.FONT_BOLD
    }
})