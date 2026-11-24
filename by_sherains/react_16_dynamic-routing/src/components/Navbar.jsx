import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

let navigate= useNavigate()


return (<div>
<div className='bg-green-600  rounded flex justify-between '>
    
<h3 className='text-6xl font-bold p-5 '>Toshif javed</h3>

<div className='flex justify-end gap-15 p-9 underline text-xl'>
<Link to='/' >Home</Link>
<Link to='about'>About</Link>
<Link to='/courses'>Courses</Link>
<Link to='product'>Product</Link>
<Link to='contact'>Contact</Link>
</div>

</div>

    <div className='flex justify-center bg-amber-200'>

<button onClick={()=>{
  navigate('/')
}} className='bg-amber-600 rounded p-2 mx-3 '  >Return - homepage</button>

<button onClick={()=>{
  navigate(+1)
}} className='bg-amber-600 rounded p-2 mx-3 '  > Forward </button>

<button onClick={()=>{
  navigate(-1)
}} className='bg-amber-600 rounded p-2 mx-3 '  > Backward </button>
</div> 
</div>
)
}

export default Navbar


