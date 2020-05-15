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
        {/* <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>

          <Link to="/pizzas">Lista pizzas</Link>
          </li>
        </ul> */}

       <Route exact path="/" component={ListaPizzas}></Route>
       <Route exact path="/pizzas" component={ListaPizzas}></Route>
      </Router>
    </div>
  );
}


export default App;