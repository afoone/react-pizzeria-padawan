import React from 'react'
import MenuLateral, {ADD_PIZZAS} from '../components/MenuLateral'
import ListaIngredientes from '../components/ListaIngredientes'
import './ListaPizzasPage.css'



const ListaIngredientesPage = () => {
    return (
        <div className="lista-pizzas-page">
            <MenuLateral active={ADD_PIZZAS}></MenuLateral>
            <ListaIngredientes></ListaIngredientes>
            
        
            
        </div>
    )
}

export default ListaIngredientesPage