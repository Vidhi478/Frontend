import React from "react";
function Stripe({val}){
    return (
         <div className=" w-56 px-4 py-3 border-t-[1px] border-b-[1px] border-r-[1px]  border-zinc-600 flex justify-between items-center gap-8">
            <span className="font-semibold">{val.name}</span>
           <span  className="text-xs">{val.number}</span>
        </div>
    )
}
export default Stripe;