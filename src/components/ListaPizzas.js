import React, { Component } from 'react'
import Pizza from './Pizza'
import axios from 'axios'

export class ListaPizzas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista : [],
            
        }
    }

    componentDidMount() {

        axios.get("http://localhost:4000/pizzas").then(
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
            <div className={`pizza ${this.state.lista}`}>
                <Pizza></Pizza>

                {

                    this.state.lista.map(
                        p => 
                        <Pizza valor={p}>
                        </Pizza>
                    )

                }

            </div>
        )
    }
}

export default ListaPizzas
