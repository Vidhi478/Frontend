import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
function App(){
const data=[
  {image: "https://images.unsplash.com/photo-1637337792283-1a1fc2b3f381?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",name:"Mahiya ve",artist:"Harsh",added:false},
  {image: "https://plus.unsplash.com/premium_photo-1663100820919-c6068f2324d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",name:"Ranjhnaa",artist:"Visha",added:false},
  {image: "https://images.unsplash.com/photo-1506901437675-cde80ff9c746?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Tere Naina",artist:"Kritika",added:false},
  {image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Barsat Mein",artist:"Nupur",added:false}
];

   const [songData,setSongData]=useState(data);
  const handleclick=(index)=>{
   setSongData((prev)=>{
    return prev.map((item,itemindex)=>{
      if(itemindex===index)return {...item, added:!item.added};
      return item;
    })
   })
  }

  return (
   <div>
    <Navbar data={songData}/>
    <div className="px-10 flex gap-5 mt-10 flex-wrap">
      {songData.map((obj,index)=>(
        <Card data={obj } handleclick={handleclick} index={index} key={index}/>
        ))}
      </div>
   </div>
  )
}
export default App;