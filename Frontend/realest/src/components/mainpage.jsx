import './static/mainpage.css'
import rlogo from './static/images/realest.jpg'  
import hero from './static/images/hero.jpg'
import { useState,useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
import axios from "axios"
export const Home =()=>{
    const [data, setData] = useState([])
      useEffect (()=>{
        axios.get("http://127.0.0.1:8000/api/property/")
        .then(response=>setData(response.data))
        .catch(error=>console.error(error))        
      },[])
      return (
        <>


        <div className="hero-card">
          <h1>Looking to buy high value property?</h1>
          <p>Then you've come to the right place</p>
          <button className='button-hollow-small'>Start looking</button>
        </div>
        <div className='le'>
          
        </div>
          <h1>This is the list of properties</h1>          
            {data.map(property=>(    
              <p key={property.id}>{property.propertyName}</p>
            )
            )}
        </>
      )
} 