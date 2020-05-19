import React from 'react'
import MenuLateral, {ADD_PIZZAS} from '../components/MenuLateral'
import addPizza from '../components/AddPizza'
import './ListaPizzasPage.css'



const CrearPizzaPage = () => {
    return (
        <div className="lista-pizzas-page">
            <MenuLateral active={ADD_PIZZAS}></MenuLateral>
            <addPizza/>
        
            
        </div>
    )
}

export default CrearPizzaPage