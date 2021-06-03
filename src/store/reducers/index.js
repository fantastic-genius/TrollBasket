import { combineReducers } from 'redux';
import getSingleProduct from './get-single-product';
import cart from './cart';

const rootReducer = combineReducers({
  getSingleProduct,
  cart,
})

export default rootReducer;
