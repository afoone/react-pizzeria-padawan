import React from 'react'
import MenuLateral, {LISTA_PIZZAS} from '../components/MenuLateral'
import ListaPizzas from '../components/ListaPizzas'
import './ListaPizzasPage.css'



const ListaPizzasPage = () => {
    return (
        <div className="lista-pizzas-page">
            <MenuLateral active={LISTA_PIZZAS}></MenuLateral>
            <ListaPizzas></ListaPizzas>
          
            
        </div>
    )
}

export default ListaPizzasPage
