import React, { Component } from 'react'
import Ingredientes from './Ingredientes'
import axios from 'axios'

export class ListaIngredientes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista : [],
            
        }
    }

    componentDidMount() {

        axios.get("http://localhost:4000/ingredientes").then(
            res => {
                this.setState(
                    {
                        lista: res.data
                    }
                )
            }
        ).catch(
            console.error
        )
    }

    render() {
        return (
            <div className={`ingredientes`}>
                

                {

                    this.state.lista.map(
                        p => 
                        <Ingredientes valor={p}>
                        </Ingredientes>
                    )

                }

            </div>
        )
    }
}

export default ListaIngredientes
