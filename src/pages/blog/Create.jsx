import React, {useEffect, useState} from "react"
import TextEditor from "../../components/TextEditor"
import SucessButtom from "../../components/buttons/Succes"
import { serviceData } from "../../services/data"
import { useSelector } from "react-redux"
import "./index.css"
const BlogCreate
 = (props)=>{
    const {redirect} = props
    const state = useSelector(state => state.user)
    const [titulo, setTitulo]= useState()
    const [text, setText] = useState()
    const [imagen, setImagen] = useState()
    const [keyword, setKeyword] = useState()
    const [categoria, setCategoria] = useState()
    const [descripcion, setDescripcion] = useState()
    const submitForm = async()=>{  
    const response = await serviceData.saveBlogPost({
        titulo,
        text,
        autor: state.data.uid,
        dateCreate: new Date(),
        status: true,
        keyword,
        categoria,
        descripcion,
        imagen
    })
    if(response == true){
        console.log("Inicio")
    }
}
    useEffect(()=>{
        setText("")
        setTitulo("")
    },[])
    return(
    <div className="blogForm">
        <input placeholder="Titulo" onChange={(e)=> setTitulo(e.target.value)} value={titulo}/>
        <TextEditor onChange={setText}/>
        <div className="seo">
        <select name="" id="" onChange={(e)=> setCategoria(e.target.value)} >
            <option value="">Anuncios</option>
            <option value="">Anuncios</option>
        </select>
        <div className="">
            <input type="text" name="" id="" placeholder="Palabras Clave" onChange={(e)=> setKeyword(e.target.value)} />            
        </div>
        <div className="">
            <input type="text" name="" id="" placeholder="Imagen" onChange={(e)=> setImagen(e.target.value)} />            
        </div>
        <div className="">
            <textarea placeholder="Descripcion" rows={10} cols={20} onChange={(e)=> setDescripcion(e.target.value)}/>            
        </div>
        </div>
 
        <SucessButtom title="Publicar" action={submitForm} />
 
    </div>
    
    )
}
export default BlogCreate
