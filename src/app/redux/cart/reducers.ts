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
    case types.CHANGE_QUANTITY: {
      const productData = state.data.find(item => item.id === action.payload.productId)
      const filterData = state.data.filter((item: any) => item.id !== action.payload.productId)
      const data = filterData.concat({ ...productData, quantity: action.payload.quantity })
      return {
        ...state,
        data
      }
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