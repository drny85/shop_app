import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

const ProductItem = props => {

    const { image, title, price, viewDetail, addToCart } = props;
    return (
        <View style={styles.product}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>

            <View style={styles.buttonView}>
                <Button title="View Details" onPress={viewDetail} />
                <Button title="To Cart" onPress={addToCart} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        height: 300

    },
    image: {
        width: '100%',
        height: '60%'
    },
    details: {
        height: '15%',
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 16,
        marginVertical: 4
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        padding: 15
    }
})


export default ProductItem;
