import React, { useCallback } from 'react';
import { TaskItem } from '../TaskItem';
import { useTodoList } from './hooks';
import { InputForm } from '../InputForm';
import { useFocus } from '../../utils';

const TodoList = React.memo(() => {
    const { onClickHandler, state } = useTodoList('');
    const { tasks = [] } = state;
    useFocus();
    const eventsHandler = useCallback(
        (props) => {
            onClickHandler(props);
        },
        [onClickHandler]
    );

    const renderList = (item, idx) => (
        <TaskItem
            idx={idx}
            key={idx}
            item={item}
            eventsHandler={eventsHandler}
        />
    );

    return (
        <div className="todo-list__container wrapper" id="root">
            <h1 id="id-group-label">Checklist</h1>

            <InputForm />
            <div
                className="check-list__container"
                role="group"
                aria-labelledby="id-group-label"
            >
                {tasks ? tasks.map(renderList) : ':( No Tasks'}
            </div>
        </div>
    );
});

TodoList.displayName = 'TodoList';

export default TodoList;
