import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem'

const ProductsOverview = props => {

    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList
            data={products}
            keyExtractor={(item => item.id)}
            renderItem={({ item }) => <ProductItem image={item.imageUrl} title={item.title} price={item.price} viewDetail={() => { }} addToCart={() => { }} />}
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
