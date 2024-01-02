import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { serviceData } from "../../services/data";
import AdCard from "../AdCard";
import "./index.css"
import BlogCard from "../BlogCard";
const PrincipalBlog = ()=>{
    const state = useSelector(state => state.blog.data)
    useEffect(()=>{
            serviceData.getDataBlog()
    }, [])
    return(
        <div className="container-blogs">
        <h2 className="title">Un poco mas sobre Ciudad Quetzal</h2>
        <div className="container-blog-card">
            {
                state && state.length > 0 && state.map(item => <BlogCard item={item} key={item.id}/>)
            }
        </div>
        </div>
        
    )
}
export default PrincipalBlog