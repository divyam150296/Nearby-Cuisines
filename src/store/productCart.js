// import { configureStore, createSlice } from '@reduxjs/toolkit'

// const productCartState = {
//   cartItem: [
//     {id: '43', name: 'New Jersey', quantity: 1},
//     {id: '30', name: 'New Jersey1', quantity: 1}
//   ],
//   cartCount: 0
// }

// const productCartSlice = createSlice({
//   name: 'product-cart',
//   initialState: productCartState,
//   reducers: {
//     addItemToCart (state, action) {
//       console.log('add item cart', action.payload, state.cartItem[0], 'state', state.cartCount, 'obbje', state.cartItem)
//       const newItem = action.payload
//       const valueFound = state.cartItem.find((ele) => ele.id === newItem.id)
//       console.log(valueFound, ' value found')
//       if (!valueFound) {
//         state.cartItem.push({
//           id: newItem.id,
//           name: newItem.name,
//           quantity: 1
//         })
//       } else {
//         valueFound.quantity = valueFound.quantity + 1
//         console.log(valueFound.quantity, 'pobj', valueFound)
//       }
//     }
//   }
// })

// // const store = configureStore({
// //   reducer: {cartItem: productCartSlice.reducer }
// // })

// export const productCartAction = productCartSlice.actions

// export default productCartSlice.reducer

import { createSlice } from '@reduxjs/toolkit'


const productSlice = createSlice({
  name: 'counterState',
  initialState : {
    productList: [],
    featuredProduct: [],
    totalQuantity: 0,
    productCart: []
  },
  reducers: {
    addProductInBasket (state, action) {
      state.totalQuantity += 1
      if (state.productCart.length && action.payload) {
        const baksetElement = state.productCart.find((ele) => ele.id === action.payload.id)
        if (baksetElement) {
          baksetElement.quatity += 1
        } else {
          state.productCart.push({...action.payload, quatity: 1})
        }
      } else if (action.payload) {
        const payloadData = {...action.payload}
        payloadData.quatity = 1
        state.productCart.push(payloadData)
      }
      console.log('add to baket', state.totalQuantity, state.productCart.length, state.productCart)
    },
    addFeaturedCard (state, action) {
      state.featuredProduct = action.payload
    }
  }
})

export const sendDataToDatabase = (cart) => {
  console.log(cart)
  return async () => {
    const data = await fetch(`https://www.zomato.com/webroutes/getPage?page_url=/bangalore/dominos-pizza-koramangala-5th-block-bangalore/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D&location=&isMobile=0`)
    const jsonData = await data.json()
    console.log(jsonData, 'data from database')
  }
}
export const productAction = productSlice.actions

export default productSlice