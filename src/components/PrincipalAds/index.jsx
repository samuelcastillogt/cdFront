import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { serviceData } from "../../services/data";
import AdCard from "../AdCard";
import "./index.css"
const PrincipalAds = ()=>{
    const state = useSelector(state => state.ads.data)
    useEffect(()=>{
            serviceData.getDataAds()
    }, [])
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