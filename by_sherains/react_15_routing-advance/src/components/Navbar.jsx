import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
<div className='bg-green-600  rounded flex justify-between '>
    
<h3 className='text-6xl font-bold p-5 '>Toshif javed</h3>

<div className='flex justify-end gap-15 p-9 underline text-xl'>
<Link to='/' >Home</Link>
<Link to='about'>About</Link>
<Link to='product'>Product</Link>
<Link to='contact'>Contact</Link>
</div>

</div>
)
}

export default Navbar


