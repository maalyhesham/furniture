import React from 'react'
import PropTypes from 'prop-types'
import clx from 'classnames'

import './style.css'

const Image = ({
    alt,
    src,
    className
}) => {

    const classNames = clx({
        [className]: className,
        'image-element': true,
    })
    return (
        <img
            src={src}
            alt={alt}
            className={classNames}
        />
    )
}

Image.propTypes = {
    className : PropTypes.string,
    alt : PropTypes.string,
}
Image.defaultProps = {
    className: 'default-image-class',
    alt : 'can\'t load the image'
}

export default Image
