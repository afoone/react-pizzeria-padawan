import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


export class LogOut extends Component {

    constructor (props) {

        super (props) ;
        this.state = {redirigir : false}

    }



    render() {
        return (            
            <div>
                {console.log(localStorage)}

                {localStorage.removeItem("user")}
                   
                
               { this.setState ({redirigir : true})}               
                {this.state.redirigir ? <Redirect to="/pizzas"/> : null}
                
            </div>
        )
    }
}

export default LogOut
