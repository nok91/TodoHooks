import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const UseFocus = (props) => {
    const config = {
        el: document.querySelector('body'),
        className: "focusStylesOn"
    };

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
    }

    const keyDownHandler = (event) => {
        if (event.keyCode === 9) {
            toggleClass(false);
        }
    }

    const toggleClass = (status) => {
        if(status) {
            config.el.classList.remove(config.className);
        } else {
            config.el.classList.add(config.className);
        }
    }
};

UseFocus.displayName = 'UseFocus';
UseFocus.propTypes = propTypes;
UseFocus.defaultProps = defaultProps;

export default UseFocus;