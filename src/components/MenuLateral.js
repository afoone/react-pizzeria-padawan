import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export const LISTA_PIZZAS = "ListaPizzas";
export const ADD_PIZZAS = "AddPizza";

export class MenuLateral extends Component {
    render() {
        return (

            <div className="menu-lateral">
            <img src="/logo192.png" alt=""></img> 
            <div class="ui vertical pointing menu">
                <Link to="/pizzas/add" class={this.props.active === ADD_PIZZAS ? "active item": "item"}>
                    Crear pizza </Link>
                <Link to="/pizzas" 
                    class={this.props.active === LISTA_PIZZAS ? "active item": "item"}>
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
