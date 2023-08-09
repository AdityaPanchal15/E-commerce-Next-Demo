import * as types from '@/app/redux/cart/actionTypes'

const initialState = {
  error: null,
  data: [] as Array<any>
}

export const cartReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_CART_PRODUCTS:
      return {
        ...state,
        data: action.payload
      }
    case types.ADD_TO_CART:
      return {
        ...state,
        data: state.data.concat(action.payload)
      }
    case types.REMOVE_CART_ITEM:
      return {
        ...state,
        data: state.data.filter((item: any) => item.id !== action.payload.id)
      }
    default:
      return state
  }
}