import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class MenuLateral extends Component {
    render() {
        return (

            <div className="menu-lateral">

            <img src="/logo192.png" alt=""></img> 

            <div class="ui vertical pointing menu">
                <Link to="/pizzas/add" class="item">
                    Crear pizza </Link>
                <Link to="/pizzas" class="item">
                    Nuestras pizzas
                    </Link>
                <Link to="/pizzas/1/" class="item">
                    Ver pizza
                    </Link>
            </div>

        </div>

        )
    }
}

export default MenuLateral
