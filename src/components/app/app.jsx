import React    from 'react';

import AppHeader      from '../app-header'
import SearchPanel    from '../search-panel'
import ToDoList       from '../todo-list'
import ItemStatusBtns from '../item-status-btns'

const App = () => {

    const data = [
        { label: 'Drink milk', important: false, id:'c4q8bv0we' },
        { label: 'Read new book', important: false, id:'c4q69t8bv'},
        { label: 'Create app', important: true, id:'c9t8bv0we' },
        { label: 'Drink ice bear', important: false, id:'c645bv0we' },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ItemStatusBtns />
            <ToDoList data={data}/>
        </div>
    )
};

export default App;