import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex bg-black text-gray-200 p-6 justify-between'>
      <Link to='/'>Proshop</Link>

      <div className='flex gap-4'>
        <Link to='/cart'>Cart</Link>
        <Link to='/login'>Login</Link>
      </div>
    </header>
  )
}
