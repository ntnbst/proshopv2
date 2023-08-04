import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './components/templates/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
