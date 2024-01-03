import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import Page from "./Page"
import Menu from "../../components/menu";
import { serviceData } from "../../services/data";
import Error from "./Error";
import "./index.css"
const BusinessPage = ()=>{
    const [loading, setLoading]= useState(true)
    const [data, setData]=useState()
    const [error, setError] = useState(false)
    const url = window.location.pathname
    const getData= async()=>{
        const response = await serviceData.getDetailsBussines(url.replace("/bussines/", ""))
         console.log(response)
        if(response){
             setData(response)
            setLoading(false)           
        }else{

            setError(true)
            setLoading(false)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return(<>
    <Menu />
        {loading == true && <Skeleton />}
        {loading == false && error == false && <Page data={data}/>}
        {loading == false && error == true && <Error />} 
    </>)
}
export default BusinessPage