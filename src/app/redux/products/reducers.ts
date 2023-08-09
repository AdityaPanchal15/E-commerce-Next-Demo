import * as types from '@/app/redux/products/actionTypes'

const initialState = {
  error: null,
  data: [] as Array<any>
}
export const productsReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        data: action.payload
      }
    case types.ADD_PRODUCT:
      return {
        ...state,
        data: action.payload
      }
    case types.EDIT_PRODUCT:
      return {
        ...state,
        data: action.payload
      }
    case types.DELETE_PRODUCT:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}