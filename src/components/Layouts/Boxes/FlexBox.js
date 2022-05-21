import React from 'react'
import clx from 'classnames'


const FlexBox = ({
    className,
    column,
    spaceBetween,
    wrappable,
    flex,
    center,
    flexEnd,
    flexStart,
    baseline,
    children,
    overflow,
    elementRef,
    ...props
}) => {
    const classes = clx({
        [className]: true,
        [center]: center,
        column,
        spaceBetween,
        wrappable,
        flex,
        baseline,
        flexEnd,
        [`overflow-${overflow}`]: overflow,
        flexStart
    });

    return (
        <div
            className={`flex-box ${classes}`}
            ref={elementRef}
            {...props}
        >
            {children}
        </div>
    );
};

export default FlexBox 