import * as types from '../../action-types';
import { cart as initialState } from "../../initialState";

const cart = (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case types.REMOVE_PRODUCT_FROM_CART:
      const filteredProducts = state.data.filter(product => product.id !== action.payload)
      return {
        ...state,
        data: filteredProducts
      };
    case types.INCREMENT_PRODUCT_QUANTITY:
      const productsArr = [...state.data];
      const index = productsArr.findIndex(product => product.id === action.payload);
      if(productsArr[index] && productsArr[index].quantity < productsArr[index].stock){
        productsArr[index].quantity += 1;
      }
      return {
        ...state,
        data: productsArr
      };
    case types.DECREMENT_PRODUCT_QUANTITY:
      const productsArr2 = [...state.data];
      const index2 = productsArr2.findIndex(product => product.id === action.payload);
      if(productsArr2[index2] && productsArr2[index2].quantity > 1){
        productsArr2[index2].quantity -= 1;
      }
      return {
        ...state,
        data: productsArr2
      };
    case types.CART_PRODUCT_CLEANUP:
      return {
        ...state,
        data: []
      };
    default:
      return state;
  }
}

export default cart;
