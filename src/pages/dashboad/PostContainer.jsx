import Post from "./Post"

const PostContainer = (props)=>{
    const {data} = props
    return(
        <div className="posts-container">
            {
                data && data.length > 0 && data.map(item => <Post data={item}/>)
            }
        </div>
    )
}
export default PostContainer