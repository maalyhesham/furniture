import React from 'react'
// import PropTypes from 'prop-types'
import clx from 'classnames'

const NavLink = ({
    id,
    className,
    children,
    activeCategory,
    ...props
}) => {
    const classes = clx({
        'nav-link': true,
        [className]: className,
         active : activeCategory === id
    })
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    )
}

NavLink.propTypes = {

}

export default NavLink
