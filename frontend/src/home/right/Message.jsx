import React from 'react'

function Message() {
  return (
    <div className="pt-3 pl-3 p-2 font-sourceSans ">
    <div className="chat chat-start ">
      <div className="chat-bubble chat-bubble-accent bg-lavenderBlue">
          Hi! how r u
      </div>
    </div>
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-info bg-neonCyan">I m fine</div>
    </div>
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-info bg-neonCyan">thanks</div>
    </div>
  </div>
  )
}

export default Message