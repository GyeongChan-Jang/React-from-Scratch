import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { uiActions } from './store/ui-slice'
import Notification from './components/UI/Notification'

import { useSelector, useDispatch } from 'react-redux'
import { Fragment, useEffect } from 'react'

let isInitial = true

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!'
        })
      )
      const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        throw new Error('Sending cart data failed')
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    }

    // 앺이 처음실행 될 때 장바구니 데이터 받아오는 요청을 하지 않도록 설정
    if (isInitial) {
      isInitial = false
      return
    }

    // promise를 반환하기 때문에 .catch를 쓸 수 있음
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      )
    })
  }, [cart, dispatch])

  return (
    <Fragment>
      {Notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  )
}

export default App
