import React from "react"
import { useGlobalContext} from "./Context"
import DeleteList from "./DeleteList"
import {FaCheck} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import "../App.css"
const DeleteNotes=()=>{
    const {closeModal,DeleteAllTask,...state}=useGlobalContext();
    if(state.modal===true)
{
       return(
        <section className="container">
            <div className="warning-box">
                <p>Do you want to delete all task ?</p>
                <div className="button-warning">
                     <button onClick={DeleteAllTask} className="warning-button"><FaCheck  className="warning-icon"/> </button>
                   <button onClick={closeModal}className="warning-button"><ImCross  className="cross"/> </button>
                </div>
              
            </div>

        </section>
    )
}
if(state.data.length>0 || state.delete.length>0){
    if(state.delete.length>0)
{
    return(
  <DeleteList key={state.delete.id} Delete={state.delete}/>
    )
      
    
} 
    return(
         <section className="notes">
            <div className="no-task">
            <p>No task  to delete</p>
        </div>
        </section>
    )
}
    return(
      <section className="notes">
            <div className="no-task">
            <p>No task completed</p>
        <p> press "+" to add task</p>
        </div>
        </section>
    )
}
export default DeleteNotes;