import React, { useRef } from 'react';
import { useInputForm } from './hooks';

const InputForm = () => {
    const inputRef = useRef();
    const { onSubmitHandler, onChangeHandler, getText } = useInputForm('');

    return (
        <div className="input-form__container">
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    ref={inputRef}
                    value={getText}
                    onChange={onChangeHandler}
                    autoComplete="off"
                    aria-label="Add Task"
                    title="Add Task"
                    maxLength="2048"
                    aria-autocomplete="both"
                />
            </form>
        </div>
    );
};

InputForm.displayName = 'InputForm';

export default InputForm;
