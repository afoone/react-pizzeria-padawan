import React from 'react'
import MenuLateral, {INGREDIENTES} from '../components/MenuLateral'
import ListaIngredientes from '../components/ListaIngredientes'
import './ListaIngredientesPage.css'



const ListaIngredientesPage = () => {
    return (
        <div className="lista-ingredientes-page">
             <div className="hijo">
             <hijo></hijo>
             <MenuLateral active={INGREDIENTES}></MenuLateral>
             <ListaIngredientes></ListaIngredientes>

        </div>

        </div>
    )
}

export default ListaIngredientesPage