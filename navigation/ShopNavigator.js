import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import { Platform } from 'react-native'
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';


const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
}, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            }
        }
    })


export default createAppContainer(ProductsNavigator);