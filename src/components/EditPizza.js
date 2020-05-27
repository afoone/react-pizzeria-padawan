import React, { Component } from 'react'
import axios from 'axios'
import "./editPizza.css"
import MultiSelect from "react-multi-select-component";

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

export class EditPizza extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      precio: '',
      imagen: '',
      ingredientes: [],
      options: [],

      nombreError: null,
      precioError: null,
      imagenError: null
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    Promise.all([axios.get("http://localhost:4000/ingredientes"),
    axios.get(`http://localhost:4000/pizzas/${id}/`)]).then(
      res => {
        this.setState({

          options: res[0].data.map(
            e => {
              return {

                label: e.name,
                value: e.id

              }
            })
        }
        )

        this.setState(
          {
            nombre: res[1].data.name,
            precio: res[1].data.precio,
            ingredientes: res[1].data.ingredientes.map(
              e => {
                return {
                  label: e.name,
                  value: e.id
                }
              }
            ),
            imagen: res[1].data.img
          })

        console.log("axios resultado", res)
      }

    )

  }

  marcaIngredientes = () => {
    //Para cada id ingrediente de pizza marcar el option en ingredientes

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

    if (this.state.imagen.length < 1) {
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


  /**Grabar cambios */
  onSubmit = (e) => {
    console.log("Grabando")

    e.preventDefault();

    if (!this.validate())
      return;

    const { nombre, precio, imagen, ingredientes } = this.state;
    const nuevaPizza = {
      name: nombre,
      precio,
      img: imagen,
      ingredientes: this.state.ingredientes.map(
        e => {
          return {
            id: e.value,
            name: e.label
          }
        }
      )
    }
    axios.put(`http://localhost:4000/pizzas/${this.props.match.params.id}`, nuevaPizza).then(

      res => {

        console.log("Se grabó de forma correcta");

        this.setState(

          {

            nombre: "",
            precio: "",
            imagen: "",
            ingredientes: ""

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

  onIngredienteChanged = e => {
    this.setState({
      ingredientes: e
    })
  }


  render() {
    return (


      <div className="container">

        <form className="ui form">

          <div className={this.state.nombreError ? "field error" : "field"}>
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
          <div>
            <label></label>
            <MultiSelect
              options={this.state.options}
              value={this.state.ingredientes}
              onChange={this.onIngredienteChanged}

              labelledBy={"Selecciona"}
              overrideStrings={
                {
                  selectSomeItems: "Selecciona",
                }
              }
            />
          </div>

          <button class="ui button" type="submit" onClick={this.onSubmit}>Modificar</button>
        </form>

      </div>
    )
  }
}

export default EditPizza