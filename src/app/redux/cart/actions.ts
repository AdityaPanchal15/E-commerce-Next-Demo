// import { Dispatch } from '@reduxjs/toolkit';
import * as types from '@/app/redux/cart/actionTypes'

const url = 'http://localhost:5000/products';

const addToCartDispatch = (payload: any) => {
  return {
    type: types.ADD_TO_CART,
    payload
  }
}

const removeCartItemDispatch = (payload: any) => {
  return {
    type: types.REMOVE_CART_ITEM,
    payload
  }
}

export const addToCart = (payload: any): any => {
  return function (dispatch: any) {
    dispatch(addToCartDispatch(payload))
  }
}

export const removeCartItem = (payload: any): any => {
  return function (dispatch: any) {
    dispatch(removeCartItemDispatch(payload))
  }
}