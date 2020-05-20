import React from 'react'
import MenuLateral, {ADD_PIZZAS} from '../components/MenuLateral'
import addPizza from '../components/AddPizza'
import './ListaPizzasPage.css'
import './CrearPizzaPage.css'



const CrearPizzaPage = () => {
    return (
        <div className="lista-pizzas-page">
            <div className="hijo">
                <hijo></hijo>
            </div>
            <MenuLateral active={ADD_PIZZAS}></MenuLateral>
            <addPizza/>
        
            
        </div>
    )
}

export default CrearPizzaPage