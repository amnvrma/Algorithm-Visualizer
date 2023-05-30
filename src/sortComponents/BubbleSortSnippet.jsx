import React, { Component } from 'react';
import './BubbleSortSnippet.css';
class BubbleSortSnippet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedLine: 0, // Tracks the currently highlighted line
        };
    }

    render() {
        // Array of lines for the bubble sort snippet
        const lines = [
            'function bubbleSort(arr) {',
            '    let len = arr.length;',
            '    for (let i = 0; i < len - 1; i++) {',
            '        for (let j = 0; j < len - i - 1; j++) {',
            '            if (arr[j] > arr[j + 1]) {',
            '                let temp = arr[j];',
            '                arr[j] = arr[j + 1];',
            '                arr[j + 1] = temp;',
            '            }',
            '        }',
            '    }',
            '    return arr;',
            '}',
        ];

        return (
            <div className="bubble-sort-snippet">
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className={`snippet-line ${index === this.state.highlightedLine ? 'highlighted' : ''}`}
                    >
                        {line}
                    </div>
                ))}
            </div>
        );
    }
}

export default BubbleSortSnippet;
