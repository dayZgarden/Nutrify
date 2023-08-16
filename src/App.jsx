import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './page/Landing'
import Tracker from './page/Tracker'
import Error from './page/Error'

 
function App() {
 
  return (
    <div>
     
      <Router>
       
        <Routes>
          <Route path="/" element={<NewLanding />} />
          <Route path='/home' element={<Landing/>}/>
          <Route path='/tracker' element={<Tracker/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
 
      </Router>
 
    </div>
  )
}
import NewLanding from './page/NewLanding'
 
export default App
