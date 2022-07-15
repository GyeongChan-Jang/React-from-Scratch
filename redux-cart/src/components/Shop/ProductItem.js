import Card from '../UI/Card'
import classes from './ProductItem.module.css'
import { useDispatch } from 'react-redux'
import { counterActions } from '../../store/cart-sliceice'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch(counterActions.increment())
  }

  const { title, price, description } = props
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
