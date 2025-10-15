import React from "react";
import Marquee from "./Marquee";
function Marquees(){
    var images=[
        [
            "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161040/5-24.png",
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161107/134.png",
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161058/114.png",
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161102/59.png",
        ],
        [
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161040/5-24.png",
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161107/134.png",
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161058/114.png",
        "https://cdn.logojoy.com/wp-content/uploads/2018/08/23161102/59.png",
        ],
    ];
    return (
        <div className="bg-zinc-900 text-white py-20 relative overflow-hidden w-full" >
         {images.map((item,index)=><Marquee key={index} direction={index===0?"left":"right"} imagesurls={item}/>)}
        </div>
    )
}
export default Marquees;