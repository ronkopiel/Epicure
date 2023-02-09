import React from "react"
import cartIcon from '../assets/Bag.svg'
const Cart:React.FC = () => {
  return (
    <button id="cart-button" className="nav-bar-icons"><img src={cartIcon} alt="" /></button>
  )
}
export default Cart