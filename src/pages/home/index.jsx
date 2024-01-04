import React, { useEffect, useLayoutEffect } from "react";
import HeroHome from "../../components/Hero/Home";
import Menu from "../../components/menu";
import PrincipalAds from "../../components/PrincipalAds";
import PrincipalBlog from "../../components/PrincipalBlogs";
import { Helmet } from "react-helmet";
import { SET_ADS_DATA } from "../../redux/slices/ads.slice";
import { serviceData } from "../../services/data";
import { useSelector, useDispatch } from "react-redux";
const Home = ()=>{
    const dispatch = useDispatch()
    const getData = async()=>{
        console.log("Dentro")
        const response = await serviceData.getDataAds()
        console.log(response)
        if(response){
            dispatch(SET_ADS_DATA(response.data))
        }   
    }
    useEffect(()=>{
          getData()
        console.log("dentro useefect")  
    }, [])
    useLayoutEffect(()=> {getData()},[])
    return(
        <div>
            <Helmet>
            <meta name="description" content="Ciudad Quetzal es mas que solo malas noticias, bienvenidos a la pagina no oficial de Ciudad Quetzal. Noticias, anuncios, negocios y mas..." />
            </Helmet>
        <Menu />
        <HeroHome />
        <h1>Ciudad Quetzal</h1>
        <PrincipalAds />
        <PrincipalBlog />        
        </div>

    )
}
export default Home