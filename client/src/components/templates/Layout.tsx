import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className='p-6'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
