import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, changed: false },
  // items 안 item 하나하나의 키 값 -> id, price, totalQuantity, totalPrice, name
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      // 총 상품 개수 증가
      state.totalQuantity++
      state.change = true
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      // 지울 아이템의 아이디를 받음
      const id = action.payload
      // 기존의 아이템을 가져와서 지울 아이템이 기존 아이템 배열에서 개수가 1인 경우 완전히 지움
      // 1보다 크다면 양만 줄이면됨!
      const existingItem = state.items.find((item) => item.id === id)
      // 총 상품수 개수 감소
      state.quantity--
      if (existingItem === 1) {
        // 제거할 아이템을 누락시킨 후 기존 아이템 배열의 덮어씀
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice
