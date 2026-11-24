import { useContext } from "react"
import Nav2 from "./Nav2"
import { ColorContext } from "../context/ThemeContext";



const Navbar = () => {

  let [theme,setTheme]=useContext(ColorContext )

console.log(theme);
 

  return (
<div onClick={()=>{
  if(theme=='light'){
  setTheme('dark')}
else{setTheme('light')}
}} className={theme}>


<button>change theme</button>
<h1>Toshif Javed</h1>

<div className='nav_ch'>
<h4>Home</h4>
<h4>About</h4>
<h4>Product</h4>
<h4>Contact</h4>
</div>


</div>
  )
}

export default Navbar