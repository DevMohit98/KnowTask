import React from "react"
import "./App.css"
import {CgNotes} from "react-icons/cg"
import {MdDelete} from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import {useGlobalContext} from "./Component/Context"
import Notes from "./Component/Notes"
import DeleteNotes from "./Component/DeleteNotes"
import AddTask from "./Component/AddTask"
const App=()=>{
  const {ChangeTab,Warning,tab,Show,...state}=useGlobalContext();
  if(state.Form===false)
  {
    return(
    <AddTask/>
    )
  }
  return(
    <article className="app">
      <div className="box">
         <div className={tab ? "notes-class" :"dark-color"}>
<button className="tab-button"><CgNotes className="tab-icons" onClick={ChangeTab}/></button>
        </div>
         <div className={tab===false ? "light-color":"textSnip-class"}>
  <button className="tab-button"><MdDelete className="tab-icons" onClick={ChangeTab}/></button>
        </div>
  
      {tab ? <Notes/> :<DeleteNotes/>}  
        <div className="bottom-button">
       {tab===true  ? <button onClick={Show} className="button"><AiOutlinePlus className="button-icon"/> </button> :
        <button onClick={Warning} className="button"><MdDelete className="button-icon"/> </button>}  
        </div>
      </div>
    
    </article>
  )
}
export default App;