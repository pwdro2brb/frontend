import React from 'react' 
import './NavBar.css'
import logo from 'C:/Users/User/Desktop/loja_digital/frontend/src/Assets/logo.png'
import cart_icon from 'C:/Users/User/Desktop/loja_digital/frontend/src/Assets/cart_icon.png'

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt='' class="princ1"/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li>Comprar</li>
                <li>Homens</li>
                <li>Mulheres</li>
                <li>Crianças</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" class="princ2"/>
            </div>
        </div>
    )
}

export default NavBar