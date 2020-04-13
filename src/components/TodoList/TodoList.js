import React from 'react';
import { TaskItem } from '../TaskItem';
import { useTodoList } from './hooks';
import { InputForm } from '../InputForm';
import { useFocus } from '../../utils';

const TodoList = () => {
    const { context } = useTodoList('');
    useFocus();

    const renderList = (item, idx) => (<TaskItem idx={idx} key={idx} item={item} />);

    return (
        <div className="todo-list__container wrapper">
            <h1>Checklist</h1>

            <InputForm />

            <div className="check-list__container" role="list" aria-label="check list">
                { context.tasks.map(renderList) }
            </div>
        </div>
    );
};

TodoList.displayName = 'TodoList';

export default TodoList;