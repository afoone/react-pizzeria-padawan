import React from "react";
import MultiSelect from "react-multi-select-component";

class SeleccionIngrePizza extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selected : [],
            options: [
                { label: "Grapes 🍇", value: "grapes" },
                { label: "Mango 🥭", value: "mango" },
                { label: "Strawberry 🍓", value: "strawberry"},
            ]
        }
    }


    onFrutasChanged = (frutas) =>{
        this.setState({
            selected: frutas
        })
    }

    

    render() {
        return (
            <div>
                <h3>Selecciona tus ingredientes</h3>
                <pre>{JSON.stringify(this.state.selected)}</pre>
                <MultiSelect
                    options={this.state.options}
                    value={this.state.selected}
                    onChange={this.onFrutasChanged}
                    labelledBy={"Selecciona"}
                    overrideStrings= {
                        {
                            selectSomeItems: "Selecciona",
                        }
                    }
                />
            </div>
        );
    }
};

export default SeleccionIngrePizza;