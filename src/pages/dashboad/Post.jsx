import HTMLRenderer from 'react-html-renderer'
import moment from "moment"
const Post = (props)=>{
    const {data, id} = props.data
    return(
        <>
            <div className='post'>
                <h2>{data.titulo}</h2>
                <HTMLRenderer
    html={data.text}

  /> 
    <p>Publicado el: {moment(data.dateCreate).format("DD/MM/YYYY")}</p>
            </div>
        </>
    )
}
export default Post