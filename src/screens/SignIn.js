import React, {useState} from 'react'
import { useFormik } from 'formik';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Typography } from '../styles'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../components/commons/Input'
import Button from '../components/commons/Button';

export default function SignIn() {

    const [isValidEmail, setisValidEmail] = useState(false)
    const [showPassword, setshowPassword] = useState(true)

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values));
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Bienvenido!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textFooter}>Email</Text>
                <View style={styles.action}>
                    <Icon name="person-outline" color="#05375a" size={20} />
                    <Input placeholder="Tu email" onChange={formik.handleChange('email')} />
                    <Icon name="checkmark-circle-outline" color="green" size={20} />
                </View>
                <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <Icon name="lock-closed-outline" color="#05375a" size={20} />
                    <Input placeholder="Password" password={showPassword} />
                    <Icon name="eye-off-outline" color="green" size={20} onPress={() => setshowPassword(!showPassword)} />
                </View>
                <Button label="Aceptar" onPress={formik.handleSubmit} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387"
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textHeader: {
        color: "#fff",
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_30
    },
    textFooter: {
        color: "#05375a",
        fontSize: Typography.FONT_SIZE_18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingHorizontal: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a' 
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSignIn: {
        fontSize: Typography.FONT_SIZE_18,
        fontFamily: Typography.FONT_FAMILY_BOLD
    }
})
