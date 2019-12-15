import React from 'react';

const ItemStatusBtns = () => {
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
};

export default ItemStatusBtns;