import React from 'react'
// import PropTypes from 'prop-types'
import clx from 'classnames'

const Select = ({
    options = {},
    className,
    ...props
}) => {

    const classes = clx({
        [className]: className,
        'select-input':true
    });

    const optionsList = Object.entries(options).map(([value, label]) => ({ value, label }))
    return (
        <select {...props} className={classes}>
            {optionsList.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}

Select.propTypes = {

}

export default Select
