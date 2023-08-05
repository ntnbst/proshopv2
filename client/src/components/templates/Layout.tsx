import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className='p-6 max-w-7xl mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
