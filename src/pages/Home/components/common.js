import React from 'react'
import { MdFavoriteBorder, MdBookmarkBorder} from 'react-icons/md'
import {  FiShare2 } from 'react-icons/fi'
import { FlexBox  } from '../../../components/Layouts'
import clx from 'classnames'

export const SharesLinks = ({className , ...props}) => {

    const classes = clx({
        [className]:className
    })
    return (
        <FlexBox {...props} className={classes}>
            <MdFavoriteBorder className='lightgray-color local-icon' />
            <MdBookmarkBorder className='lightgray-color local-icon' />
            <FiShare2 className='lightgray-color local-icon' />
        </FlexBox>
    )
}