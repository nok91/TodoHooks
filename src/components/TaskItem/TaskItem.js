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
            key={idx}
            style={{
                textDecoration: item.completed ? "line-through" : ""
            }}
            onClick={() => onClickHandler(idx)}
        >
            {item.text}
        </div>
    );
};

TaskItem.displayName = 'TaskItem';
TaskItem.propTypes = propTypes;
TaskItem.defaultProps = defaultProps;

export default React.memo(TaskItem);