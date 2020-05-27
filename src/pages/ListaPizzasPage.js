import React from 'react'
import MenuLateral, {LISTA_PIZZAS} from '../components/MenuLateral'
import ListaPizzas from '../components/ListaPizzas'
import './ListaPizzasPage.css'

const ListaPizzasPage = () => {

    const usuario = JSON.parse(localStorage.getItem("user"));

    return (

        <div className="lista-pizzas-page">
                
                {usuario && <h2>Yo soy tu pizza {usuario.givenName}</h2>}

            <div className="hijo">
                <hijo></hijo>
            <MenuLateral active={LISTA_PIZZAS}></MenuLateral>
            <ListaPizzas></ListaPizzas>
            
            </div>
            
        </div>

    )
}

export default ListaPizzasPage
