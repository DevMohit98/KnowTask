import React from "react"
import "../App.css"
import { useGlobalContext } from "./Context"
const List =({data})=>{
    const {DTAB}=useGlobalContext();
    return(
        <section className="Tasks">
    {data.map((items)=>{
        const {id,title}=items;
        return(
            <div key={id} className="task-list">
                <h1 onClick={()=>DTAB(id,title)}>{title}</h1>
            </div>
        )
    })}
    </section>
    )
}
export default List