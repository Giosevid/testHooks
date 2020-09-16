import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Loader from '../components/commons/Loader/Loader'
import { Colors, Typography } from '../styles'

export default function UserDetails({ route: { params } }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(params)
    }, [params])

    if (!user) {
        return <Loader />
    }

    return (
        <View style={[styles.container, user.gender === 'male' ? styles.male : styles.female]}>
            <Image style={styles.wrapImage} source={{ uri: user.picture.large }} />
            <Text style={styles.text}>Nombre: {user.name.first} {user.name.last}</Text>
            <Text style={styles.text}>Edad: { user.dob.age }</Text>
            <Text style={styles.text}>Email: { user.email }</Text>
            <Text style={styles.text}>Ubicación: { user.location.country } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    wrapImage: {
        width: 100,
        height: 100,
        borderRadius: 55,
        marginVertical: 10
    },
    text: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
        textAlign: 'center',
        marginVertical: 10,
        color: Colors.WHITE
    },
    male: {
        backgroundColor: Colors.PRYMARY_MALE
    },
    female: {
        backgroundColor: Colors.PRYMARY_FEMALE
    },
})
