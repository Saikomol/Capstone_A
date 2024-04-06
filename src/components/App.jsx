import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Login from "./Login"


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"|| null))
  useEffect(()=>{
    if(token){
      localStorage.setItem("token",token)
    }else{
      localStorage.removeItem("token");
    }
  },[token]) 

  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>Hello</h1>}></Route>
        <Route path='/login' element={<Login setToken = {setToken} />} ></Route>
      </Routes>
       
    </div>
  )
}

export default App
