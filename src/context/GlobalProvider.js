import React, { useReducer } from 'react';
import useAsyncReducer from '../utils/hooks/useAsyncReducer/useAsyncReducer';
import { globalReducer, initialState } from './GlobalReducer';

export const GlobalContext = React.createContext({});

function GlobalProvider({ children }) {
    const [state, dispatch] = useAsyncReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
