import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
function Work(){

   const [images,setImages]=useState([
     {url:"https://i.pinimg.com/1200x/c8/6e/0f/c86e0f1184337f55393c6cbfa469155c.jpg",top:-10,left:270,isActive:false},
    {url:"https://i.pinimg.com/1200x/29/7c/b3/297cb3e02fa7f2f27b3ea57471d3a8bb.jpg",top:-25,left:270,isActive:false},
    {url:"https://i.pinimg.com/736x/09/3d/77/093d7746336423dd53966d192316d8fa.jpg",top:-29,left:250,isActive:false},
    {url:"https://i.pinimg.com/736x/8a/1a/62/8a1a62717c1a65ccbdf9b97b8484b41e.jpg",top:-20,left:290,isActive:false},
    {url:"https://i.pinimg.com/1200x/4b/bc/5c/4bbc5c7f9365f56b36f3806bb40a1b9a.jpg",top:-24,left:260,isActive:false},]);

 const { scrollYProgress }=useScroll();

scrollYProgress.on("change",(data)=>{
    function imagesshow(arr){
        setImages(prev=>(
            prev.map((item,index)=>(
         arr.indexOf(index)===-1?(
            {...item,isActive:false}
         )
         : {...item,isActive:true}
            ))
        ))
    }

    switch(Math.floor(data*100)){
        case 0: imagesshow([]);
        break;
        case 1: imagesshow([0]);
        break;
        case 2: imagesshow([0,1]) ;
        break;
       case 3: imagesshow([0,1,2]);
        break;
       case 4: imagesshow([0,1,2,3]);
        break;
         case 5: imagesshow([0,1,2,3,4]);
        break;
    }
})

    return(
        <div className="w-full mt-5">
            <div className=" relative max-w-screen-lg mx-auto text-center">
                <h1 className="text-[28vw] leading-none font-medium select-none">work</h1>
                 <div className="absolute w-full h-full top-0"> 
                   {/* {images.map((elem,index)=>{ 
                        return <img className=" absolute w-52 rounded-lg translate-x-[50%] translate-y-[50%] " src={elem.url} style={{top:elem.top, left:elem.left }} alt=""/>
                    })} */}
                 </div>
            </div>

        </div>
    )
}
export default Work;