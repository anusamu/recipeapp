import { useState } from 'react'

import './App.css'
import Heading from './pages/Splash.JSX'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import FullRecipe from './pages/FullRecipe'
import AboutUs from './pages/Aboutus'
import Login from './pages/Login'




function App() {
  

  return (
    <>
       
       <Routes>
          <Route path='/' element={<Heading/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/fullRecipe' element={<FullRecipe/>}/>
          <Route path='/AboutUS' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    
    </>
  )
}

export default App
