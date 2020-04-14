import React, { useReducer } from 'react';
import { globalReducer, initialState } from './GlobalReducer';

export const GlobalContext = React.createContext({});

function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
