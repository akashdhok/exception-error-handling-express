import React from 'react'
import axios from "axios"
const App = () => {
  const changeHandler = async()=>{
    let api = "http://localhost:8000/home"
    try {
    const res  = await axios.get(api)
      console.log(res)
      alert("getted")
    } catch (error) {
      console.log(error)
      alert(error.response.data.msg)
    }
  }
  const changeHandler1 = async()=>{
    let api = "http://localhost:8000/about"
    try {
    const res  = await axios.get(api)
      console.log(res)
      alert("getted")
    } catch (error) {
      console.log(error)
      alert(error.response.data.msg)
    }
  }
  const changeHandler2 = async()=>{
    let api = "http://localhost:8000/services"
    try {
    const res  = await axios.get(api)
      console.log(res)
      alert("getted")
    } catch (error) {
      console.log(error)
      alert(error.response.data.msg)
    }
  }
  return (
   <>
   <button onClick={changeHandler}>Home</button>
   <button onClick={changeHandler1}>About</button>
   <button onClick={changeHandler2}>Services</button>


   </>
  )
}

export default App