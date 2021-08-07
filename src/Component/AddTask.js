import React from "react"
import "../App.css"
import { useGlobalContext} from "./Context"
import {BiCheck} from "react-icons/bi"
 const AddTask=()=>{
      const {title,setTitle,desc,setDesc,HandleSubmit}=useGlobalContext();
     return(
<article className="app">
 <div className="addTask">
<form className="task-inputs" onSubmit={HandleSubmit}>
     <input type="text" 
     className="task-title"
     placeholder="Add title here"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}required>
 </input>
 <hr className="line"></hr>
 <textarea rows="4" cols="37"
 placeholder="Add discription here"
 className="task-desc" 
 value={desc}
 onChange={e=>setDesc(e.target.value)} required></textarea>
  <div className="bottom-button">
       <button type="submit"  className="button"><BiCheck className="button-icon"/></button>

  </div>
</form>
     </div>
</article>        
     )
  
 }
 export default AddTask