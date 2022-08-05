import React, { useState } from 'react'

export default function About() {
const [color,setcolor]= useState('Green')
const inputValue=(col)=>
{
  setcolor(col.target.value)
}



  return (
    <div><h1 style={{color:color}}>Input Box value is {color}</h1>
    <input value={color} onChange={inputValue}/>
    
    </div>
  )
}
