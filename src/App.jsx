import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Landing from './page/Landing'
import Tracker from './page/Tracker'
import Carb from './page/Carb'
import Fat from './page/Fat'
import Protein from './page/Protein'
 
function App() {
 
  return (
    <div>
     
      <Router>
       
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/tracker' element={<Tracker props/>}/>
          <Route path='/carb' element={<Carb/>}/>
          <Route path='/fat' element={<Fat/>}/>
          <Route path='/protein' element={<Protein/>}/>
        </Routes>
 
      </Router>
 
    </div>
  )
}
 
export default App
