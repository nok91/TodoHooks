import { useContext } from 'react';
import PropTypes from 'prop-types';
import TodoListContext from '../../../context/tasks-context';

const propTypes = {
    initValue: PropTypes.string
};
const defaultProps = {
    initValue: ''
};

const useTodoList = (initValue) => {
    const context = useContext(TodoListContext);
    return { context };
};

useTodoList.displayName = 'useTodoList';
useTodoList.defaultProps = defaultProps;
useTodoList.propTypes = propTypes;

export default useTodoList;