import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const ProductDetailScreen = ({ navigation }) => {
    const productId = navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));

    const cart = useSelector(state => state.cart);
    console.log(cart);

    const dispatch = useDispatch()

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.view}>
                <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />

            </View>
            <View style={styles.btn}>
                <Button title="Add to Cart" onPress={() => dispatch(cartActions.addToCart(selectedProduct))} raised buttonStyle={styles.button} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
                <Text style={styles.description}>{selectedProduct.description}</Text>
            </View>

        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions = ({ navigation }) => {

    return {
        headerTitle: navigation.getParam('productTitle'),
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Cart" onPress={() => navigation.navigate('Cart')} iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} />

        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10
    },

    view: {
        marginTop: 15,
        padding: 8
    },
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 25
    },
    textView: {
        height: '25%',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    btn: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 22,
        paddingVertical: 15
    },
    price: {
        fontSize: 18
    },
    description: {
        fontSize: 16,
        padding: 10,
        fontFamily: 'open-sans'
    }
})

export default ProductDetailScreen
