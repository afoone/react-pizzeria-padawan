import React from 'react';
import ListaPizzas from './components/ListaPizzas';
import Pizza from './components/Pizza'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import ListaPizzasPage from './pages/ListaPizzasPage';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router> <Header></Header> 
        {/* <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>

          <Link to="/pizzas">Lista pizzas</Link>
          </li>
        </ul> */
           
        }
        

       <Route exact path="/" component={ListaPizzas}></Route>
       <Route exact path="/pizzas" component={ListaPizzas}></Route>
      </Router>
      {/* <ListaPizzasPage/> */}
    </div>
  );
}


export default App;