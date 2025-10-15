import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/footer";
import LocomotiveScroll from 'locomotive-scroll';
function App(){
  const locomotiveScroll = new LocomotiveScroll();
return(
<div className="w-full h-screen bg-zinc-900 text-white">
  <Navbar/>
  <Work/>
  <Stripes/>
  <Products/> 
  <Marquees/>
  <Cards/>
  <Footer/>
</div>
)
}
export default App;