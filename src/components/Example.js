import React from "react";
import MultiSelect from "react-multi-select-component";

class Example extends React.Component {

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
                <h1>Select Fruits</h1>
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

export default Example;