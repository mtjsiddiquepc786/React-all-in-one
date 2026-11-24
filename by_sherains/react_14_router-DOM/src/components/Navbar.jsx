import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
<div  className='nav'>

<div>
<h2>Mtj-Webpage</h2>
</div>

<div className='page'>


<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>



</div>

</div>

)}

export default Navbar