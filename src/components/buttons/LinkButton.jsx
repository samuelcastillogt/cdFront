import React from "react";
import { Link } from "react-router-dom";
import "./index.css"
const LinkButton = (props)=>{
    const {to, type} = props
    const href= type == "ad" ? "/bussines/" + to : "/blog/" + to
    return(<Link className="button primary" to={href}>
        Ver detalles
    </Link>)
}
export default LinkButton