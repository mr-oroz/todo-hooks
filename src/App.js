import React, {useState, useEffect} from 'react';
import HeaderTask from "./components/header-task";
import AddTask from "./components/add-task";
import TaskList from "./components/task-list/taskList";
import './App.css';
const App = () => {
    const [task, setTask]= useState(JSON.parse(localStorage.getItem('task-hooks')) || []);
    const [text, setText] = useState('');
    const [all, setAll] = useState('all');

    useEffect(() => {
        localStorage.setItem('task-hooks', JSON.stringify(task))
    }, [task]);

    const onChangeInput = (input) => {
        setText(input)
    }
    const onchangeSelect = (value) => {
        setAll(value)
    }

    const onAddNewTaskList = (body) => {
        const newItem = {
            label: body,
            active: false
        }
        const newArr = [...task, newItem]
        setTask(newArr)
        setText('')
    }

    const onDeleteItem = (idx) => {
        const item = task.findIndex((e, index) => index === idx);
        const newArr = [...task.slice(0, item), ...task.slice(item + 1)];
        setTask(newArr)
    }

    const onActive = (idx) => {
        const item = task.findIndex((e, index) => index === idx);
        const old = task[item];
        const newItem = {...old, active: !old.active};
        const newArr = [...task.slice(0, item),newItem, ...task.slice(item + 1)];
        setTask(newArr)
    }

    return (
        <div className='app'>
            <HeaderTask
                all={all}
                onchangeSelect={onchangeSelect}
                task={task}/>
            <AddTask
                onAddNewTaskList={onAddNewTaskList}
                onChangeInput={onChangeInput}
                text={text}/>
            <TaskList
                all={all}
                onActive={onActive}
                onDeleteItem={onDeleteItem}
                task={task}/>
        </div>
    );
};

export default App;