import classes from './CartItem.module.css'
import { counterActions } from '../../store/cart-sliceice'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(total * counter).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{counter}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
