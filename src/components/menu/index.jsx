import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import "./index.css"
import logo from "../../assets/logo.png"
import AuthButton from "../buttons/AuthButton";
const rutas =[
    {
        label: "Acerca de nosotros",
        to: "/acerca"
    },
    {
        label: "Historia",
        to: "/historia"
    },
]
const Menu = ()=>{
    const user = useSelector(state => state.user.data)
    return(
        <ul className="menu">
            <li><Link to="/"><img src={logo} className="logo"/></Link></li>
            {
                rutas.map((ruta => <li><Link to={ruta.to}>{ruta.label}</Link></li>))
            }
            {
                user.displayName && <li><Link to="/dashboard">Dashboard</Link></li>
            }
            <li><AuthButton /></li>
        </ul>
    )
}
export default Menu