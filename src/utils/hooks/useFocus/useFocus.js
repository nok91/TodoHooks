import { useEffect } from 'react';
import Proptypes from 'prop-types';

const propTypes = {
    el: Proptypes.element,
    className: Proptypes
};
const defaultProps = {
    el: document.querySelector('body'),
    className: 'focusStylesOn'
};

const useFocus = () => {
    useEffect(() => {
        window.addEventListener('mousedown', keyMouseDown);
        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('mousedown', keyMouseDown);
            window.removeEventListener('keydown', keyDownHandler);
        };
    });

    const keyMouseDown = () => {
        toggleClass(true);
    };

    const keyDownHandler = (event) => {
        if (event.keyCode === 9) {
            toggleClass(false);
        }
    };

    const toggleClass = (status) => {
        if (status) {
            defaultProps.el.classList.remove(defaultProps.className);
        } else {
            defaultProps.el.classList.add(defaultProps.className);
        }
    };
};

useFocus.displayName = 'useFocus';
useFocus.propTypes = propTypes;
useFocus.defaultProps = defaultProps;

export default useFocus;
