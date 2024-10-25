import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter-slice',
  initialState: { counter: 2 },
  reducers: {
    incrementCounter (state) {
      console.log('increasingss')
      state.counter++
    },
    decrementCounter (state) {
      state.counter--
    }
  }
})

export const action = counterSlice.actions

export default counterSlice