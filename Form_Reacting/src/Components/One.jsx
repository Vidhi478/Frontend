import React from "react";
function One({user,handleremove ,id}){
 
return (
      <div className="bg-zinc-100  h-full w-40 rounded-lg p-2 flex flex-col items-center">
        <div className="mt-1 image h-10 w-10 bg-zinc-900 rounded-full overflow-hidden mb-1">
            <img className=" h-full w-full object-cover " src={user.image}/>
               </div>
               <h1 className="font-bold text-xl text-center ">{user.name}</h1>
               <h1 className="opacity-50 text-xs ">{user.email}</h1>
            <p className=" mt-1 text-xs text-center leading-1">Lorem ipsum dolor consectetur adipisicing elit, laboriosam!</p>
            <button onClick={()=>handleremove(id)} className="bg-rose-600 px-2 py-1 text-xs text-white mt-1 rounded-lg">Remove it </button>
    </div>
)
}
 export default One