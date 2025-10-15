import React from "react";
import Stripe from "./Stripe";
function Stripes(){
    var data=[
        {name:" @CSSDesignAward",number:48},
        {name:" NO-Code2021",number:2},
        {name:" awwwards. ",number:11},
        {name:" CSSDesignAwards",number:48},
        {name:" CONF-2023",number:2},
        {name:" awwwards.",number:11},
    ]
    return (
       <div className=" flex items-center mt-20">  
        {data.map((elem,index)=>(
            <Stripe key={index} val={elem}/>
        ))}
        </div>
    )
}
export default Stripes;