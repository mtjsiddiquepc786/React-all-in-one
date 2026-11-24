import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact  from './Pages/Contact'
import About  from './Pages/About'
import Navbar from './components/Navbar'
import Product from './Pages/Product'
import Endpage from './Pages/Endpage'


const App = () => {
  return (
    <div>

<Navbar/>



<Routes>

<Route path='/' element={<Home/>}  />
<Route path='/contact' element={<Contact/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact/product' element={<Product/>} />
<Route path='/endpage'  element={<Endpage/>} />


</Routes>
    </div>
  )
}

export default App
