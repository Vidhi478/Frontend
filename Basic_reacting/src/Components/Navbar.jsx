import React from "react"
function Navbar({data}){
return (
    <div className="px-10 py-4 flex items-center justify-between">
        <h1 className="font-semibold text-rose-500">Music </h1>
        <div className=" flex px-2 py-2 bg-teal-600 text-sm text-white rounded-md gap-3"> Favourites 
            <h4 className="font-bold ">{data.filter(item=>item.added).length}</h4>
        </div>
    </div>
)
}
 export default Navbar