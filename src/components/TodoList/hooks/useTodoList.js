import { useContext, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../context/GlobalProvider';
import { onSnapshotTasks } from '../../../firebase/firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

const propTypes = {
    initValue: PropTypes.string
};
const defaultProps = {
    initValue: ''
};

const useTodoList = (initValue) => {
    const { state, dispatch } = useContext(GlobalContext);


    // const getTasks = useCallback(async () => {
    //     await dispatch({
    //         type: 'GET_TASKS'
    //     });
    // }, [dispatch]);
    
    // useEffect(() => {
    //     getTasks();
    // }, []);

    useEffect(() => {
        // onSnapshotTasks().then(tasks => {
        //     dispatch({
        //         type: 'GET_TASKS',
        //         payload: tasks
        //     })
        // });
        const db = firebase.firestore();
        db.collection('tasks').onSnapshot((snapshot) => {
            const tasksData = [];
            snapshot.forEach( doc => tasksData.push(({ ...doc.data(), id: doc.id })));
            console.log('GET_TASKS ', tasksData);

            dispatch({
                type: 'GET_TASKS',
                payload: tasksData
            });
        });

        // return unsubscribe();
    }, []);

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


    return {
        onClickHandler,
        dispatch,
        state
    };
};

useTodoList.displayName = 'useTodoList';
useTodoList.defaultProps = defaultProps;
useTodoList.propTypes = propTypes;

export default useTodoList;
