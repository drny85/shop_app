import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Colors from '../../constants/Colors';

const ProductItem = props => {

    const { image, title, price, viewDetail, addToCart } = props;
    let Touchable = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchable = TouchableNativeFeedback;
    }
    return (

        <Touchable onPress={viewDetail} useForeground>
            <View style={styles.product}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>${price}</Text>
                </View>

                <View style={styles.buttonView}>
                    <Button title="View Details" buttonStyle={styles.btnDetail} onPress={viewDetail} />
                    <Button title="Add to Cart" buttonStyle={styles.btnCart} onPress={addToCart} />

                </View>
            </View>
            <Divider style={{ backgroundColor: 'grey', marginHorizontal: 10 }} />

        </Touchable>
    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.28,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        height: 300,
        overflow: 'hidden',


    },
    image: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
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
        padding: 15,
        marginTop: 10
    },
    btnCart: {

        paddingHorizontal: 12,
        backgroundColor: Colors.primary

    },
    btnDetail: {
        paddingHorizontal: 10,
        backgroundColor: Colors.primary
    }
})


export default ProductItem;
