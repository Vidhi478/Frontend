import React from "react";
import { all } from "../data/dancedata";
import { Link } from "react-router-dom";
function Card(){
    return (
        <div>
             <div className="w-full   flex flex-wrap pl-20 ">
         {
            all.map((elem,index)=>(
               <Link
      key={elem.id}
      to={`/detail/${elem.id}`}
    >
                
         <div className="w-56 h-72   rounded-4xl overflow-hidden mb-5 mr-10">
            <div className=" img w-full h-60">
                <img className="h-full w-full object-cover shadow-mist-500 shadow-xl hover:border-2 hover:border-mist-500" src={elem.image}/>
            </div>
            <div className="name w-full mt-2 text-center font-bold text-fuchsia-950 text-xl font-sans italic">{elem.name}</div>
         </div>
             </Link>
            ))
         }
      </div>
        </div>
     
    )
}
export default Card;