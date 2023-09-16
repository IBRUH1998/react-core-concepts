import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'



function App() {

  
function handleClick(){
  alert("clicked me by coder")
}
function addFive(num){
  alert (num+5) ;
}

const handleClick3= ()=>{
  alert("clicked by third coder")
}

  return (
    <>
     <h3>React core</h3>

    <Friends></Friends>
     <Users></Users>
     <Team></Team>
     <Counter></Counter>

     <button onClick={handleClick}>click me</button>
     
     <button onClick={()=>addFive(3)}>click me 2</button>

     <button onClick={handleClick3}>Click me 3</button>
     <button onClick={() =>{alert('clicked by 4th coder')}}>click me 4</button>

    

    </>
  )
}

export default App
