import React from 'react'
import Login from '../components/Login'
import MenuLateral, { LOGIN } from '../components/MenuLateral';
import './LoginPage.css'


const LoginPage = () => {
    return (
        
        <div className="login-page">
            
            <MenuLateral active={LOGIN}></MenuLateral>
            <Login></Login>
            
            
        </div>

    )
}

export default LoginPage
