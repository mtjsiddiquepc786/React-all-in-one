import React, { useState } from 'react'
import Navbar from './compopnents/Navbar'

const   App = () => {

  const [theme, setTheme] = useState("light")

  return (
    <div >

<Navbar theme={theme} >
 <h1>hello</h1>
<h1>hell</h1>

</Navbar>



</div>
  )
}

export default App