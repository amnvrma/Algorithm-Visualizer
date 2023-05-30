// import React, {Component} from 'react';
// import './style.css';
// class Rect extends Component {
//
//     render() {
//         return (
//             <div
//                 className='rect'
//                 // style={{height:this.props.rect.width,
//                 style={{height:this.props.rect.width,
//                     background:this.checkColor(),
//                     margin:this.props.marg,
//                     // float:'left',
//                     'vertical-align': 'middle'
//                 }}
//             >
//
//             </div>
//         );
//     }
//     checkColor = () => {
//         if( this.props.rect.isSorted ){
//             return "green";
//         } else if( this.props.rect.isSorting ){
//             return "red";
//         } else{
//             return "black"
//         }
//     }
// }
//
// export default Rect;

import React, {Component} from 'react';
import './style.css';

class Rect extends Component {

    render() {
        return (
            <div
                className='rect'
                style={{
                    height: this.props.rect.height,
                    width: this.props.width,
                    background: this.checkColor(),
                    margin: this.props.marg,
                    'vertical-align': 'middle',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                }}
            >
                {(this.props.rect.height)}
            </div>
        );
    }

    checkColor = () => {
        if (this.props.rect.isSorted) {
            return "green";
        } else if (this.props.rect.isSorting) {
            return "red";
        } else {
            return "black";
        }
    }
}

export default Rect;
