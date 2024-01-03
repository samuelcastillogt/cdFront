import React, { useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { serviceData } from "../../services/data";
import AdCard from "../AdCard";
import "./index.css"
import { SET_ADS_DATA } from "../../redux/slices/ads.slice";
const PrincipalAds = ()=>{
    const state = useSelector(state => state.ads.data)
    const dispatch = useDispatch()
    const getData = async()=>{
        const response = await serviceData.getDataAds()
        if(response){
            dispatch(SET_ADS_DATA(response.data))
        }
        
    }
    useEffect(()=>{
          getData()  
    }, [])
    useLayoutEffect(()=>{
        console.log("primer render")
    })
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