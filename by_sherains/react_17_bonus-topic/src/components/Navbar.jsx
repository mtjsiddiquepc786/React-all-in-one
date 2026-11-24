import React from 'react'

export let mtj='Hero'

const Navbar = (props) => {



  return (
      <div>   
      
      
  <div onClick={()=>{
  props.setTheme('blue')
}} >Theme is {props.theme}  

<button 
>change Theme</button>

  </div>
  </div>

  )}


export default Navbar