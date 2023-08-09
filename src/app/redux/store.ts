import { configureStore } from '@reduxjs/toolkit'
import { productsReducers } from './products/reducers'
import { cartReducers } from './cart/reducers'

export default configureStore({
  reducer: {
    products: productsReducers,
    cart: cartReducers
  },
})