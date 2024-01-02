import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";
import FormPost from "./Form";
import "./index.css"
import Menu from "./Menu";
import Inicio from "./Inicio";
const Dashboard = ()=>{
    const user = useSelector(state => state.user.data)
    const [showMenu, setShowMenu] = useState(false)
    const [option, setOption] = useState("Inicio")
    return(
        <div style={{color: "black", width: "80%"}} className="main">
            <div  className="dash-menu">
                <div onClick={()=> setShowMenu(!showMenu)}>
                   <MdMenu  color="white" size={"30px"}/> 
                </div>
                
            {
                showMenu == true && <Menu setOption={setOption} option={option}/>
            }                
            </div>
            
            {
                option == "Crear Publicacion" && <FormPost redirect={setOption}/>
            }
            {
                option == "Inicio" && <Inicio />
            }
            
        </div>)
}
export default Dashboard