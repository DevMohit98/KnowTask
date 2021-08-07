import React, { useContext, useReducer, useState } from "react"
import Reducer from "./Reducer";
const AppContext=React.createContext();
const AppProvider=({children})=>{
    const [title,setTitle]=useState("");
     const [desc,setDesc]=useState("");
    const [tab,setTab]=useState(true);
     const defaultState={
         Form:true,
         data:[],
         delete:[],
         modal:false,
     }
const ChangeTab=()=>{
    setTab(!tab)
}
     const Show=()=>{
        dispatch({type:"Show"})
     }
     const HandleSubmit=()=>{
         if(title && desc)
         {
             const newItems={id: new Date().getTime().toString(),title,desc};
             dispatch({type:"submit",payload:newItems})
             setTitle("");
             setDesc("")
         }

     }
     const Warning=()=>{
         console.log("hello")
         dispatch({type:"SHOWMODAL"})
     }
     const DTAB=(id,title)=>{
             const DARRAY={id,title};    
          const newdata=state.data.filter((remove)=>remove.id!==id)
          state.data=newdata;
           dispatch({type:"Delete",payload:DARRAY});  
         }
     const DeleteAllTask=()=>{
         
         dispatch({type:"DeleteAll"});
     }
     const closeModal=()=>{
         console.log("close");
dispatch({type:"close"})
     }
        
     const [state,dispatch]=useReducer(Reducer,defaultState)
            return(
        <AppContext.Provider value={{
            ...state,
            title,
            setTitle,
            desc,
            setDesc,ChangeTab,tab,Show,HandleSubmit,DTAB,DeleteAllTask,Warning,closeModal
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider}