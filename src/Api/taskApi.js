import {AxiosInstance}from './axios'


export const createTask=async(values)=>{
    console.log(values,"vlauesssss")
    const data= await AxiosInstance.post('/task/create',{...values})
return data;
}
export const fetchTask=async(id)=>{
    const {data}= await AxiosInstance.get(`/task/getTask/${id}`)
return data;
}

export const StatusChange=async(id,status)=>{
    const data  = await AxiosInstance.patch('/task/statusChange', {
        params: {
            id: id,
            status: status
        }
    });
return data;
}
export const statusBased=async(id,status)=>{
    const data  = await AxiosInstance.get('/task/basedOnStatus', {
        params: {
            id: id,
            status: status
        }
    });
return data;
}
