import React from "react"
import Boxes from "./Boxes"
import Box from "./Box"

export default function App() {
   const [square,setSquare] = React.useState(Boxes)

   function toggle(id){
      /*  setSquare(prevSquare => {
       const updateSquare = []
       for(let i=0;i < prevSquare.length; i++){
           const currentSquare= prevSquare[i]
           if(currentSquare.id == id){
               const newSquare = {
                   ...prevSquare,
                   on : !currentSquare.on

               }
                updateSquare.push(newSquare)
           }else{
                updateSquare.push(currentSquare)
           }

       }
       return updateSquare
       }) */
       setSquare(prevSquare => {
        return   prevSquare.map((squares) =>{
            return squares.id === id ? {...squares, on: !squares.on} : squares
        } )})
    }
    
    const squareElements = square.map(squar => (
       <Box key={squar.id}  on={squar.on} toggle={() => toggle(squar.id)}/>
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
