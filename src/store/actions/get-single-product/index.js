import * as types from '../../action-types';
import products from '../../../demo/products';

export const getSingleProductStart = () => ({
  type: types.GET_SINGLE_PRODUCT_START
});

export const getSingleProductSuccess = payload => ({
  type: types.GET_SINGLE_PRODUCT_SUCCESS,
  payload
});

export const getSingleProductFail = payload => ({
  type: types.GET_SINGLE_PRODUCT_FAIL,
  payload
});

export const getSingleProductCleanup = () => ({
  type: types.GET_SINGLE_PRODUCT_CLEANUP
});

export const getSingleProduct = id => async dispatch => {
  try {
    dispatch(getSingleProductStart());
    const product = products.find(product => product.id === id);
    dispatch(getSingleProductSuccess(product));
    
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getSingleProductFail(error));
  }
}
