import { Outlet } from 'react-router-dom'
import Layout from './components/templates/Layout'

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
