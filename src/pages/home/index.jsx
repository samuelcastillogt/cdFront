import React, { useEffect, useLayoutEffect } from "react";
import HeroHome from "../../components/Hero/Home";
import Menu from "../../components/menu";
import PrincipalAds from "../../components/PrincipalAds";
import PrincipalBlog from "../../components/PrincipalBlogs";
import { Helmet } from "react-helmet";
import { SET_ADS_DATA } from "../../redux/slices/ads.slice";
import { serviceData } from "../../services/data";
import { useSelector, useDispatch } from "react-redux";
import { SET_BLOG_DATA } from "../../redux/slices/blog.slice";
const Home = ()=>{
    const state = useSelector(state => state.ads.data)
    const dispatch = useDispatch()
    const getData = async()=>{
        console.log(state)
        if(state.length == 0){
          const response = await serviceData.getDataAds()
          const response2 = await serviceData.getDataBlog()
        if(response){
            dispatch(SET_ADS_DATA(response.data))
            dispatch(SET_BLOG_DATA(response2.data))
        }   
        }
          
    }
    useEffect(()=>{
          getData() 
    }, [])
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