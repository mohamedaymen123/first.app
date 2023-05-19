import React from 'react'
import taswira from "../WIN_20221225_09_30_17_Pro.jpg"
const Message = () => {
  return (
    <div className='message' style={{color:"blue", fontSize:"35px"}}>Message
    <img src="/logo192.png" alt="" />
    <img src={taswira} alt=""  style={{width:30}}/>
    
    </div>
  )
}

export default Message