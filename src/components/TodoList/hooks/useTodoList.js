import { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../context/GlobalProvider';

const propTypes = {
    initValue: PropTypes.string
};
const defaultProps = {
    initValue: ''
};

const useTodoList = (initValue) => {
    const { state, dispatch } = useContext(GlobalContext);

    const onClickHandler = useCallback(
        ({ event, idx }) => {
            if (event.detail || event.key === 13) {
                console.log('onClickHandler =>');

                dispatch({
                    type: 'TICK_TEXT',
                    id: idx
                });
            }
        },
        [dispatch]
    );

    const getTasks = async () => {
        await dispatch({
            type: 'GET_TASKS'
        });
    };

    return {
        onClickHandler,
        getTasks,
        state
    };
};

useTodoList.displayName = 'useTodoList';
useTodoList.defaultProps = defaultProps;
useTodoList.propTypes = propTypes;

export default useTodoList;
