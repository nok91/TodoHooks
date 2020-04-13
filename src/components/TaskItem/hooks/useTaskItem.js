import { useContext, useCallback } from 'react';
import TodoListContext from '../../../context/tasks-context';

const defaultProps = {};

const useTaskItem = () => {
    const context = useContext(TodoListContext);
    const tickText = context.tickText;

    const onClickHandler = useCallback(({event, idx}) => {
        const { keyCode = true } = event;
        if (keyCode === true || keyCode === 13) {
            tickText(idx);
        }
    }, [tickText])

    return {
        context,
        onClickHandler
    };
};

useTaskItem.displayName = 'useTaskItem';
useTaskItem.defaultProps = defaultProps;

export default useTaskItem;