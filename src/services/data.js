import axios from "axios"
import { store } from "../redux/store";
import { SET_ADS_DATA } from "../redux/slices/ads.slice";
import { SET_BLOG_DATA } from "../redux/slices/blog.slice";
class ServiceData{
    constructor(enviroment){
        this.enviroment = enviroment
    }
    getDataAds = async()=>{
        const hostName = store.getState().enviroment.value
        try{
            if(hostName.length >0 ){
            const data = await axios.get(hostName)
            store.dispatch(SET_ADS_DATA(data.data))                
            }

        }catch(err){
            console.log(err)
        }

    }
    getDataBlog = async()=>{
        const hostName = store.getState().enviroment.value
        try{
            if(hostName.length >0 ){
            const data = await axios.get(hostName+ "blog")
            store.dispatch(SET_BLOG_DATA(data.data))               
            }

        }catch(err){
            console.log(err)
        }

    }
    getDataAdsByAutor = async(id)=>{
        const hostName = store.getState().enviroment.value
        try{
            if(id != undefined){               
        const hostName = store.getState().enviroment.value
            const data = await axios.get(hostName + "autor/" + id)
            return data.data               
            }

        }catch(err){
            console.log(err)
        }

    }
    getDetailsBussines = async(id)=>{
        const hostName = store.getState().enviroment.value
        try{
            if(hostName.length >0 ){
            const data = await axios.get(hostName + "details/" + id)
            return data.data               
            }

        }catch(err){
            return false
        }

    }
    getDetailsBlog = async(id)=>{
        const hostName = store.getState().enviroment.value
        try{
            if(hostName.length >0 ){
            const data = await axios.get(hostName + "blog/" + id)
            return data.data               
            }

        }catch(err){
            return false
        }

    }
    savePost = async(post)=>{
        const hostName = store.getState().enviroment.value
        try{
            if(hostName.length >0 ){
            const {data} = await axios.post(hostName + "createpost", post)      
            }
            return true
        }catch(err){
            return false
        }
    }
    saveBlogPost = async(post)=>{
        const hostName = store.getState().enviroment.value
        try{
            if(hostName.length >0 ){
            const {data} = await axios.post(hostName + "createblogpost", post)      
            }
            return true
        }catch(err){
            return false
        }
    }
}
export const serviceData = new ServiceData()

