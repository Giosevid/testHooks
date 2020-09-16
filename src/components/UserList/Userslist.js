import React from 'react'
import { StyleSheet, SafeAreaView, Text, FlatList, Image, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../styles'
import { FONT_REGULAR, FONT_SIZE_12, FONT_SIZE_18 } from '../../styles/typography'

export default function UsersList({ users, navigation }) {

    const renderItem = ({ item }) => {
        const onPress = () => navigation.navigate('UserDetails', { screen: 'UserDetails', params: item, })
        
        return (
            <TouchableOpacity 
                onPress={onPress} 
                style={[styles.itemContainer, item.gender === 'male' ? styles.male : styles.female]}>
                <Image style={styles.itemImage} source={{ uri: item.picture.medium}} />
                <View>
                    <Text style={styles.itemTitle}>{`${item.name.first} ${item.name.last}`}</Text>
                    <Text style={[styles.itemTitle, styles.textViewMore]}>Ver mas</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={item => `${item.name.first}${item.name.last}`}
            />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 1
    },
    itemTitle: {
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_18,
        color: Colors.GRAY_DARK,
        textAlign: 'left',
        marginLeft: 10,
        color: Colors.WHITE
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    male: {
        backgroundColor: Colors.PRYMARY_MALE
    },
    female: {
        backgroundColor: Colors.PRYMARY_FEMALE
    },
    textViewMore: {
        fontSize: FONT_SIZE_12
    }
})
