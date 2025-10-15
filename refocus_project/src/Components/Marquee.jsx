import { motion } from "framer-motion";
import React from "react";
function Marquee({imagesurls,direction}){

    return (
        <div className=" w-full flex  overflow-hidden ">
            <motion.div
            initial={{x:direction==="left"?"0":"-100%"}}
            animate={{x:direction==="left"?"-100%":"0"}}
            transition={{ease: "linear",duration:"15",repeat:Infinity}}
         className="w-[8vw] flex-shrink-0 flex gap-10 py-8 ">
      {imagesurls.map((url,index)=>(
      <img key={index} src={url} className=""/>
      ))}
        </motion.div>
        <motion.div
            initial={{x:direction==="left"?"0":"-100%"}}
            animate={{x:direction==="left"?"-100%":"0"}}
            transition={{ease: "linear",duration:"15",repeat:Infinity}}
         className="w-[8vw] flex-shrink-0 flex gap-10 py-8 ">
      {imagesurls.map((url,index)=>(
      <img key={index} src={url} className=""/>
      ))}
        </motion.div>
        </div>
    )
}
export default Marquee;