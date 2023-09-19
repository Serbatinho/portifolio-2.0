import { Outlet } from 'react-router-dom'

import Footer from './common/Footer/Footer'

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App