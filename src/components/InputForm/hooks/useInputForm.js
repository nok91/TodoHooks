import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TodoListContext from '../../../context/tasks-context';

const propTypes = {
    initValue: PropTypes.string
};
const defaultProps = {
    initValue: ''
};

const useInputForm = (initValue) => {
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

    return { onSubmitHandler, onChangeHandler, getText };
};

useInputForm.displayName = 'useInputForm';
useInputForm.propTypes = propTypes;
useInputForm.defaultProps = defaultProps;

export default useInputForm;