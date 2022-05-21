import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Link = ({ to, children }) => {
    return (
        <a href={to} className='link'>
            {children}
        </a>
    )
}

Link.propTypes = {

}

export default Link
