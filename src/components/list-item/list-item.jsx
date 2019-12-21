import React from 'react';
import './list-item.css';

export default class ListItem extends React.Component {

    state = {
        done: false,
        important: false,
    };

    importantOnClick_handler = () => {
        this.setState((currState) => {
            return { important: !currState.important }
        })
    };

    labelOnClick_handler = () => {
        this.setState((currState) => {
            return { done: !currState.done }
        })
    };

    render() {

        const { label } = this.props;
        let classNames = 'list-item-text';

        if (this.state.done) classNames += ' done';
        if (this.state.important) classNames += ' important';
    
        return (
            <span className="list-item">
                <span 
                    className={classNames} 
                    onClick={this.labelOnClick_handler} >
                    {label}
                </span>
                <button 
                    type="button" 
                    className="btn btn-outline-success btn-sm"
                    onClick={this.importantOnClick_handler} >
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button" className="btn btn-outline-success btn-sm style-red">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }

} // class ListItem


// const ListItem_func = ({ label, important = false }) => {
//     const itemStyle = {
//         color: important ? 'tomato' : 'inherit',
//         'letterSpacing': '1px',
//     };

//     return (
//         <span className="list-item">
//             <span style={itemStyle} className="list-item-text">
//                 {label}
//             </span>
//             <button type="button" className="btn btn-outline-success btn-sm">
//                 <i className="fa fa-exclamation" />
//             </button>
//             <button type="button" className="btn btn-outline-success btn-sm style-red">
//                 <i className="fa fa-trash-o" />
//             </button>
//         </span>
//     )
// }