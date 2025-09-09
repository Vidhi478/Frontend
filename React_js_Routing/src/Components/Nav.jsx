import { Link,NavLink } from "react-router-dom";
const Nav=()=>{
    return (
        <>
        <nav className=" mt-10 flex justify-center gap-10">
       <NavLink
        style={(e)=>{
         return{
            color:e.isActive?"green":"",
            fontWeight:e.isActive?"bold":"",
         };
        }}
        to="/home">
            Home
       </NavLink>
      
      <NavLink 
     className={(e)=>{
        return[
            e.isActive?"text-green-700":"",
            e.isActive?"font-bold":"",
        ].join(" ");
     }}
      to="/user">User</NavLink>

      <NavLink to="/about">
      {(e)=>{
        return(
            <span
            className={[
            e.isActive?"text-green-700":"",
            e.isActive?"font-bold":"",
            ].join(" ")
            }>About
            </span>
        );
      }}</NavLink>
    </nav>
    </>
    );
};
export default Nav;
