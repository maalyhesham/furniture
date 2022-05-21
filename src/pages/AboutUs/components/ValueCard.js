import React from 'react'
import { Layouts } from '../../../components'
const { FlexBox } = Layouts

const ValueCard = ({ title, content }) => {
    return (
        <FlexBox column className='value-card'>
            <div className="title-text gray-text padding-v-10 bold-text">{title}</div>
            <div className="value-card-content">{content}</div>
        </FlexBox>
    )
}

export default ValueCard
