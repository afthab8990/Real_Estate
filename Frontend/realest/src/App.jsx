import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import rlogo from './components/static/images/realest.jpg'  
import { BrowserRouter as Router , Routes, Route,Link } from 'react-router-dom'
import {Home} from './components/mainpage'
import { Sell } from './components/addproperty'
function App() {
  return (
    
    <>
    <Router>
        <nav className="nav-bar">
            <div className='logo-area'>
              <img src={rlogo} width={50} height={50}/>
              <p>Realest.com</p>
            </div>
            <ul className='nav-area'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addproperty">Sell</Link></li>
                <li>Rent</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addproperty' element={<Sell/>}/>
        </Routes>
    </Router>
    </>
)
}

export default App
