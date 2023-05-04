import React from "react"
import '../App.css'
import Logo from '../assets/logo512.png'


function Header() {
 return (
  <div className="header-bar">
   <img src={Logo} alt="logo" className="logo" />
   <h1>Mahdis Miller</h1>
  </div>
 )
}
export default Header
