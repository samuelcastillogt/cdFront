import React from "react";
import HTMLRenderer from 'react-html-renderer'
import {Helmet} from "react-helmet"
import ShareFacebook from "../../components/buttons/ShareFacebook";
const Page = (props)=>{
    const {data} = props
return(<>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.data.titulo}</title>
                <meta name="description" content={data.data.descripcion} />
                <meta name="keywords" content={data.data.keyword} />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        <div>
            <div className="cabecera">
                <img src={data.data.imagen}/>
               <h1>{data.data.titulo}</h1> 
            </div>
            
            <div className="text-blog-container">
               <HTMLRenderer
                    html={data.data.text}

                />             
            </div>
            <div className="footer-blog">
                <ShareFacebook to={window.location.href} />
            </div>
            
        </div>
    </>)
}
export default Page