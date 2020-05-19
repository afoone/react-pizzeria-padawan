import React from 'react';
// import ListaPizzas from './components/ListaPizzas';
// import Pizza from './components/Pizza'
import Header from './components/Header'
// import MenuLateral from './components/MenuLateral'
import ListaPizzasPage from './pages/ListaPizzasPage';
import AddPizza from './components/AddPizza'
// import MenuLateral from './components/MenuLateral'

import ListaIngredientesPage from './pages/ListaIngredientesPage'
// import Ingredientes from './components/Ingredientes'
// import ListaIngredientes from './components/ListaIngredientes'
// import ListaIngredientesPage from './pages/ListaIngredientesPage'
import CrearPizzaPage from './pages/CrearPizzaPage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



// const Header = () => {
//   return (
//     <h1>
//       Welcome to pizza world
//     </h1>
//   )
// }


function App() {

  return (
    <div className="App">

      <Router>
        {/* <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>

          <Link to="/pizzas">Lista pizzas</Link>
          </li>
        </ul> */

        }


        <Route path="/" component={Header}></Route>
        <Route exact path="/" component={ListaPizzasPage}></Route>
        <Route exact path="/pizzas" component={ListaPizzasPage}></Route>
        <Route exact path="/pizzas/add" component={AddPizza}></Route>
        <Route exact path= "/pizzas/add" component={CrearPizzaPage}></Route>
        <Route exact path="/ingredientes" component={ListaIngredientesPage}></Route>
      </Router>
    </div>
  );
}


export default App;