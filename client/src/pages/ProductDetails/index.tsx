import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../../components/molecules/Rating'
import axios from 'axios'

export default function ProductDetails() {
  const { id: productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${productId}`)
      setProduct(data)
    }
    fetchProduct()
  }, [productId])

  if (!product) {
    return 'loading...'
  }

  return (
    <div>
      <Link to='/' className='px-4 py-2 bg-blue-400 rounded-sm text-white'>
        Back
      </Link>

      <main className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        <img className='w-full h-auto' src={product?.image} alt='' />
        <div>
          <p className='text-3xl'>{product?.name}</p>
          <hr className='my-4' />
          <Rating text={`${product?.numReviews} reviews`} rating={product?.rating} />
          <hr className='my-4' />
          <p className='text-2xl'>${product?.price}</p>
          <hr className='my-4' />
          <p>{product?.description}</p>
        </div>
        <div className='border p-4 h-min'>
          <p>
            <span className='font-bold'>Price:</span> ${product?.price}
          </p>
          <hr className='my-4' />
          <p>
            <span className='font-bold'>Status:</span>{' '}
            {product?.countInStock > 0 ? 'In Stock' : 'Out of stock'}
          </p>
          <hr className='my-4' />
          <Button text='Add to Cart' disabled={product?.countInStock === 0} />
        </div>
      </main>
    </div>
  )
}

function Button({ text, ...props }) {
  return (
    <button {...props} className='px-4 py-2 bg-blue-400 rounded-sm text-white disabled:bg-blue-200'>
      {text}
    </button>
  )
}
