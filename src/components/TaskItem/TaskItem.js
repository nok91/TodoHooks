import React from 'react';
import PropTypes from 'prop-types';
import { useTaskItem } from './hooks';

const propTypes = {
    item: PropTypes.shape({
        text: PropTypes.string,
        completed: PropTypes.bool
    }),
    idx: PropTypes.number
};
const defaultProps = {
    item: {},
    idx: 0
};

const TaskItem = ({ item, idx }) => {
    const { onClickHandler } = useTaskItem();

    return (
        <div
            className={`task-item ${ item.completed ? 'line-through' : '' }`}
            onClick={(event) => onClickHandler({event, idx})}
            onKeyDown={(event) => onClickHandler({event, idx})}  
            aria-label={item.text}
            tabIndex="0"
            role="checkbox"
            aria-checked={item.completed}
        >
            <input type="checkbox" id={`chk${idx}-label`} tabIndex="-1" aria-hidden="true" />
            <label    
                htmlFor={`chk${idx}-label`}
                tabIndex="-1"
                aria-hidden="true"
            >
                {item.text}
            </label>
        </div>
    );
};

TaskItem.displayName = 'TaskItem';
TaskItem.propTypes = propTypes;
TaskItem.defaultProps = defaultProps;

export default React.memo(TaskItem);