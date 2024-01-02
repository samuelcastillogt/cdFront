const base = window.location
import { enviromentReg } from "../redux/slices/enviroment.slice"
import {store} from "../redux/store"
const getEnviroment = ()=>{
    const url = base.hostname == "localhost" ? "http://localhost:4000/": "prod"
    store.dispatch(enviromentReg(url))
}
export default getEnviroment
