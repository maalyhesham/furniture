import React from 'react'
import { FlexBox } from '../Layouts'
import { Link } from "react-router-dom";

import './style.css'

const Footer = props => {
    return (
        <FlexBox
            spaceBetween
            wrappable
            center='v-center'
            className='footer white-text'
        >
            <FlexBox column flex>
                <span>
                    2022 ©Furniture company
                </span>
                <span>
                    00970 000000
                </span>
            </FlexBox>
            <FlexBox>
                <Link to='/about' className='link white-text'>
                    About us
                </Link>
                <a href='mail' className='link white-text'>
                    contact
                </a>
            </FlexBox>
        </FlexBox>
    )
}

Footer.propTypes = {

}

export default Footer
