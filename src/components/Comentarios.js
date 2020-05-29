import React, { Component } from 'react'
import './Comentario.css'


export class Comentarios extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comentario: ""

        }

    }

    onComentarioChange = (e) => {
        this.setState({
            comentario: e.target.value
        }

        )

    }

    render() {
        return (
            <div className="caja-comentario">
                <div className="ui form"/>
                    <div className="field">
                        <textarea type="text" value={this.state.comentario}
                        onChange={this.setState.onComentarioChange}></textarea>
                        <button className="ui button" type="submit">Submit</button>
                    </div>
            </div>
        )
    }
}

export default Comentarios
