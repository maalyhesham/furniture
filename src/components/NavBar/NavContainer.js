import React from 'react'
import { FlexBox } from '../Layouts'
import clx from 'classnames'

const NavContainer = ({
    themeColor,
    className,
    children,
    ...props
}) => {
    const classes = clx({
        'nav-container': true,
        [className]: className,
    })
    const customStyle = {
        backgroundColor: themeColor,
    }

    return (
        <FlexBox
            center='v-center'
            style={customStyle}
            {...props}
            className={classes}
        >
            {children}
        </FlexBox>
    )
}

NavContainer.propTypes = {

}

export default NavContainer
