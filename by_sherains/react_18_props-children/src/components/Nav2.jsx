import React from 'react'

const Nav2 = (props) => {
    

  return (
    <div className='flex gap-3 mx-3'>

    <h4 className='mx-3'>Home</h4>
    <h4 className='mx-3'>About</h4>
    <h4 className='mx-3'>Contact</h4>
    <h4 className='mx-3'>Review</h4>
    <h2>{props.theme} </h2>


    </div>
  )
}

export default Nav2

