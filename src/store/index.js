import { createSlice, configureStore } from '@reduxjs/toolkit'

const dummyState = {
  counter: 0,
  showCounter: true
}
const authenticateState = {
  authourized: false
}

const primarySlice = createSlice({
  name: 'counter',
  initialState: dummyState,
  reducers: {
    incrementMethod(state) {
      state.counter++
      console.log('increase', state.counter)
    },
    decrementMethod(state) {
      state.counter--
    },
    toogleCounter(state, action) {
      console.log(action)
      state.counter = state.counter + action.payload
      console.log(state.counter)
      // state.counter = state.counter + 1
    }
  }
})

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: authenticateState,
  reducers: {
    updateAuthorisation (state) {
      state.authourized = !state.authourized
    }
  }
})


const store = configureStore({
   reducer: { counter: primarySlice.reducer, authorization: authorizationSlice.reducer }
})

export const primarySliceAction = primarySlice.actions
export const authorizationSliceAction = authorizationSlice.actions

export default store