import React from 'react'
import MenuLateral, {LISTA_PIZZAS} from '../components/MenuLateral'
import ListaPizzas from '../components/ListaPizzas'
import './ListaPizzasPage.css'



const ListaPizzasPage = () => {
    return (
        <div className="lista-pizzas-page">
            <div className="hijo">
                <hijo></hijo>
            <MenuLateral active={LISTA_PIZZAS}></MenuLateral>
            <ListaPizzas></ListaPizzas>
            
            </div>
            
        </div>
    )
}

export default ListaPizzasPage
