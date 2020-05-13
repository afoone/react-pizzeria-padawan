import React from 'react';
import ListaPizzas from './components/ListaPizzas';
import Pizza from './components/Pizza';



function App() {


  const pizzaprueba ={
    id: 1
  }

  return (
    <div className="App">
      <ListaPizzas/>
      <Pizza pizza={pizzaprueba}></Pizza>
    </div>
  );
}

export default App;