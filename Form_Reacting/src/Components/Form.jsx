import React from "react";
import { useForm } from "react-hook-form";
function Form({handleformSubmitdata}){
 const {register,handleSubmit,reset}=useForm()
 const handleformsubmit=(data)=>{
    handleformSubmitdata(data);
    reset();
 }
return (
    <div className=" mt-10 flex gap-8 justify-center">
        <form className="flex gap-8 " onSubmit={handleSubmit(handleformsubmit)}>
            <input {...register ('name')} className="px-2 py-1 rounded-md text-base font-semibold outline-none" type="text" placeholder="name"/>
            <input {...register ('email')} className="px-2 py-1 rounded-md text-base font-semibold outline-none" type="email" placeholder="email"/>
            <input {...register ('image')} className="px-2 py-1 rounded-md text-base font-semibold outline-none" type="text" placeholder="image url"/>
           <input className="text-xs bg-blue-600 text-white font-semibold rounded-lg px-3 py-1" type="submit"/> 
        </form>
    </div>
)
}
 export default Form