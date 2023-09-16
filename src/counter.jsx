import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const countHandller = ()=>{
        const newCounter = count+1 ;

        setCount(newCounter) ;
    }
     


    const reduceHandller = ()=>{
            const newReduceCounter  = count-1 ;
            setCount(newReduceCounter) ;
            }
            
            
return (
    <div style={{border:'2px solid yellow'}}>
        <h4>Counter :{count} </h4>
        <button onClick={countHandller}>Add</button>

        <button onClick={reduceHandller}>Reduce</button>

    </div>
)
}