import React, { Component } from 'react';
import TasksContext from './tasks-context';


class GlobalState extends Component {
    state = {
        tasks: []
    };

    addTask = task => {
        this.setState({
            tasks: [ 
                ...this.state.tasks,
                { text: task, completed: false }
            ]
        });
    };

    tickText = productId => {
        const computeTasks = this.state.tasks.map((item, idx) => {
            return (
                idx === productId ? { ...item, completed: !item.completed } : item
            );
        });
        this.setState({
            ...this.state,
            tasks: [
                ...computeTasks
            ]
        })
    };

    render() {
        return (
        <TasksContext.Provider
            value={{
                tasks: this.state.tasks,
                addTask: this.addTask,
                tickText: this.tickText
            }}
        >
            {this.props.children}
        </TasksContext.Provider>
        );
    }
}

export default GlobalState;