import React from 'react';

export default React.createContext({
    tasks: [],
    addTask: task => {},
    tickText: id => {}
});
