import axios from 'axios'

const baseurl='https://addressbook-backend.onrender.com'
const getAllAdd=(setAdd)=>{
    axios.get(baseurl).then(({data})=>{
        console.log('data--->',data);
        setAdd(data)

    })
}
const addAddress=(name,setName,number,setNumber,setAdd)=>{
    axios.post(`${baseurl}/save`,{name,number})
    .then((data)=>{
        console.log(data);
        setName("")
        setNumber("")
        getAllAdd(setAdd)
    })
    .catch((err)=>console.log(err))

}

const updateAdd=(addid,name,setName,number,setNumber,setAdd,setisUpdate)=>{
    axios.post(`${baseurl}/update`,{_id:addid,name,number})
    .then((data)=>{
        
        setName("")
        setNumber("")
        setisUpdate(false)
        getAllAdd(setAdd)
    })
    .catch((err)=>console.log(err))

}
const deleteAdd=(_id,setAdd)=>{
    axios.post(`${baseurl}/delete`,{_id})
    .then((data)=>{
        getAllAdd(setAdd)
    })
    .catch((err)=>console.log(err))

}
export {getAllAdd,addAddress,updateAdd,deleteAdd}
