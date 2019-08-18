import React from 'react'
import { View, Text } from 'react-native';
import { useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const CartScreen = () => {

    const cart = useSelector(state => state.cart);
    const {totalAmount, items} = cart;
    console.log(totalAmount);
    console.log(items);
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
