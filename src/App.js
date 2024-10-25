import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'


function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App