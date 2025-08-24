import React from "react";
function Card({data,handleclick,index}){
    const{image,name,artist,added}=data;
return (
    <div className=" bg-blue-100 w-60 p-3 rounded-md flex gap-3 pb-7 relative mt-10" >
        <div className="w-20 h-20 bg-black rounded-md overflow-hidden">
            <img  className="w-full h-full object-cover"src={image}/>
        </div>
        <div>
        <h3 className="font-semibold ">{name}</h3>
        <h6 className="text-xs">{artist}</h6>
        </div>
        <button onClick={()=>handleclick(index)} className={`px-4 py-3 bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] ${added===false? "bg-rose-600":"bg-teal-600"} absolute rounded-full text-white text-xs whitespace-nowrap font-semibold`}>{added===false?"Add to favourite":"Added"}</button>
    </div>
)
}
 export default Card