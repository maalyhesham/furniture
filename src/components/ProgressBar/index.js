import React from 'react'
// import PropTypes from 'prop-types'
import { FlexBox } from '../Layouts'
import clx from 'classnames'
import numeral from 'numeral';
import './style.css'

const ProgressBar = ({
    className,
    value,
    goalValue,
    children,
    ...props
}) => {


    const classNames = clx({
        'progress-bar': true,
        [className]: className,
    });

    const percent = Math.floor((value / goalValue) * 100)

    return (
        <div
            className={`progress-bar ${classNames}`}
            data-value={numeral(goalValue).format('0,0')}
        >
            <FlexBox
                className={'progress-value'}
                data-value={`${percent}%`}
                style={{
                    width: `${percent}%`,
                }}
                flexEnd
            >
                <span className='tiny-text white-text margin-h-5 overflow-hidden'>
                    {numeral(value).format('0,0')}
                </span>
            </FlexBox>
        </div>
    )
}

ProgressBar.propTypes = {

}

export default ProgressBar

export const SlimProgress = ({ min, max , className }) => {
    const classNames = clx({
        'progress-bar slim': true,
        [className]: className,
    });
    const percent = Math.floor((min / max) * 100)

    return (
        <div
            className={`progress-bar ${classNames}`}
        >
            <FlexBox
                className={'progress-value'}
                style={{
                    width: `${percent}%`,
                }}
                flexEnd
            />
        </div>
    )
}