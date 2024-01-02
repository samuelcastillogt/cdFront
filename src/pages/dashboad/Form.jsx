import React, {useEffect, useState} from "react"
import TextEditor from "../../components/TextEditor"
import SucessButtom from "../../components/buttons/Succes"
import { serviceData } from "../../services/data"
import { useSelector } from "react-redux"
const FormPost = (props)=>{
    const {redirect} = props
    const state = useSelector(state => state.user)
    const [titulo, setTitulo]= useState()
    const [text, setText] = useState()
    const submitForm = async()=>{  
    const response = await serviceData.savePost({
        titulo,
        text,
        autor: state.data.uid,
        dateCreate: new Date(),
        status: true
    })
    if(response == true){
        redirect("Inicio")
    }
}
    useEffect(()=>{
        setText("")
        setTitulo("")
    },[])
    return(<div className="form">
        <input placeholder="Titulo" onChange={(e)=> setTitulo(e.target.value)} value={titulo}/>
        <TextEditor onChange={setText}/>
        <SucessButtom title="Publicar" action={submitForm} />
    </div>)
}
export default FormPost