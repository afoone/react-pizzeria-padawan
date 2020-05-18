import React, { Component } from 'react'
import axios from 'axios'

export class AddPizza extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      precio: 0,
      imagen: ''
    }
  }
  
  onNombreChange = e => {
    this.setState(
      {
        nombre: e.target.value
      }
    )
  }
  onPrecioChange = e => {
    this.setState(
      {
        precio: e.target.value
      }
    )
  }
  onImagenChange = e => {
    this.setState(
      {
        imagen: e.target.value
      }
    )
    /** Fin Manejadores en los inputs************ */
    }

  grabarPizza = e => {
    console.log("Grabando")
    e.preventDefault( );
    const nuevaPizza = {
      nombre: this.state.nombre,
      precio: this.state.precio,
      imagen: this.state.imagen
    }
    axios.post(' http://localhost:4000/pizzas', nuevaPizza).then(
      console.log

    ).catch(
      console.error
    )
  }
  render() {
    return (

      <div>
        <form class="ui form">
          <div class="field">
            <label>Nombre</label>
            <input type="text" name="first-name" onChange={this.onNombreChange} value={this.setState.nombre} placeholder="Nombre de la Pizza" />
          </div>
          <div class="field">
            <label>Precio</label>
            <input type="number" name="precio-name" onChange={this.onPrecioChange} value={this.setState.precio} placeholder="Introduce precio" />
          </div>
          <div class="field">
            <label>imagen</label>
            <input type="file" name="last-name" onChange={this.onImageChange} value={this.setState.imagen} placeholder="Last Name" />
          </div>

          <button class="ui button" type="submit" onClick={this.grabarPizza}>Grabar</button>
        </form>

      </div>
    )
  }
}

export default AddPizza