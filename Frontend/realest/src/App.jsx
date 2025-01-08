import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [data, setData] = useState([])
  useEffect (()=>{
    axios.get("http://127.0.0.1:8000/api/property/")
    .then(response=>setData(response.data))
    .then(console.log(data))
    .catch(error=>console.error(error))
  },[])


  return (
    <>
      <h1>This is the list of properties</h1>
      
        {data.map(property=>(

          <p key={property.id}>{JSON.stringify(property.propertyName)}</p>
        )
        )}
    </>
  )
}

export default App
