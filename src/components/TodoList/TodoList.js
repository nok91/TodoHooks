import React, { useRef } from 'react';
import { TaskItem } from '../TaskItem';
import { useTodoList } from './hooks'

const TodoList = () => {
    const inputRef = useRef();
    const { getText, context, onSubmitHandler, onChangeHandler} = useTodoList('');

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    ref={inputRef}
                    value={getText}
                    onChange={onChangeHandler}
                />
                <br />
                { context.tasks.map((item, idx) => {
                    return (
                        <TaskItem idx={idx} key={idx} item={item} />
                    );
                })}
            </form>
        </>
    );
};

TodoList.displayName = 'TodoList';

export default TodoList;