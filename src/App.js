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

       <Route exact path="/" component={ListaPizzas}></Route>
       <Route exact path="/pizza" component={ListaPizzas}></Route>
      </Router>
      {/* <ListaPizzasPage/> */}
    </div>
  );
}


export default App;