import React from "react";
import "./index.css"
import LinkButton from "../buttons/LinkButton";
const AdCard = (props)=>{
    const {data, id} = props.item
    const {nombre, imagen} = data
    return(
    <div className="adCard">
        <img src={imagen}/>
        <h3>{nombre}</h3>
        <LinkButton to={id} type={"ad"}/>
    </div>)
}
export default AdCard