import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";
import SwitchLabels from "./formControlLabel";
import InputComponent from "./InputComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showExplanation: false // Add a state to toggle the explanation
        };
    }

    render() {
        return (

            <nav className="nav alert-dark">
                <button
                    className='btn btn-secondary m-2'
                    onClick={this.props.onRandomize}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Randomize
                </button>
                <DiscreteSlider
                    default={20}
                    min={10}
                    max={100}
                    step={10}
                    title="Numbers"
                    onCountChange={this.props.onCountChange}
                    disable={this.props.disable}
                />
                <DiscreteSlider
                    default={30}
                    min={10}
                    max={100}
                    step={1}
                    title="Speed"
                    onCountChange={this.props.onSpeedChange}
                    disable={false}
                />
                <SimpleSelect
                    pos={0}
                    onAlgoChanged={this.props.onAlgoChanged}
                />
                <SwitchLabels
                    disable={this.props.disable}
                    onDoubleChange={this.props.onDoubleChange}
                />
                <SimpleSelect
                    pos={1}
                    onAlgoChanged={this.props.onAlgoChanged}
                />

                <button
                    className='btn btn-warning btn-lg '
                    onClick={this.props.onViusalize}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Visualize
                </button>
                <InputComponent
                    onInputChange={this.handleInputChange} // Pass down an event handler to receive input values
                />
                <button className='btn btn-secondary m-2' onClick={this.props.handleCreate}
                        disabled={this.props.disable}
                        style={this.isClickable()}
                >
                    Create
                </button>
                {/* Add click event handler */}
                {/*<BubbleSortSnippet/>*/}
            </nav>

        );
    }

    isClickable = () => {
        if (this.props.disable) {
            return {cursor: "not-allowed"};
        } else {
            return {};
        }
    }
}

export default Menu;
