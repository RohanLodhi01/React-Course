import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Men from './pages/Men.'
import Women from './pages/Women'


const App = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element= {<NotFound/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
