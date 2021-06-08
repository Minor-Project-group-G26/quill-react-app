import axios from "axios"
import { useSelector } from "react-redux";
import { store } from "../store";

export const request = async(method='get', url, data=null)=>{
    const token = store.getState().auth

    let config = null;
    const headers = {
        "token": token
    } 
    switch (method.toLowerCase()) {
        case "get":
            config= {
                method: method,
                url: "http://192.168.0.6:5000/"+url,
            }
            break;
        case "post":
            config= {
                method: method,
                url: "http://192.168.0.6:5000/"+url,
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