import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdCard from "../AdCard";
import "./index.css"
const PrincipalAds = ()=>{
    const state = useSelector(state => state.ads.data) 
    return(
        <div className="principal">
        <p className="title">Nuevos negocios registrados</p>
        <div className="container">
            {
                state && state.length > 0 && state.map(item => <AdCard item={item} key={item.id}/>)
            }
        </div>
        </div>
        
    )
}
export default PrincipalAds