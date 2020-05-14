import React from 'react'
import MenuLateral from '../components/MenuLateral'
import ListaPizzas from '../components/ListaPizzas'
import './ListaPizzasPage.css'

const ListaPizzasPage = () => {
    return (
        <div className="lista-pizzas-page">
            <MenuLateral></MenuLateral>
            <ListaPizzas></ListaPizzas>
        </div>
    )
}

export default ListaPizzasPage
