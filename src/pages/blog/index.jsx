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
        const response = await serviceData.getDetailsBlog(url.replace("/blog/", ""))
        if(response.data == undefined){
            setError(true)
            setLoading(false)
        }else{
            setData(response)
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