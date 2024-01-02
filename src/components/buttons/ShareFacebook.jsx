import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

import "./index.css"
const ShareFacebook = (props)=>{
    const {to} = props
    return(<a target="_blank" href={"http://www.facebook.com/sharer.php?u=" + to} className="share-buttom">Compartir <FaFacebook /></a>)
}
export default ShareFacebook