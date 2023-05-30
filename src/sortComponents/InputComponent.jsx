import React, {Component} from 'react';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValues: ""
        };
    }

    handleInputChange = (e) => {
        const { value } = e.target;
        this.setState({ inputValues: value });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="inputValues"
                    value={this.state.inputValues}
                    onChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default InputComponent;