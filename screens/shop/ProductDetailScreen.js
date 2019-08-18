import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Colors';

const ProductDetailScreen = ({ navigation }) => {
    const productId = navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.view}>
                <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />

            </View>
            <View style={styles.btn}>
                <Button title="Add to Cart" raised buttonStyle={styles.button} />
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
        headerTitle: navigation.getParam('productTitle')
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
    description: {
        fontSize: 14,
        padding: 10
    }
})

export default ProductDetailScreen
