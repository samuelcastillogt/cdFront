const base = window.location
import { enviromentReg } from "../redux/slices/enviroment.slice"
import {store} from "../redux/store"
const getEnviroment = ()=>{
    const url = "https://cdserver-r54a.vercel.app/"
    store.dispatch(enviromentReg(url))
}
export default getEnviroment
