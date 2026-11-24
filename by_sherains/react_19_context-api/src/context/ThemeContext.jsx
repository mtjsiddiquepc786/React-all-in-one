import { createContext, useState } from "react"

export const ColorContext=createContext();

const ThemeContext = (props) => {
const [theme, setTheme] = useState("light")

return (
<div>
    

<ColorContext.Provider value={[theme,setTheme]}>
{props.children}
</ColorContext.Provider>

</div>
)}

export default ThemeContext