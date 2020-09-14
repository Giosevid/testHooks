import *  as Yup  from 'yup'

export const emailValidation = Yup.string().email("Email inválido").required("El email es requerido")
export const passwordValidation = Yup.string().required("El password es requerido")
export const confirmPasswordValidartions = Yup.string().required("El password es requerido").oneOf([Yup.ref("password")], "Las contraseñas no coinciden")