import React, { Component } from 'react'
import axios from 'axios'
import Pizza from './Pizza'
import Comentarios from './Comentarios'


export class VerPizza extends Component {

    constructor (props)
        {
            super(props)
            this.state = {
                pizza: {}
            }
        }

    componentDidMount() {
        axios.get(`http://localhost:4000/pizzas/${this.props.match.params.id}/`).then
        (
         res => {
               console.log(res.data) 
               this.setState (
                   {
                       pizza: res.data
                   }
               )

         }       
        )

    }

    render() {

        const user = JSON.parse(localStorage.getItem("user"))
    
        return (
            <div>
             <Pizza
             valor={this.state.pizza}
             modoVer
             
             
             ></Pizza>   

            {user ? <Comentarios></Comentarios> : null}

            <div>ListaComentarios</div>

            </div>
        )
    }

}

export default VerPizza
