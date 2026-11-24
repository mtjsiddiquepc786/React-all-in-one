import React from 'react'

const App = () => {

let submithandler=(e)=>{
  e.preventDefault()
  console.log("submitted");
  
  

}
  


  return (
    <div>

<form onSubmit={(e)=>{
  submithandler(e)}}>
<input type='text' placeholder='enter something.....' 

></input>

<button >submit</button>



</form>

    </div>
  )
}
export default App
