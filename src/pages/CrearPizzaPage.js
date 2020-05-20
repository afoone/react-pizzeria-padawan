import React from 'react'
import MenuLateral, {ADD_PIZZAS} from '../components/MenuLateral'
import AddPizza from '../components/AddPizza'
import './ListaPizzasPage.css'
import './CrearPizzaPage.css'



const CrearPizzaPage = () => {
    return (
        <div className="crear-pizzas-page">
            
            
            <MenuLateral active={ADD_PIZZAS}></MenuLateral>
            <AddPizza/>
        
            
        </div>
    )
}

export default CrearPizzaPage