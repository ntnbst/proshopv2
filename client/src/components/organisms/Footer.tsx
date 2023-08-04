import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='h-60 bg-black text-gray-200 p-6  w-full'>
      Proshop &copy; {currentYear}
    </footer>
  )
}
