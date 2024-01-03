import React, { useEffect } from "react";
import HeroHome from "../../components/Hero/Home";
import Menu from "../../components/menu";
import PrincipalAds from "../../components/PrincipalAds";
import PrincipalBlog from "../../components/PrincipalBlogs";
import { Helmet } from "react-helmet";

const Home = ()=>{
    useEffect(()=>{
        console.log("Haiaiai")
    },[])
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