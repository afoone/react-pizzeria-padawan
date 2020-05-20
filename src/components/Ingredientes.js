import React from 'react'
import './Ingredientes.css'

// prop pizza


const Ingredientes = (props) => {

    console.log(props.valor)

    return (

      
          <div className="ui fluid card ingredientes">

            <div className="center aligned header, color">   {props.valor.name} </div>

            <div className="image"> <img alt="" src={props.valor.img}></img> </div>

            <div className="content, color-bajo"> {props.valor.precio} € </div>

            <button class="ui grey button"> Añadir a la Pizza</button>

      

      </div>
    
        )
}

export default Ingredientes 
