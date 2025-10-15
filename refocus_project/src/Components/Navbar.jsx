import React from "react";
import Button from "./Button";
import { HiMiniArrowDownTray } from "react-icons/hi2";
function Navbar(){
return(

  <div className="max-w-screen-lg mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-400">
<div className="nleft flex items-center ">
    <h1 className="text-sm font-bold flex gap-1"><HiMiniArrowDownTray /> Refocus</h1>
    <div className="links flex gap-14 ml-20">
     {["Home","Work","Culture","","News"].map((elem ,index)=>(
      elem.length===0?<span key={index} className="w-[2px] h-5 bg-zinc-600 "></span>:(
        <a key={index} className="text-sm flex items-center gap-1" href="#">
        {index===1&&(<span style={{boxShadow:"0 0 0.25em #00FF19"}} className="inline-block w-1 h-1 rounded bg-green-500 "></span>)} 
            {elem}

</a>
      )
        ))}
    </div>

</div>
<Button/>
  </div>

)
}
export default Navbar;