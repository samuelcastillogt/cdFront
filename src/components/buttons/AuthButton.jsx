import React from "react";
import {useSelector} from "react-redux"
import {login, logOut} from "../../services/auth";
const AuthButton = ()=>{
    const user = useSelector(state => state.user.data)
    return(<button onClick={user.displayName ? logOut : login}>
        {user.displayName ? "Salir" : "Login"}
    </button>)
}
export default AuthButton