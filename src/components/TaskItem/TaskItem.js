import React from 'react';
import PropTypes from 'prop-types';
import { useCountRenders } from '../../utils';

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

const TaskItem = React.memo(({ item, idx, eventsHandler }) => {
    return (
        <div
            className={`task-item ${ item.completed ? ' line-through ' : '' }`}
            onClick={(event) => eventsHandler({ event, idx })}
            onKeyDown={(event) => eventsHandler({ event, idx })}  
            aria-label={item.text}
            tabIndex="0"
            role="checkbox"
            aria-checked={item.completed}
            id={`chk${idx}-label`}
        >
            <input type="checkbox" tabIndex="-1" aria-hidden="true" />
            <label    
                htmlFor={`chk${idx}-label`}
                tabIndex="-1"
                aria-hidden="true"
            >
                {item.text}
            </label>
        </div>
    );
});

TaskItem.displayName = 'TaskItem';
TaskItem.propTypes = propTypes;
TaskItem.defaultProps = defaultProps;

export default React.memo(TaskItem);