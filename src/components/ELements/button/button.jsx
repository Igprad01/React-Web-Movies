import React from "react"

const ButtonA = (props) => {
  
    return (
      <button className={`px-12 py-5 ${props.color} ${props.textColor}`}>Submit</button>
    )
  }

  export default ButtonA