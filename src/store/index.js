import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '~/src/store/counter.js'
import productSlice from '~/src/store//productCart.js'

const store =   configureStore({
  reducer: { counterStore: counterSlice.reducer, productCardStore:  productSlice.reducer }
})

export default store