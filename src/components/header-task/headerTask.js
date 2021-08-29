import React from 'react';

const HeaderTask = ({onchangeSelect, task, all}) => {
    return (
        <div className='header'>
            <h2>Пост лист</h2>
            <span>число листов {task.length}</span>
            <select
                value={all}
                onChange={(e) => onchangeSelect(e.target.value)}
                className='list-check'>
                <option value="all">по умолчание</option>
                <option value="done">выполнено</option>
                <option value="not done">не выполнено</option>
            </select>
        </div>
    );
};

export default HeaderTask;