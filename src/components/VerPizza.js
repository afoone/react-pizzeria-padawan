import React, { Component } from 'react'
import axios from 'axios'
import Pizza from './Pizza'
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
        return (
            <div>
             <Pizza
             valor={this.state.pizza}
             
             
             
             ></Pizza>   
            </div>
        )
    }

}

export default VerPizza
