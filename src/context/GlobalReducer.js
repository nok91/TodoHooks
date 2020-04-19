import { addTask, getTasks, updateTask } from '../firebase/firebase';

export const initialState = {
    tasks: []
};

export async function globalReducer(state, action) {
    switch (action.type) {
        case 'GET_TASKS': {
            const tasks = await getTasks();
            console.log('GET_TASKS ', tasks);
            return { tasks: action.payload };
        }
        case 'ADD_TASK': {
            await addTask(action.payload);
            const tasks = await getTasks();
            return { tasks };
        }
        case 'TICK_TEXT': {
            // updateTask
            console.log('TICK_TEXT => INIT', action.id);
            // const el = await updateTask(action.id);
            // const allTasks = el.docs.map((task) => ({
            //     ...task.data(),
            //     taskId: task.id
            // }));
            const computeTasks = state.tasks.map((item, idx) => {
                return idx === action.idx
                    ? { ...item, completed: !item.completed }
                    : item;
            });
            return {
                ...state,
                tasks: [...computeTasks]
            };
        }
        default:
            return state;
    }
}
