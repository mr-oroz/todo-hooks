import React from 'react';

const AddTask = ({onChangeInput, onAddNewTaskList, text}) => {

    return (
        <div className='add-task'>
            <input
                className='input-task'
                value={text}
                onChange={(e) => onChangeInput(e.target.value)}
                placeholder='Напиши че нибудь...'
                type="text"/>
            <span
                onClick={() => onAddNewTaskList(text)}
                className='btn-task'>Добавист лист</span>
        </div>
    );
};

export default AddTask;