import React from "react";

const OptionMenu = (props)=>{
    const {titulo, setOption, option} = props
    const handleClick = ()=> setOption(titulo)
    const selected = titulo==option ? "rgba(256, 256, 256, 0.7)" : "rgba(256, 230, 256, 0.4)"
    const shadow = titulo==option ? "5px 5px 5px black" : "none"
    return <li onClick={handleClick} style={{backgroundColor: selected, boxShadow: shadow}}>{titulo}</li>
}
export default OptionMenu