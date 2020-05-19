import React, { Component } from 'react'
import axios from 'axios'
import "./addPizza.css"


export const MensajeError = (props) => {

  if (!props.mensaje) {
      return null;
  }

  return (
      <div className="ui negative message">
          <div className="header">
              {props.mensaje}
          </div>
      </div>
  )
}


export class AddPizza extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      precio: '',
      imagen: '',

      nombreError: null,
      precioError: null,
      imagenError: null
    }
  }

  validate = () => {

    let nombreError = null;
    let precioError = null;
    let imagenError = null;

    if (this.state.nombre.length < 1) {
        nombreError = "El nombre es obligatorio."

    }

    if (this.state.precio.length < 1) {
        precioError = "El precio es obligatorio."

    } else {

      if (!parseInt(this.state.precio)) {
        precioError = "El precio tiene que ser un número entero."
    }

    }

    if (this.state.imagen.length <1) {
        imagenError = "El campo es obligatorio."

    }

    this.setState({
        nombreError,
        precioError,
        imagenError

    }

    )

    return !nombreError && !precioError && !imagenError;

  }

  onSubmit = (e) => {
    console.log("Grabando")

    e.preventDefault();

    if (!this.validate())
      return;

    const { nombre, precio, imagen } = this.state;
    const nuevaPizza = {
     name: nombre,
    precio,
     img: imagen
    }
    axios.post(' http://localhost:4000/pizzas', nuevaPizza).then(

      res => {

        console.log("Se grabó de forma correcta");

        this.setState(

          {

            nombre: "",
            precio: "",
            imagen: ""

          }

        )

      }

    )

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

  render() {
    return (

      <div className="container">

        <form className="ui form">

              <div className={this.state.nombreError? "field error": "field"}>
                        <label>Nombre</label>
                        <input type="text" name="nombre"
                            placeholder="Nombre de la pizza" value={this.state.nombre}
                            onChange={this.onNombreChange} />
                        <MensajeError mensaje={this.state.nombreError}></MensajeError>
                    </div>
                    <div className="field">
                        <label>Precio</label>
                        <input type="text" name="precio" placeholder="Introduce el precio"
                            value={this.state.precio}
                            onChange={this.onPrecioChange} />
                        <MensajeError mensaje={this.state.precioError}></MensajeError>
                    </div>
                    <div className="field">
                        <label>Imagen</label>
                        <input type="text" name="imagen" placeholder="Carga la imagen"
                            value={this.state.imagen}
                            onChange={this.onImagenChange} />
                        <MensajeError mensaje={this.state.imagenError}></MensajeError>
                    </div>

              <button class="ui button" type="submit" onClick={this.onSubmit}>Grabar</button>
        </form>

      </div>
    )
  }
}

export default AddPizza