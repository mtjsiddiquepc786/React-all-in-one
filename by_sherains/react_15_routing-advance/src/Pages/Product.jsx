import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>

<h1>Product</h1>

<div className='flex justify-between gap-10 bg-amber-300'>
<Link className='bg-amber-700 p-3 rounded-2xl mx-20' to='men'>Men</Link>
<Link className='bg-amber-700 p-3 rounded-2xl mx-20' to='women'>Women</Link>
<Link className='bg-amber-700 p-3 rounded-2xl mx-20' to='kids'>Kids</Link>

</div>

<Outlet/>
    </div>
  )
}

export default Product

