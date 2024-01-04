import axios from "axios"
import { store } from "../redux/store";
import { SET_ADS_DATA } from "../redux/slices/ads.slice";
import { SET_BLOG_DATA } from "../redux/slices/blog.slice";
const hostName = "https://cdserver-r54a.vercel.app/"
class ServiceData{
    constructor(enviroment){
        
    }
    getDataAds = async()=>{
        
        console.log(hostName)
        try{
            return  await axios.get(hostName)               
           

        }catch(err){
            console.log(err)
        }

    }
    getDataBlog = async()=>{
 
        try{
            const data = await axios.get(hostName+ "blog")
            store.dispatch(SET_BLOG_DATA(data.data))               

        }catch(err){
            console.log(err)
        }

    }
    getDataAdsByAutor = async(id)=>{
 
        try{
            if(id != undefined){               
     
            const data = await axios.get(hostName + "autor/" + id)
            return data.data               
            }

        }catch(err){
            console.log(err)
        }

    }
    getDetailsBussines = async(id)=>{
 
        try{
            if(hostName.length >0 ){
                return await axios.get(hostName + "details/" + id)               
            }

        }catch(err){
            return false
        }

    }
    getDetailsBlog = async(id)=>{
 
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

