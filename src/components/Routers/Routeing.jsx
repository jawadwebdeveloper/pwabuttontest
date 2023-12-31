import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Projects from '../../pages/Projects/Projects'
import Error from '../../pages/Error'
import Navebar from '../Navbar/Navebar';
function Routeing() {
  return (
    <>
    
      <Navebar/> 
      <Routes>
        <Route path='#homemain' element={<Home/>}></Route>
        <Route path='#contactt' element={<Contact/>}></Route>
        <Route path='#Projectss' element={<Projects/>}></Route>
        <Route path='#aboutsection' element={<About/>}></Route>
        {/* <Route path='/skills' element={<Skills/>}></Route>  */}
        {/* <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/myblog' element={<MyBlogs/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route> */}
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </>
  )
}

export default Routeing