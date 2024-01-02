import { useEffect, useState } from "react"
import { serviceData } from "../../services/data"
import { useSelector } from "react-redux"
import SkeletonChildren from "./PostSkeleton"
import PostContainer from "./PostContainer"

const Inicio = ()=>{
    const user = useSelector(state => state.user.data)
    const [posts, setPosts] = useState()
    const [loading, setLoading] = useState(true)
    const getData = async()=>{
        const response = await serviceData.getDataAdsByAutor(user.uid)
        setPosts(response)
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    }, [user])
    return(<>
        {
            loading == true && <SkeletonChildren />
        }
        {
            loading == false && posts && posts.length > 0 && <PostContainer data={posts} />
        }
    </>)
}
export default Inicio