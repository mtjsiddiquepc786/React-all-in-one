
import { useState } from 'react'
import Card from './Card.jsx'

const App = () => {

const [num, setNum] = useState("hiiiiii")


function printvalue(){
setNum(num)

}




return (
<div>

<h1>{num}</h1>
<input 
className='npt' 
type="text"  
placeholder='type_something....'
value={num}

onChange={(e)=>setNum(e.target.value)}  
// value={val}
/>






</div>


)}

export default App


/*

////////////////////////////////////////////////////

const App = () => {

const [num, setNum] = useState(10)

function changeName(){
setNum(pre=>(pre+1))
setNum(pre=>(pre+1))
setNum(pre=>(pre+1))

}




return (

<div>
<h1>{num}</h1>
  <button onClick={changeName}>change Name</button>


</div>


)}


/////////////////////////////////////////////////////////

const App = () => {

const [name, setName] = useState([1,2,3,4])

function changeName(){
  const newName=[...name]
  newName.push(99)
 setName(newName)
 

}



return (

<div>
<h1>{name}</h1>
  <button onClick={changeName}>change Name</button>


</div>


)}



/////////////////////////////////////////////////////////



const App = () => {

const [name, setName] = useState({user:"mtj",age:23})

function changeName(){
  const newName={...name}
  newName.user="toshif"
 setName(newName)
 

}



return (

<div>
<h1>{name.user}_{name.age}</h1>
  <button onClick={changeName}>change Name</button>


</div>


)}*/