import React from 'react'
import MenuLateralPruebas from '../components/MenuLateralPruebas'
import ListaPizzas from '../components/ListaPizzas'
import './ListaPizzasPage.css'

const ListaPizzasPage = () => {
    return (
        <div className="lista-pizzas-page">
            <MenuLateralPruebas></MenuLateralPruebas>
            <ListaPizzas></ListaPizzas>
        </div>
    )
}

export default ListaPizzasPage
