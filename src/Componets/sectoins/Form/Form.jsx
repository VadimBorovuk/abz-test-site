import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueName: "",
            valueAge: ""
        }

    }

    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({valueName: e.target.value})
    };
    handleAgeChange = (e) => {
        e.preventDefault();
        this.setState({valueAge: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`your data: ${this.state.valueName}, ${this.state.valueAge}`)
        this.setState({valueName: '', valueAge: ''})
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input value={this.state.valueName} onChange={this.handleNameChange} type="text"/>
                    </label>
                    <label>
                        Age:
                        <input value={this.state.valueAge} onChange={this.handleAgeChange} type="text"/>
                    </label>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        );
    }
}

export default Form;