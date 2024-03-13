import axios,{InternalAxiosRequestConfig,AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance} from "axios"


// Intercepting all axios request and adding cookies to headers if it exists
const onRequest=(config:InternalAxiosRequestConfig):InternalAxiosRequestConfig=>{
  const {method,url} = config
 
  return config
}
const onResponse = (response:AxiosResponse):AxiosResponse=>{
  const {method,url} = response.config
  const {status} = response
  return response
}

const onErrorResponse = (error:AxiosError|Error):Promise<AxiosError>=>{
  if (axios.isAxiosError(error)){
    const {status} = error.response as AxiosResponse ?? {}
  }
  return Promise.reject(error)
}

const baseURL ="https://api.quotable.io/"
const request = axios.create({
  baseURL,
//   withCredentials:true,
  headers:{
    "Content-Type":"application/json"
  }
})
request.interceptors.request.use(onRequest,onErrorResponse)
request.interceptors.response.use(onResponse,onErrorResponse)


export default request
