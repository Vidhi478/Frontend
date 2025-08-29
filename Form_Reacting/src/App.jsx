import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
function App(){
  const [users,setusers]=useState([])
  const handleformSubmitdata=(data)=>{
    setusers([...users,data])
  }
  const handleremove=(id)=>{
    setusers(()=>users.filter((item,index)=>index!=id))
  }
  return (
    <div>
      <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
        <div className="container mx-auto">
          <Cards handleremove={handleremove} users={users}/>
          <Form handleformSubmitdata={handleformSubmitdata}/>
         
        </div>
      </div>
    </div>
  )
}
export default App;