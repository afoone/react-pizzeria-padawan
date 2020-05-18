import React from 'react'
import './Ingredientes.css'

// prop pizza


const Ingredientes = (props) => {

    console.log(props.valor)

    return (

      <div class="ui four column grid">

        <div class="column">

          <div class="ui fluid card">

            <div className="center aligned header, color">   {props.valor.name} </div>

            <div className="image"> <img alt="" src={props.valor.img}></img> </div>

            <div className="content, color-bajo"> {props.valor.precio} € </div>

            <button class="ui grey button"> Añadir a la Pizza</button>

          </div>

        </div>

      </div>
    
        )
}

export default Ingredientes 
