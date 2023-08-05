import { useEffect, useState } from 'react'
// import products from '../../../products'
import Product from '../../components/organisms/Product'
import axios from 'axios'

export default function Home() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  console.log(products)

  if (!products) return 'loading...'

  return (
    <div>
      <h1 className='text-4xl mb-6'>Latest Products</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-cols-min gap-4'>
        {products.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </div>
  )
}
