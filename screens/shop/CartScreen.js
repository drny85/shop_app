import React from 'react'
import { View, Text } from 'react-native';
import { useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const CartScreen = () => {

    const totalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (let key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quatity,
                sum: state.cart.items[key].sum
            })
        }
        return transformedCartItems;
    })

    return (
        <View>
            <Text>Cart Screen</Text>
        </View>
    )
}

CartScreen.navigationOptions = props => {
    return {
        headerTitle: 'Cart'
    
       
    }
}

export default CartScreen;
