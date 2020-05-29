import React from 'react';
import Header from './components/Header'
import ListaPizzasPage from './pages/ListaPizzasPage';
import ListaIngredientesPage from './pages/ListaIngredientesPage'
import CrearPizzaPage from './pages/CrearPizzaPage'
import EditPizza from './components/EditPizza'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import VerPizza from './components/VerPizza';
import LogOut from './components/LogOut';
import BorrarPizza from './components/BorrarPizza'
import MenuLateral from './components/MenuLateral';



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
        <Route path="/pizzas/edit/:id" component={MenuLateral}></Route>
        <Route path="/pizzas/ver/:id" component={MenuLateral}></Route>
        <Route path="/pizzas/borrar/:id" component={MenuLateral}></Route>
        <Route exact path="/" component={ListaPizzasPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/LogOut" component={LogOut}></Route>
        <Route exact path="/pizzas" component={ListaPizzasPage}></Route>
        <Route exact path="/pizzas/edit/:id" component={EditPizza}></Route>
        <Route exact path="/pizzas/ver/:id" component={VerPizza}></Route>
        <Route exact path="/pizzas/borrar/:id" component={BorrarPizza}></Route>
        <Route exact path= "/pizzas/add" component={CrearPizzaPage}></Route>
        <Route exact path="/ingredientes" component={ListaIngredientesPage}></Route>
      </Router>
    </div>
  );
}


export default App;