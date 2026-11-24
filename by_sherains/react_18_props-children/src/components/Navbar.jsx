import React from 'react'
import Nav2 from './Nav2'

const Navbar = ({children,theme}) => {
    // console.log(props);
    // console.log(props.children);
    
  return (
    <div className='bg-amber-400 flex justify-between gap-3 p-5 whitespace-nowrap font-bold '>
    
    Toshif javed

{/* {props.children[0]}
{props.children[1]} */}

{children[0]}
{children[1]}

    <N av2  theme={theme} />    
    </div>
  
)}

export default Navbar

