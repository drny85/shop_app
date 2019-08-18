import React from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart'

const ProductsOverview = ({ navigation }) => {

    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList
            data={products}
            keyExtractor={(item => item.id)}
            renderItem={({ item }) => <ProductItem image={item.imageUrl} title={item.title} price={item.price.toFixed(2)} viewDetail={() => {
                navigation.navigate('ProductDetail',
                    {
                        productId: item.id,
                        productTitle: item.title

                    })
            }}
                addToCart={() => { dispatch(cartActions.addToCart(item)) }} />}
        />


    )
}

ProductsOverview.navigationOptions = {
    headerTitle: 'All Products'
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductsOverview
