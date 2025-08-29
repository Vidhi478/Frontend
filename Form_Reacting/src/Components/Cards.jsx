import React from "react";
import One from "./One";
function Cards({users ,handleremove}){
 
return (
    <div className="w-full p-4 flex flex-wrap gap-5 max-h-80 overflow-auto justify-center">
       { users.map((item,index)=>{
     return <One handleremove={handleremove} id={index} user={item} key={index}/>
        })}
     
    </div>
)
}
 export default Cards