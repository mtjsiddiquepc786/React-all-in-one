import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState("")


let submithandler=(e)=>{
  e.preventDefault()
  console.log("submitted  by :",title);
  setTitle("")
}

  return (
    <div>

<form onSubmit={(e)=>{
  submithandler(e)}}>
<input type='text' 
placeholder='enter something.....' 
value={title}
onChange={(e)=>{
  setTitle(e.target.value);
  
}}
></input>
<button >submit</button>



</form>
</div>
)}
export default App
