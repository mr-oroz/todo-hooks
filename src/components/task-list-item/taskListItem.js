import React from 'react';

const TaskListItem = ({label, active, onDeleteItem, onActive}) => {
    return (
        <div className={'task-list-item'}>
            <div className={active ? 'active' : 'task-label'}>{label}</div>
            <div className='btn-list-item'>
                <input
                    checked={active}
                    onClick={onActive}
                    type="checkbox"/>
                <i
                    style={{
                        color: 'crimson',
                        cursor: 'pointer'
                    }}
                    onClick={onDeleteItem}
                    className={active ? 'fa fa-trash-o' : ' fa active'}></i>
            </div>
        </div>
    );
};

export default TaskListItem;