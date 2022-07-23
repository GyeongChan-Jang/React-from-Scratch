import classes from './CartButton.module.css'

import { uiActions } from '../../store/ui-slice'
import { useSelector, useDispatch } from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch()

  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  const toggleCartHandelr = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandelr}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}
export default CartButton
