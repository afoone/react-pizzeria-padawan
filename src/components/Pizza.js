import React from 'react'
import './Pizza.css'

// prop pizza

const Pizza = (props) => {


    console.log(props.valor)

    return (
        <div className = "pizza">
            {props.valor.name}
        </div>
    )
}

export default Pizza
