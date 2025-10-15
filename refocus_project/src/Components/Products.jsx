import React, { useState } from "react";
import Product from "./Product";
import { motion} from "framer-motion";
function Products(){
    var products=[
        {
        title:"arquitel",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi. ",
        live:true,
        case:true,
    },
    {
        title:"YIR 2022",
        description:"Here are some tips on how to write a good one and why meta descriptions are important, along with 33 best practice examples from around the web. ",
        live:true,
        case:false,
    },
    {
        title:"Yahoo!",
        description:"Facere, quasi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi. ",
        live:true,
        case:true,
    },
    {
        title:"Rainfall",
        description:"In other words, it’s  a big part of the reason why a user might decide to click – or not click – on your page in search.",
        live:true,
        case:true,
    },
    {
        title:"Awwwards",
        description:"The generally recommended lower length limit for meta descriptions is 50 characters, so you should be aiming for a length of between 50 and 156 characters.",
        live:true,
        case:false,
    },
]
const[pos,setPos]=useState(0);
const mover =(val)=>{
    setPos(val*23);
}
    return(
  
<div className="bg-zinc-900  relative">
    {products.map((val,index)=>(
    <Product val={val} mover={mover} count={index}/>
    ))}

<div className="absolute top-0 w-full h-full pointer-events-none">
< motion.div 
initial={{y:pos,x:"-50%"}}
animate={{y:pos+`rem`}}
className="absolute w-[27rem] h-[23rem] bg-white left-[44%] overflow-hidden">
    <motion.div animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-100"></motion.div>
    <motion.div animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-200"></motion.div>
    <motion.div animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-300"></motion.div>
    <motion.div animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-400"></motion.div>
    <motion.div animate={{y:-pos+`rem`}} className="w-full h-full bg-sky-500"></motion.div>
</ motion.div>
</div>
</div>

    )
}
export default Products;