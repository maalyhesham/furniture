import React from 'react'
import PropTypes from 'prop-types'
import { FlexBox } from '../../../components/Layouts'
import clx from 'classnames'
import { SharesLinks } from './common'
import { Button } from '../../../components/Buttons'
import { ProgressBar } from '../../../components'


const Project = ({
    t: translate,
    name,
    image,
    raised,
    goal,
    reference,
    className,
    history,
}) => {

    const classes = clx({
        'project-card': true,
        [className]: className
    })

    const projectPreviewStyles = {
        backgroundImage: image && `url(${image})`
    };

    const goToDetails = () => history.push(`/${reference}`)
    const goToDonation = () => history.push(`/${reference}/donate`)

    return (
        <FlexBox column className={classes}>
            <FlexBox className='project-preview' style={projectPreviewStyles} >
                <SharesLinks />
            </FlexBox>
            <FlexBox column flex className='padding-10' spaceBetween>
                <div className="title bold-text gray-text">{name}</div>
                <ProgressBar
                    className='margin-top-20'
                    value={raised}
                    goalValue={goal}
                />
                <FlexBox spaceBetween>
                    <Button onClick={goToDonation} light inverse className='small-text'>
                        shop now
                    </Button>
                    <Button onClick={goToDetails} light className='small-text'>
                        More details
                    </Button>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}

Project.propTypes = {
    name: PropTypes.string,
    targetBudget: PropTypes.number,
    currentBudget: PropTypes.number,
}
Project.defaultProps = {
    name: 'Project Name',
    targetBudget: 1000,
    currentBudget: 0
}

export default Project
