import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slide from './Cardslider.jsx'
import Navi from './navbar'
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Grid from './Component.jsx'
import Service from './service'
import Home from './homepage'
import Sidenav from './sidenav'
import Sidecont from './sidecont'






function App() {
     
     
  return (
       <>
         <Navi/>
           
           <Sidenav/>

               

            <Routes>
               <Route path="Component" element={<Grid/>}/>
               <Route path="service" element={<Service/>}/>
               <Route path="sidecont" element={<Sidecont/>}/>
            </Routes>

            <Home/>
            
             
       </>   
  );
}

export default App
