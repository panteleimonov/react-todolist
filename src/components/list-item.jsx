import React from 'react';


const ListItem = ({ label, important = false }) => {
    const itemStyle = {
        color: important ? 'tomato' : 'inherit',
        'letter-spacing': '1px',
    };

    return <span style={itemStyle}>{label}</span>
}

export default ListItem;