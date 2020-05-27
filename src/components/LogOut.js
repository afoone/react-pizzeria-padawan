import React, { Component } from 'react'

export class LogOut extends Component {

    constructor (props) {

        super (props) ;
        this.setState({redirigir : false})

    }



    render() {
        return (
            <div>
                {localStorage.removeItem("user")
                (console.log(localStorage,redirigir,"Pepito"))
                   
                }
                {this.setState ({redirigir : true})}
                {this.state.redirigir ? <Redirect to="/pizzas"/> : null}
                
            </div>
        )
    }
}

export default LogOut
