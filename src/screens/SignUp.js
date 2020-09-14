import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { TouchableOpacity, StyleSheet, StatusBar, View, Text, ScrollView } from 'react-native'
import { Typography } from '../styles'
import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../components/commons/Input'
import Button from '../components/commons/Button';
import * as Animatable from 'react-native-animatable'
import * as NavigationRoot from '../navigations/NavigationRoot'
import * as Yup from 'yup'
import { emailValidation, passwordValidation, confirmPasswordValidartions } from '../utils/Validations'

export default function SignUp() {
    const [isValidEmail, setisValidEmail] = useState(false)
    const [showPassword, setshowPassword] = useState(true)

    useEffect(() => {
        setisValidEmail(formik.values.email.length > 0 && !formik?.errors?.email)
        console.log('validateMail', formik.values.email.length > 0 && !formik.errors.email)
    }, [!formik?.errors?.email])


    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          repeatPassword: ''
        },
        validationSchema: Yup.object({
            email: emailValidation,
            password: passwordValidation,
            repeatPassword: confirmPasswordValidartions
        }),
        onSubmit: values => {
          console.log(values);
        },
    });
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.textHeader}>Registrarse Ahora!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <ScrollView>
                    <Text style={styles.textFooter}>Email</Text>
                    <View style={styles.action}>
                        <Icon name="person-outline" color="#05375a" size={20} />
                        <Input placeholder="Tu email" onChange={formik.handleChange('email')} />
                        <Animatable.View animation="bounceIn">
                            <Icon name="checkmark-circle-outline" color="green" size={20} />
                        </Animatable.View>
                    </View>
                    {<Text>{formik.errors.email}</Text>}
                    <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>
                    <View style={styles.action}>
                        <Icon name="lock-closed-outline" color="#05375a" size={20} />
                        <Input placeholder="Password" password={showPassword} onChange={formik.handleChange('password')} />
                        <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                            <Icon 
                                name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
                                color="green" 
                                size={20} 
                            />
                        </TouchableOpacity>
                    </View>
                    {<Text>{formik.errors.password}</Text>}
                    <Text style={[styles.textFooter, { marginTop: 35 }]}>Confirmar Password</Text>
                    <View style={styles.action}>
                        <Icon name="lock-closed-outline" color="#05375a" size={20} />
                        <Input placeholder="Confirmar Password" password={showPassword} onChange={formik.handleChange('repeatPassword')} />
                        <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                            <Icon 
                                name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
                                color="green" 
                                size={20} 
                            />
                        </TouchableOpacity>
                    </View>
                    {<Text>{formik.errors.repeatPassword}</Text>}
                    <View style={styles.wrapButtons}>
                        <View style={styles.button}>
                            <Button label="Sign Up" onPress={formik.handleSubmit} />
                        </View>
                        <View style={styles.button}>
                            <Button label="Sign In" onPress={() => NavigationRoot.navigate('SignIn')} outline />
                        </View>
                    </View>
                </ScrollView>
            </Animatable.View>
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
        marginRight: 30
    },
    wrapButtons: {
        marginTop: 20
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
