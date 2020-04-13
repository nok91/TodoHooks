import { useContext } from 'react';

import TodoListContext from '../../../context/tasks-context';

const defaultProps = {};

const useTaskItem = () => {
    const context = useContext(TodoListContext);
    const onClickHandler = ({event, idx}) => {
        const { keyCode } = event;
        if (keyCode === true || keyCode === 13) {
            context.tickText(idx)
        }

    };

    return {
        context,
        onClickHandler
    };
};

useTaskItem.displayName = 'useTaskItem';
useTaskItem.defaultProps = defaultProps;

export default useTaskItem;