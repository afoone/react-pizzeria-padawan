import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const LISTA_PIZZAS = "ListaPizzas";
export const ADD_PIZZAS = "AddPizza";
export const INGREDIENTES ="ListaIngredientesPage";

export class MenuLateral extends Component {
    render() {
        return (

            <div className="menu-lateral">
                {/* <img src="/logo192.png" alt="Imagen logo"></img>  */}
                <div class="ui vertical pointing menu">
                    <Link to="/pizzas/add" class={this.props.active === ADD_PIZZAS ? "active item" : "item"}>
                        Crear pizza </Link>
                    <Link to="/pizzas"
                        class={this.props.active === LISTA_PIZZAS ? "active item" : "item"}>
                        Nuestras pizzas
                    </Link>
                    <Link to="/ingredientes/"class={this.props.active === INGREDIENTES ? "active item" : "item"}>
                        Ingredientes
                    </Link>
                </div>

            </div>

        )
    }
}

export default MenuLateral
