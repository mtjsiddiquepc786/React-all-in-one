import React, { useState } from 'react'

const Card = () => {

    
const [num, setNum] = useState(10)


function increase1(){
setNum(num+1)
}

function decrement1(){
setNum(num-1)
}

function increase5(){
setNum(num+5)
}


  return (
    <div>
<h1 className='head'>{num}</h1>
<button className='btn' onClick={increase1}>[   +1   ]</button>
<button className='btn' onClick={decrement1}>[ -1 ] </button>
<button className='btn' onClick={increase5}>[ +5 ]</button>
</div>
  )
}

export default Card;
