import React from "react"
import userIcon from "../assets/user.svg"



const Login:React.FC =  () => {
  return (
    <>
    
    <button id="login-button" className="nav-bar-icons"><img src={userIcon} alt="" /></button>
    </>
  )
}

export default Login