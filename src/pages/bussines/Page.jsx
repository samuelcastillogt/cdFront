import React from "react";
import HTMLRenderer from 'react-html-renderer'
const Page = (props)=>{
    const {data} = props
    console.log(data)
return(<>
        <div>
            <div className="cabecera">
                <img src={data.data.imagen}/>
               <h2>{data.data.nombre}</h2> 
            </div>
            
            <div className="desc-container">
               <HTMLRenderer
    html={data.data.descripcion}

  />             
            </div>

        </div>
    </>)
}
export default Page