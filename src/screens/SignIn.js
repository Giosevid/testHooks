import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { Platform, StyleSheet, StatusBar, Text, View } from 'react-native'
import { Colors, Typography } from '../styles'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../components/commons/Input'
import Button from '../components/commons/Button';
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as NavigationRoot from '../navigations/NavigationRoot'
import * as Yup from 'yup'
import { LOGIN } from '../utils/constants'
import Error from '../components/commons/Error'

export default function SignIn() {
    const [showPassword, setshowPassword] = useState(true)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Email inválido").required("El email es requerido"),
            password: Yup.string().required("El password es requerido").min(3, 'debe tener mínimo 3 caracteres')
        }),
        onSubmit: ({ email, password }, { setErrors }) => {
            console.log()
            if (email !== "Test@test.com" && password !== 12345) {
               return setErrors({ email: 'email o contraseña inválido', password: 'email o contraseña inválido ' })
            }

            dispatch({ type: LOGIN })
        },
        handleSubmit: (payload, seErrors) => {
            console.log('payload', payload)
        }
    });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.textHeader}>Bienvenido!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer} >
                <Text style={styles.textFooter}>Email</Text>
                <View style={styles.action}>
                    <Icon name="person-outline" color={Colors.PRIMARY_ICON} size={20} />
                    <Input placeholder="Tu email" onChange={formik.handleChange('email')} />
                    <Animatable.View animation="bounceIn">
                        <Icon name="checkmark-circle-outline" color="green" size={20} />
                    </Animatable.View>
                </View>
                {<Error label={formik.errors.email} />}
                <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <Icon name="lock-closed-outline" color={Colors.PRIMARY_ICON} size={20} />
                    <Input placeholder="Password" password={showPassword} onChange={formik.handleChange('password')} />
                    <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                        <Icon 
                            name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
                            color="green" 
                            size={20} 
                        />
                    </TouchableOpacity>
                </View>
                <Error label={formik.errors.password} />
                <View style={styles.wrapButtons}>
                    <View style={styles.button}>
                        <Button label="Sign In" onPress={formik.handleSubmit} />
                    </View>
                    <View style={styles.button}>
                        <Button label="Sign Up" onPress={() => NavigationRoot.navigate('SignUp')} outline />
                    </View>
                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: Colors.WHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textHeader: {
        color: Colors.WHITE,
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_30
    },
    textFooter: {
        color: Colors.PRIMARY_ICON,
        fontSize: Typography.FONT_SIZE_18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.WHITE,
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
