import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCart: false }

const counterCart = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
      if (state.counter < 0) {
        state.counter = 0
      }
    },
    cartToggle(state) {
      state.showCart = !state.showCart
    }
  }
})

export const counterActions = counterCart.actions
export default counterCart.reducer
