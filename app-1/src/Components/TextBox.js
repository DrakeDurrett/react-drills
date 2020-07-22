import React, {Component} from 'react';

class TextBox extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: ''
        }
    }

    handleInput(val) {
        this.setState({ inputValue: val })
    }

    render() {
        return (
            <div>
                <input onChange={ e => this.handleInput(e.target.value)} type='text' />
                <p>{this.state.inputValue}</p>
            </div>
        ) 
    }
}

export default TextBox;