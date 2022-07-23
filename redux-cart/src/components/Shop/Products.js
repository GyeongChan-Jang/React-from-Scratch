import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 3000,
    title: '맥북 프로 16인치',
    description: '맥북 프로 M1X 16인치 겁나 빠름!'
  },
  {
    id: 'p2',
    price: 450,
    title: '애플워치 7 44mm',
    description: '애플워치 7 44m 알루미눔 셀룰러'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
