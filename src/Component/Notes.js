import React from "react"
import "../App.css"
import { useGlobalContext} from "./Context"
import List from "./List"
const Notes=()=>{
     const {...state}=useGlobalContext();
return(
    <>
    {state.data.length >0 ? <List key={state.data.id} data={state.data} /> : 
    <section className="notes">
            <div className="no-task">
            <p>No task</p>
        <p> press "+" to add task</p>
        </div>
        </section>}
       </> 
    )
    }

export default Notes