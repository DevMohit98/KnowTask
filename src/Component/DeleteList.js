import React from "react"
import "../App.css"
 const DeleteList=({Delete})=>{
      return(
        <section className="Tasks">
    {Delete.map((items)=>{
        const {id,title}=items;
        return(
            <div key={id} className="task-list">
                <h1 className="delete">{title}</h1>
            </div>
        )
    })}
    </section>
    )

 }
 export default DeleteList