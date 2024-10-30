import React, { useState } from 'react' 
import './NavBar.css'
import logo from 'C:/Users/User/Desktop/loja_digital/frontend/src/Assets/logo.png'
import cart_icon from 'C:/Users/User/Desktop/loja_digital/frontend/src/Assets/cart_icon.png'

const NavBar = () => {

    const [menu,setMenu] = useState("Comprar");

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt='' class="princ1"/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Comprar")}}>Comprar{menu==="Comprar"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Homens")}}>Homens{menu==="Homens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mulheres")}}>Mulheres{menu==="Mulheres"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Crianças")}}>Crianças{menu==="Crianças"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" class="princ2"/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default NavBar