import React from 'react';
import {Route,Routes,Router} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';

import Home from './Pages/Home/Home'
import AboutUS from './Pages/AboutUs/About'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contacts/Contact'


const App = () =>{
  return(
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/service' element={<Service/>}/>
        <Route  path='/about-us' element={<AboutUS/>}/>
        <Route  path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App;
