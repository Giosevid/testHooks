import React from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Drawer } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Typography } from '../styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { LOGOUT } from '../utils/constants'

export default function DrawerNavigator(props) {
    const dispatch = useDispatch()

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userinfoSection}>
                        <View style={styles.row}>
                            <Avatar.Image 
                                source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHXi6kWCo1P3qJAuOnEAs6jWS1Dg1BqRkk8Q&usqp=CAU"
                                }}
                                size={50} 
                            />
                            <View style={{ marginLeft: 10}}>
                                <Text style={styles.title}>Giosevid Acosta</Text>
                                <Text style={styles.caption}>@giosevid</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem icon={({color, size}) => <Icon name="home-outline" color={color} size={size}/>} onPress={() => props.navigation.navigate('Home')} label="Inicio"/>
                    <DrawerItem icon={({color, size}) => <Icon name="person-circle-outline" color={color} size={size}/>} onPress={() => props.navigation.navigate('Profile') } label="Perfil"/>
                    <DrawerItem icon={({color, size}) => <Icon name="settings-outline" color={color} size={size} />} onPress={() => props.navigation.navigate('Settings')} label="Settings"/>
                    <DrawerItem icon={({color, size}) => <Icon name="people-outline" color={color} size={size} />} onPress={() => props.navigation.navigate('Supports')} label="Support"/>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({color, size}) => <Icon name="log-out-outline" color={color} size={size} />} onPress={() => dispatch({ type: LOGOUT }) } label="Salir"/>
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userinfoSection: {
        paddingLeft: 20
    },
    title: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_16
    },
    caption: {
       fontSize: Typography.FONT_REGULAR,
       fontSize: Typography.FONT_SIZE_12
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        ...Typography.FONT_BOLD,
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})

