import React, { useState } from "react";
import { Link, Route, Routes, } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";
import Nav from "./Components/Nav";

 const App=()=>{
  return (
    <>
    <Nav/>

    <Routes>
   <Route path="/home"element={<Home/>}/>
   <Route path="/user"element={<User/>}/>
   <Route path="/about"element={<About/>}/>
   </Routes>
    </>
  )
 }
export default App;