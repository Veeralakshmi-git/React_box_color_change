import React from "react"

export default function Box(props){
  const styles = {
      backgroundColor:props.on ? "yellow" : "green"
  }
return(
<div className="decorate" style={styles} onClick={props.toggle}>
</div>
)
}