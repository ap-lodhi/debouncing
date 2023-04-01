import React, { useState } from 'react'

export const Input = () => {

    const [name,setName]=useState("")
    const handleChange=(e)=>{
        setName(e.targete.value)
    }
  return (
    <div>
        <h1>search movie by name </h1>
        <input type="text" placeholder='enter movie name ' onChange={handleChange} /><br />
        <br />
        <button>search</button>
    </div>
  )
}
