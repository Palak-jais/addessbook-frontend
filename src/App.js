
import { useEffect, useState } from "react";
import Address from "./components/Address";
import { addAddress, getAllAdd,updateAdd,deleteAdd} from "./utils/HandleApi";

function App() {
  const [Add,setAdd]=useState([])
  const[name,setName]=useState("")
  const[number,setNumber]=useState("")
  const[isUpdate,setisUpdate]=useState(false)
  const[addid,setAddid]=useState("")
  useEffect(()=>{
    getAllAdd(setAdd)
  },[])
 const updateMode=(_id,name,number)=>{
  setisUpdate(true)
  setName(name)
  setNumber(number)
  setAddid(_id)

 }
  return (
    <div className="App">
    <div className="parent">
    <div className="header">
      <h2>Address Book</h2>
    </div>
    <div className="child-One">
    <input type="text" placeholder="Add name here.."
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
      <input type="text" placeholder="Add number here.."
         value={number}
      onChange={(e)=>setNumber(e.target.value)}
      />
      <span className="add" 
      onClick={ isUpdate?()=>updateAdd(addid,name,setName,number,setNumber,setAdd,setisUpdate)
      :()=>addAddress(name,setName,number,setNumber,setAdd)}>
      {isUpdate?"UPDATE":"ADD"}
      </span>
    </div>
    <div className="list">
    {
      Add.map((item)=><Address key={item._id}name={item.name}
       number={item.number}
        updateAdd={()=>updateMode(item._id,item.name,item.number)}
        deleteAdd={()=>deleteAdd(item._id,setAdd)}
       />)
    }
    
    </div>
   
    </div>
    
    </div>
  );
}

export default App;
