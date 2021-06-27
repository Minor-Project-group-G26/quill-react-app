import axios from "axios"
import { useSelector } from "react-redux";
import { store } from "../store";
import { GetAsyncData } from "../store/storage";
import { baseUrl } from "./config";

export const request = async(method='get', url, data=null)=>{
    const token = JSON.parse(GetAsyncData('@token')).token

    let config = null;
    const headers = {
        "token": token, 
        "Content-Type": "application/json"
    } 
    switch (method.toLowerCase()) {
        case "get":
            config= {
                method: method,
                url: baseUrl+url,
            }
            break;
        case "post":
            config= {
                method: method,
                url: baseUrl+url,
                data: data,
                headers: headers
            }
        default:
            break;
    }
    console.log(method, " : ", config.url)
    console.log("token: ", token)
    // const result = await axios(config);
    // console.log(result.data);
    // return result
    return token
}