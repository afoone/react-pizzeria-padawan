import React from 'react';
import ListaPizzasPage from './pages/ListaPizzasPage';
import {
  BrowserRouter as Router,
  Link,
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
        </ul> */}

       {/* <Route path="/" component={Header}></Route> */}
       <Route exact path="/" component={ListaPizzasPage}></Route>
       <Route exact path="/pizzas" component={ListaPizzasPage}></Route>
       {/* <Route exact pathpizzas/add" component={AddPizzasPage}></Route> */}
      </Router>
    </div>
  );
}


export default App;