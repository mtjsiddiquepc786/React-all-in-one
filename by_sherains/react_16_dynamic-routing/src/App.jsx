import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Page_404 from './Pages/Page_404'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import CoursesDetail from './Pages/CoursesDetail'

const App = () => {
  return (
  <div >
  
  <Navbar></Navbar>
  <Footer></Footer>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/about' element={<About/>}/>

<Route path='/courses' element={<Courses/>}/>
<Route path='courses/:id' element={<CoursesDetail/>}/>


 
<Route path='*' element={<Page_404/>}/>

<Route path='/product' element={<Product/>}>
  <Route path='/product/men' element={<Men/>}/>
  <Route path='women' element={<Women/>}/>
  <Route path='kids' element={<Kids/>}/>
</Route>

</Routes>

 



  </div>
)}


export default App


