import React from 'react';
import { TaskItem } from '../TaskItem';
import { useTodoList } from './hooks';
import { InputForm } from '../InputForm';
import { useFocus } from '../../utils';

const TodoList = React.memo(() => {
    const { context } = useTodoList('');
    useFocus();

    const renderList = (item, idx) => (<TaskItem idx={idx} key={idx} item={item} />);
    return (
        <div className="todo-list__container wrapper" id="root" >
            <h1 id="id-group-label">Checklist</h1>

            <InputForm />
            <div className="check-list__container" role="group" aria-labelledby="id-group-label">
                { context.tasks.map(renderList) }
            </div>
        </div>
    );
});

TodoList.displayName = 'TodoList';

export default TodoList;