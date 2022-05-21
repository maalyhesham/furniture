import React from 'react';
import clx from 'classnames';

import './style.css';

export const Button = ({
    className = '',
    children,
    onprogress,
    circle,
    active,
    light,
    inverse,
    disabled,
    onHoverProps = {},
    ...props
}) => {


    const classNames = clx({
        'btn': true,
        [className]: className,
        'btn-disabled': disabled,
        'spinner': onprogress,
        circle,
        light,
        inverse,
        active
    });

    const onClick = (e) => {
        if (!disabled && typeof props.onClick === 'function')
            props.onClick(e)
    }
    return (
        <button
            onClick={onClick}
            {...props}
            className={classNames}
        >
            {children}
        </button>
    );
};

export { default as Select } from './select'