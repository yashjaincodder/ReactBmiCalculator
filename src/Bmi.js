import React, { useState,useMemo } from 'react'
import "./Bmi.css"
const Bmi = () => {
    const [weight,setweight]=useState("40")
    const [height,setheight]=useState("120")
     const weightHandler=(e)=>{
       setweight(e.target.value)
     }
     const heightHandler=(e)=>{
        setheight(e.target.value)
      }
      const result=useMemo(()=>{
        const calcheight=height/100;
        return (weight/(calcheight*calcheight).toFixed())
      },[weight,height])

  return (
    <div className='maindiv'>
      <h1>BMI CALCULATOR</h1>
      <p>Weight {weight}Kg</p>
      <input type="range" step="1" max="100" min="40" onChange={weightHandler}/>
      <p>Height {height}cm</p>
      <input type="range" step="1" max="200" min="120" onChange={heightHandler}/>
      <div>
      <p>The Bmi is</p>
       <p className='result'>{result}</p>
      </div>
    </div>
  )
}

export default Bmi
