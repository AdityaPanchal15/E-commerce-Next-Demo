import { Dispatch } from '@reduxjs/toolkit';
import * as types from '@/app/redux/products/actionTypes'

const url = 'http://localhost:5000/products';

const productAdded = (payload: any) => {
  return {
    type: types.ADD_PRODUCT,
    payload
  }
}
// const productDeleted = (payload: any) => {
//   return {
//     type: types.DELETE_PRODUCT,
//     payload
//   }
// }
// const productEdited = (payload: any) => {
//   return {
//     type: types.EDIT_PRODUCT,
//     payload
//   }
// }
const productsLoaded = (payload: any) => {
  return {
    type: types.GET_PRODUCTS,
    payload
  }
}

export const getProducts = (): any => {
  return function (dispatch: Dispatch) {
    fetch(url, {
      method: "GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(async res => { dispatch(productsLoaded(await res.json())) })
      .catch(error => console.log(error));
  }
}

export const addProduct = (payload: any): any => {
  return function (dispatch: Dispatch) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(async res => {
        console.log(await res.json());
        dispatch(productAdded(await res.json()))
      })
      .catch(error => console.log(error));
  }
}