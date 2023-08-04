import { Link } from 'react-router-dom'
import Rating from '../molecules/Rating'

interface Product {
  name: string
  image: string
  description: string
}

export default function Product({ product }) {
  return (
    <div className='text-black p-4 rounded-md w-full shadow-lg border'>
      <Link to={`product/${product._id}`} className='flex flex-col gap-4'>
        <img
          className='w-full h-auto'
          height={100}
          width={100}
          src={product.image}
          alt={product.name}
        />
        <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{product.name}</p>
        <div>
          <p className='text-2xl'>${product.price}</p>
          <Rating rating={product.rating} text={`${product.numReviews} reviews`} />
        </div>
      </Link>
    </div>
  )
}
