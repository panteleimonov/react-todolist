import React from 'react';
import './list-item.css';

export default class ListItem extends React.Component {

    render() {
        const { label, important = false } = this.props;
        const itemStyle = {
            color: important ? 'tomato' : 'inherit',
            'letterSpacing': '1px',
        };
    
        return (
            <span className="list-item">
                <span style={itemStyle} className="list-item-text">
                    {label}
                </span>
                <button type="button" className="btn btn-outline-success btn-sm">
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