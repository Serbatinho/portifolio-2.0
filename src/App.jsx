import { Outlet } from 'react-router-dom'

import Footer from './common/Footer/Footer'

import './styles/app.scss'

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App