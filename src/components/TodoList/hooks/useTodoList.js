import {useState, useContext } from 'react';
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
    const [getText, setText] = useState(initValue);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        context.addTask(getText);
        setText("");
    };

    const onChangeHandler = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    return { getText, setText, context, onSubmitHandler, onChangeHandler};
};

useTodoList.displayName = 'useTodoList';
useTodoList.defaultProps = defaultProps;
useTodoList.propTypes = propTypes;

export default useTodoList;