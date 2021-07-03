import axios from "axios"
import { GetAsyncData } from "../store/storage";
import { baseUrl } from "./config";

export const request = async(method, url, data=null)=>{
    let Data = await GetAsyncData('@token');
    console.log("Request Token", Data)
    let {token}= JSON.parse(Data);  
    console.log(token)
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
                headers:headers

            }
            break;
        case "upload":
            headers["Content-Type"]='multipart/form-data'
            config= {
                method: 'put',
                url: baseUrl+url,
                data: data,
                headers:headers
            }
            
            break;
        
        default:
            config= {
                method: method,
                url: baseUrl+url,
                data: data,
                headers: headers
            }
            break;
    }
    console.log(method, " : ", config.url)
    console.log("token: ", token)
    const result = await axios(config);
    console.log(result.data);
    return result
    
    // return token
}