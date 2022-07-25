import { uiActions } from './ui-slice'
import { cartActions } from './cart-slice'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json')
      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }
      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      // 받아온 장바구니 데이터를 바로 cartActions에 페이로드로 전달
      dispatch(cartActions.replaceCart(cartData))
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!'
        })
      )
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      })
    )
    const sendRequest = async () => {
      const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuality: cart.totalQuality
        })
      })
    }
  }
}
