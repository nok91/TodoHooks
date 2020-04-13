import React, { useRef } from 'react';
import { TaskItem } from '../TaskItem';
import { useTodoList } from './hooks';
import { UseFocus } from '../Hooks/UseFocus';

import './styles/todoList.css';

const TodoList = () => {
    const inputRef = useRef();
    const { getText, context, onSubmitHandler, onChangeHandler} = useTodoList('');
    UseFocus();

    return (
        <div className="todo-list__container wrapper">
            <h1>Checklist</h1>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    ref={inputRef}
                    value={getText}
                    onChange={onChangeHandler}
                />
            </form>

            { context.tasks.map((item, idx) => 
                <TaskItem idx={idx} key={idx} item={item} />
            )}
        </div>
    );
};

TodoList.displayName = 'TodoList';

export default TodoList;