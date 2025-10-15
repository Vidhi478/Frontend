import React from "react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
function Card({width ,start, para ,hover}){
    return(
        <div className={` bg-zinc-800 p-5 rounded-xl hover:${hover} h-96  ${width}` }>
            <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <h3>One heading </h3>
                   <HiMiniArrowSmallRight/>
            </div>
            <h1 className="text-3xl font-medium mt-7">Whatever Heading. </h1>
            </div>
            <div className="down w-full mt-40 ">
                {
                    start&&(
                        <>
                         <h1 className="text-4xl font-semibold tracking-tighter leading-none"> start a project </h1>
             <button className="rounded-full mt-3 py-1 px-3 border-[1px] border-zinc-50">contact us</button>
                        </>
                    )
                }
                {
             para&&(
                <>
                <p className="text-sm text-zinc-400 font-medium mt-2 ">Lorem ipsum dolor sit consectetur adipisicing.</p>
            
                </>
             )
                }
            </div>
        </div>
    )

}
export default Card;