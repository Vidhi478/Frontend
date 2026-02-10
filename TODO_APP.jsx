import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

 const Todo=()=>{
  let [todos,settodos]= useState([{task:"sample task ", id: uuidv4(), isDone:"false"}]);
  let [newtodo,setnewtodo]= useState("");
   
let addNewTask=()=>{
 settodos((prevtask)=>{
  return [...todos,{task:newtodo,id:uuidv4()}];
 });
 setnewtodo("");

}
let updateTodo=(event)=>{
  setnewtodo(event.target.value);
}
 
let handledelete=(id)=>{
    settodos(todos.filter((todo)=>todo.id!=id));
}

 let uppercase=()=>{
 settodos((todos)=>(
   todos.map((todo)=>{
  return{
    ...todo,task:todo.task.toUpperCase(),
  };
   })
 ))
 } 

let handleDone=(id)=>{
     settodos((todos)=>(
   todos.map((todo)=>{
    if(todo.id===id){
 return{
      ...todo,isDone:true
  };
    }else{
        return todo;
    }
   })
 ))
}

    return (
        <div>
        <h1>TODO APP</h1>
        <input placeholder="add task" value={newtodo} onChange={updateTodo}></input>
        <br/> <br/>
        <button onClick={addNewTask}>ADD</button>
         <br/> <br/>
         <ul>
             {
                todos.map((todo)=>(
               <li key={todo.id}>
                <span style={todo.isDone===true?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                <button onClick={()=>{handledelete(todo.id)}}>delete</button>
                <button  onClick={()=>{handleDone(todo.id)}}>Mark as done✅</button>
                </li>
               ))
             }
         </ul>
         <button onClick={uppercase}>UpperCase</button>

</div>
    )

 }
 export default Todo;