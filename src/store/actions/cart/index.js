import * as types from '../../action-types';
import products from '../../../demo/products';

export const addProductToCart = payload => ({
  type: types.ADD_PRODUCT_TO_CART,
  payload
});

export const removeProductFromCart = payload => ({
  type: types.REMOVE_PRODUCT_FROM_CART,
  payload
});

export const cartProducCleanup = () => ({
  type: types.CART_PRODUCT_CLEANUP
});

export const incrementPeoductQuantity = payload => ({
  type: types.INCREMENT_PRODUCT_QUANTITY,
  payload
});

export const decrementProductQuantity = payload => ({
  type: types.DECREMENT_PRODUCT_QUANTITY,
  payload
});

export const addProduct = id => async dispatch => {
  try {
    const product = products.find(product => product.id === id);
    product.quantity = 1;
    dispatch(addProductToCart(product));
    
  } catch (err) {
    console.log('err', err);
  }
}
