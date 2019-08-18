import React from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const CartItem = ({ onRemove, quantity, title, amount }) => {
    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>{quantity}</Text>
                <Text style={styles.title}>{title}</Text>
            </Text>
            <View style={styles.cartItem}>
                <Text style={styles.title}>{amount}</Text>
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={onRemove}>
                    <Ionicons size={23} color="red" name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontFamily: 'open-sans',
        color: 'black',
        fontSize: 16,

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    }
})

export default CartItem
