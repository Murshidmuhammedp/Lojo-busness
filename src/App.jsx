import Category from './component/Category'
import Dashboard from './component/Dashboard'
import Firstbox from './component/Firstbox'
import Footer from './component/Footer'
import LogoNavbar from './component/Navbar'
import Timeline from './component/Timeline'

function App() {

  return (

    <div className='bg-gray-100'>
      <LogoNavbar />
      <Firstbox />
      <Dashboard />
      <Category />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App
