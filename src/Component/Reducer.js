const Reducer=(state,action)=>{
    if(action.type==="Show")
    {
        return{
            ...state,
            Form:false
        }
    }
    if(action.type==="submit")
    {
        const newData=[...state.data,action.payload]
        return{
            ...state,
            data:newData,
            Form:true
        }
    }
    if(action.type==="Delete")
    {
        const newArray=[...state.delete,action.payload]
        return{
            ...state,
            delete:newArray,
        }
    }
    if(action.type==="DeleteAll")
    {
        return{
            ...state,
            delete:[],
            modal:false

        }
    }
if(action.type==="SHOWMODAL")
{
    return{
        ...state,
        modal:true
    }
}
if(action.type==="close")
{
    return{
        ...state,
        modal:false
    }
}
}
export default Reducer