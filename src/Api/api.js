import axios from 'axios';

const api = axios.create({
    baseURL: "https://dummyjson.com"
})

export const getApiDatas = async ()=>{
    const res = await api.get("/products")
    return res?.data;
}
export const getSingleApiDatas = async (id)=>{
    const res = await api.get(`/products/${id}`)
    return res?.data;
}

export const userLogin = async(data)=>{
    const res = await api.post("user/login", data)
    return res?.data;
}