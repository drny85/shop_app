import { ADD_TO_CART } from '../actions/cart'
import CardItem from '../../models/cart-item';

const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

            if (state.items[addedProduct.id]) {
                // item is already in the cart
                const updatedCartItem = new CardItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice
                );
                return {
                    ...state, items: { ...state.items, [addedProduct.id]: updatedCartItem }, totalAmount: state.totalAmount + productPrice
                }
            } else {
                // add item to the cart
                const newCartItem = new CardItem(1, productTitle, productPrice, productPrice);
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: newCartItem },
                    totalAmount: state.totalAmount + productPrice
                }
            }

        default:
            return state;
    }
}