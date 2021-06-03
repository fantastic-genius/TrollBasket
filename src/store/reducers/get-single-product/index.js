import * as types from '../../action-types';
import { getSingleProduct as initialState } from "../../initialState";

const getSingleProduct = (state=initialState, action) => {
  switch (action.type) {
    case types.GET_SINGLE_PRODUCT_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload
      };
    case types.GET_SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_SINGLE_PRODUCT_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null
      };
    default:
      return state;
  }
}

export default getSingleProduct;
