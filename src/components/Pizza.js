import React from 'react'
import './Pizza.css'
import {toTitleCase} from '../utils/utils'
import {Link} from 'react-router-dom'

// prop pizza


const Pizza = (props) => {

    // console.log(props.valor)
    
    
const verIng = props.valor.ingredientes ? props.valor.ingredientes.map ((e, index) => {
    let texto = toTitleCase(e.name);
    if (props.valor.ingredientes.length - 1 > index) {
        if (props.valor.ingredientes.length - 2 === index) {
            texto = texto + " y "

        } else {
            texto = texto + ", "
        }
    }

    return <>{texto}</>

}) : null
    return (
        
        <div className="ui centered card"> 
         
        <div className = "center aligned header, color">   {props.valor.name} </div>
        
        
        <div className ="image"> <img alt="" src={props.valor.img}></img>
         </div>
    
        <div className ="content, color-bajo"> {props.valor.precio} € </div>
        <div>  <Link to={`/pizzas/edit/${props.valor.id}`}>Editar Pizza</Link></div>
        <span className="verIng">{verIng}</span>
        
        </div>   
    
        )
        
}

export default Pizza
