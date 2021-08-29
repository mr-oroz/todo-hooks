import React from 'react';
import TaskListItem from "../task-list-item";

const TaskList = ({task, onDeleteItem, onActive, all}) => {
    const elements = task.filter(elem => {
        if(all === 'all') {
            return true
        } else if(all === 'done') {
            return elem.active
        } else if(all === 'not done') {
            return !elem.active
        }
    }).map((elem, index) => {
        return <TaskListItem
            onActive={() => onActive(index)}
            onDeleteItem={()=> onDeleteItem(index)}
            key={index}
            {...elem}/>
    })

    return (
        <div className='task-list'>
            {elements}
        </div>
    );
};

export default TaskList;