import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../context/GlobalProvider';
import { addTask } from '../../../firebase/firebase';

const propTypes = {
    initValue: PropTypes.string
};
const defaultProps = {
    initValue: ''
};

const useInputForm = (initValue) => {
    const { dispatch } = useContext(GlobalContext);
    const [getText, setText] = useState(initValue);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addTask({
            task: getText,
            roomId: '282543',
            completed: false,
            userId: 'ujUrOjDcV16F'
        });

        // dispatch({
        //     type: 'ADD_TASK',
        //     task: getText
        // });
        setText('');
    };

    const onChangeHandler = (e) => {
        e.preventDefault();
        setText(e.target.value);
    };

    return { onSubmitHandler, onChangeHandler, getText };
};

useInputForm.displayName = 'useInputForm';
useInputForm.propTypes = propTypes;
useInputForm.defaultProps = defaultProps;

export default useInputForm;
