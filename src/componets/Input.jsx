import React, { useCallback, useState } from 'react'

export const Input = () => {
    const [val,setVal]=useState([]);

    const debounce = (func)=>{
        let timer;
        return function(...args){
            const context = this;
            if(timer)clearTimeout(timer)
            timer =setTimeout(()=>{
                timer=null
                func.apply(context,args);
            },500)
        }
    }

    const handleChange=(e)=>{
       
        const {value} =e.target;      
        fetch(`https://www.omdbapi.com/?t=${value}&apikey=dcaf0979`)
        .then((res) => res.json())
        .then((res) => setVal(res))
        .catch((err) => console.log(err))

        
    }

    const optimised = useCallback(debounce(handleChange), [])
    
    // fetch(`https://api.github.com/search/repositories?q=${value}`)
    // https://www.omdbapi.com/?t=${name}&apikey=dcaf0979
    
    // console.log(val)
  return (
    <>
    <div>
        <h1>search movie by name </h1>
        <input type="text" placeholder='enter movie name'   onChange={optimised} />  
    
       
    </div>

    {
      val.map((el)=>(
        <h1>{el.title}</h1>
      ))  
    }
    </>
  )
}
