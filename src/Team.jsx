import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11) ;
    
    const counterHandler =()=>{
        const newCounter = team+1 ;
        setTeam(newCounter) ;
    }

    const removeHandler = ()=>{
        const newRemoveCount = team-1 ;
        setTeam(newRemoveCount) ;
    }



    const teamStyle = {
        border: '2px solid yellow',
        margin:'15px' ,
        padding:'15x' ,
        boarderRadious: '20px' 
    }
    return(

        <div style={teamStyle}>
            <h2>Player:{team}</h2>
            <button onClick={counterHandler}>Add</button>
            <button onClick={removeHandler}>remove</button>
        </div>
    )
}