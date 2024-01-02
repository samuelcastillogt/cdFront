import React from "react";
import OptionMenu from "./OptionMenu";
const options = ["Inicio", "Crear Publicacion"]
const Menu = (props)=>{
    const {setOption, option} = props
    return (
        <div>
            <ul>
                {
                    options.map(item => <OptionMenu titulo={item} setOption={setOption} option={option}/>)
                }
            </ul>
        </div>
    )
}
export default Menu