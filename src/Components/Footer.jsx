import React from "react";
function Footer(){
    return(
        <div className=" bg-zinc-900 text-white w-full">
            <div className=" max-w-screen-lg mx-auto py-10 flex gap-32">
                <div className="basis-1/2">
                <h1 className="text-[9rem] font-semibold leading-none">refokus.</h1>
                </div>
                <div className="basis-1/2 flex gap-5">
             <div className="basis-1/3">
                <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
                {["istagram","twiter(x)?","linkedin"].map((item,index)=><a key={index} className="block text-zinc-600 mt-2">{item}</a>)}
               </div>
               <div className="basis-1/3">
                <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
                {["istagram","twiter(x)?","linkedin"].map((item,index)=><a key={index} className="block text-zinc-600 mt-2">{item}</a>)}
               </div>
               <div className="basis-1/2  flex flex-col items-end">
                <p className="text-right text-sm">refocus is a pioneering digital agency driven by design.</p>
                <button className="bg-blue-700 text-white px-3 py-1 mt-10 rounded-sm font-semibold text-xs">W-Enterprice</button>
               </div>
            </div>
       </div>
        </div>
    )

}
export default Footer;