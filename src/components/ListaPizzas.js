import React, { Component } from 'react'
import Pizza from './Pizza'

export class ListaPizzas extends Component {

 
    lista = [];


    render() {
        return (
            <div>
                <Pizza pizza={null} ></Pizza>
            </div>
        )
    }
}

export default ListaPizzas
