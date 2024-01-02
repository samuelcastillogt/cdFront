import React from "react";
import "./hero.css"
import Menu from "../menu";
import imagen from "../../assets/ciudad-quetzal.png"
const HeroHome = ()=>{
    return(
        <div className="heroHome" style={{backgroundImage: `url(${imagen})`}}>
            <h2>Aqui estoy</h2>
        </div>
    )
}
export default HeroHome