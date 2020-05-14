import React from 'react'
import './Pizza.css'

// prop pizza

const Pizza = (props) => {


    console.log(props.valor)

    return (

    
        <div className = "pizzaitem">
         <div>   {props.valor.name} </div>
        
          <div> {props.valor.precio} € </div> 
            
           <div> <img src={props.valor.img}></img> </div>  
            
        </div>
       
    )
}


export default Pizza
