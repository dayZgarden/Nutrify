import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Landing from './page/Landing'
import Tracker from './page/Tracker'
 
function App() {
 
  return (
    <div>
     
      <Router>
       
        <Routes>
          <Route path="/" element={<NewLanding />} />
          <Route path='/temp' element={<Landing/>}/>
          <Route path='/tracker' element={<Tracker/>}/>

        </Routes>
 
      </Router>
 
    </div>
  )
}
import NewLanding from './page/NewLanding'
 
export default App
