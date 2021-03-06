import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements';
import CartItem from '../../components/shop/CartItem';

const CartScreen = ({ navigation }) => {

    const totalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (let key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }
        return transformedCartItems;
    })
    if (cartItems.length < 1) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>No Items in cart.</Text>
            <Button buttonStyle={{ padding: 15, paddingHorizontal: 20, marginTop: 20, backgroundColor: Colors.primary }} title="Shop Now" type='solid' onPress={() => navigation.navigate('ProductsOverview')} />
        </View>
    }
    return (
        <View style={styles.screen}>
            <View style={styles.orderNow}>
                <Text style={{ color: Colors.primary }}>Total ${totalAmount.toFixed(2)}</Text>
                <Button buttonStyle={{ backgroundColor: Colors.ascent, paddingHorizontal: 12 }} title="Order Now" />
            </View>
            <FlatList data={cartItems}
                keyExtractor={(item) => item.productId}
                renderItem={({ item }) =>
                    <CartItem title={item.productTitle} amount={item.sum} quantity={item.quantity} onRemove={() => { }} />
                }
            />

        </View>
    )
}

CartScreen.navigationOptions = props => {
    return {
        headerTitle: 'Cart'


    }
}

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    orderNow: {
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.28,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        shadowRadius: 8

    }
})

export default CartScreen;
