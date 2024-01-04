import React from "react";
import { Helmet } from "react-helmet";
import HTMLRenderer from 'react-html-renderer'
const Page = (props)=>{
    const {data} = props
    console.log(data)
return(<>
<Helmet>
<meta
      property="og:image"
      content={data.data.imagen}
    />
                  <title>{data.data.titulo}</title>
                <meta name="description" content={data.data.descripcion}/>
                <meta name="keywords" content={data.data.keyword} />
                <link rel="canonical" href={data.data.nombre} />
</Helmet>
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