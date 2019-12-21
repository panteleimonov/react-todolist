import React from 'react';

export default class ItemStatusBtns extends React.Component {

    render() {
        return (
            <div className="dtn-group status-btns">
                <button type="button" className="btn btn-info">
                    <span>All</span>
                </button>
                <button type="button" className="btn btn-outline-secondary">
                    <span>Active</span>
                </button>
                <button type="button" className="btn btn-outline-secondary">
                    <span>Done</span>
                </button>
            </div>
        )
    } // render [method]

} // ItemStatusBtns [class-component]





// const ItemStatusBtns = () => {
//     return (
//         <div className="dtn-group status-btns">
//             <button type="button" className="btn btn-info">
//                 <span>All</span>
//             </button>
//             <button type="button" className="btn btn-outline-secondary">
//                 <span>Active</span>
//             </button>
//             <button type="button" className="btn btn-outline-secondary">
//                 <span>Done</span>
//             </button>
//         </div>
//     )
// };

// export default ItemStatusBtns;