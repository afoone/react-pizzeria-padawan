import React, { Component } from 'react'

export class MenuLateral extends Component {
    render() {
        return (

            <div className="menu-lateral">

            <img src="/logo192.png" alt=""></img> 

            <div class="ui vertical pointing menu">
                <a class="active item" href="/pizzas/add">
                    Crear pizza
                    </a>
                <a class="item" href="/pizzas">
                    Nuestras pizzas
                    </a>
                <a class="item" href="/pizza/1/">
                    Ver pizza
                    </a>
            </div>

        </div>

        )
    }
}

export default MenuLateral
