import React from 'react';
import ListaPizzas from './components/ListaPizzas';
import ListaPizzasPage from './pages/ListaPizzasPage';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>

          <Link to="/pizza">Lista pizzas</Link>
          </li>
        </ul>

       <Route exact path="/" component={ListaPizzasPage}></Route>
       <Route exact path="/pizza" component={ListaPizzasPage}></Route>
      </Router>
    </div>
  );
}


export default App;