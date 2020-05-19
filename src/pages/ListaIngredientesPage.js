import React from 'react'
import MenuLateral, {INGREDIENTES} from '../components/MenuLateral'
import ListaIngredientes from '../components/ListaIngredientes'
import './ListaPizzasPage.css'



const ListaIngredientesPage = () => {
    return (
        <div className="lista-pizzas-page">
            <MenuLateral active={INGREDIENTES}></MenuLateral>
            <ListaIngredientes></ListaIngredientes>
            
        
            
        </div>
    )
}

export default ListaIngredientesPage