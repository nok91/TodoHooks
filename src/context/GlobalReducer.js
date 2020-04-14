export const initialState = {
    tasks: []
};

export function globalReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK': {
            return {
                ...state,
                tasks: [...state.tasks, { text: action.task, completed: false }]
            };
        }
        case 'TICK_TEXT': {
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
