import React from "react";
import "./index.css"
import LinkButton from "../buttons/LinkButton";
const BlogCard = (props)=>{
    const {data, id} = props.item
    const {titulo, imagen} = data
    return(
    <div className="blogCard">
        <img src={imagen}/>
        <h3>{titulo}</h3>
        <LinkButton to={id} type="blog"/>
    </div>)
}
export default BlogCard