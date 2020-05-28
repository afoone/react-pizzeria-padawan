import React, { Component } from 'react'
import axios from 'axios'
import Pizza from './Pizza'
export class BorrarPizza extends Component {

    constructor (props)
        {
            super(props)
            this.state = {
                pizza: {}
            }
        }
        componentDidMount() {
            axios.delete(`http://localhost:4000/pizzas/${this.props.match.params.id}/`).then
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
      <h1> Pizza borrada con éxito </h1>   
                </div>
            )
        }
    
    }
    
    
    
    
    


export default BorrarPizza