import React from "react"
import { useNavigate } from "react-router-dom"




const NavBar:React.FC = () => {
    const navigate = useNavigate()
  return (
    <>
    <button onClick={() => navigate("/")} className='logo'></button>
    <button onClick={() => navigate("/restaurants")}>Restaurants</button>
    <button onClick={() => navigate("/chefs")}>Chefs</button>
    </>
  )
}


export default NavBar