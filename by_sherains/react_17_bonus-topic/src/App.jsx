import React, { useState } from 'react'
import Navbar from './components/Navbar'
import mtj from './components/Navbar'
const App = () => {

const [theme, setTheme] = useState('light')
  

  return (
  <div>
<h1>{mtj}</h1>
<Navbar  theme={theme} setTheme={setTheme}  />

  </div>


)}

export default App