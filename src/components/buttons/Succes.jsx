import React from "react";
import {useSelector} from "react-redux"
import {login, logOut} from "../../services/auth";
const SucessButtom = (props)=>{
    const {action, title} = props
    return(<button onClick={action}>
        {title}
    </button>)
}
export default SucessButtom