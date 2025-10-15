import React from "react";
import Card from "./Card";
function Cards(){
    return(
        <div className="bg-zinc-900 text-white">
        <div className=" max-w-screen-lg mx-auto py-6 flex items-center gap-3">
            <Card width={"basis-1/3 "}  start={false} para={true}/>
              <Card width={"basis-2/3"} start={true} para={false} hover={"bg-violet-600"}/>
        </div>
        </div>
    )

}
export default Cards;