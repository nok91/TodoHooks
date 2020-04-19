import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../context/GlobalProvider';

const propTypes = {
    initValue: PropTypes.string
};
const defaultProps = {
    initValue: ''
};

const useInputForm = (initValue) => {
    const { dispatch } = useContext(GlobalContext);
    const [getInputText, setInputText] = useState(initValue);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TASK',
            payload: {
                userId: 'ujUrOjDcV16F',
                roomId: '282543',
                task: getInputText,
                completed: false
            }
        });
        setInputText('');
    };

    const onChangeHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    };

    return { onSubmitHandler, onChangeHandler, getInputText };
};

useInputForm.displayName = 'useInputForm';
useInputForm.propTypes = propTypes;
useInputForm.defaultProps = defaultProps;

export default useInputForm;
