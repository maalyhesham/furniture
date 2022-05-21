import React, { useState } from 'react'
import { NavContainer, NavLink } from '../NavBar'
import { FlexBox } from '../Layouts'
import Image from '../Image'
import brandImage from '../../assets/images/logo.png'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import clx from 'classnames'
import './style.css'

const Header = ({
    t,
    history,
    themeColors = {},
    ...props
}) => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const activePage = props.location.pathname



    const navigateTo = path => {
        if (path)
            history.push(path)
    }

    const onNavigate = page => () => {
        navigateTo(`/${page}`)
    }

    const onToggleMobileMenu = () => {
        setOpenMobileMenu(open => !open)
    }

    const menuClasses = clx({
        open: openMobileMenu,
        'nav-menu': true
    })
    const navStyles = {
        backgroundColor: themeColors.color,
        color: themeColors.oppositeColor
    }
    return (
        <NavContainer style={navStyles} >
            <FlexBox flex className='mobile-menu-button' >
                <FiMenu onClick={onToggleMobileMenu} />
            </FlexBox>
            <FlexBox flex className={menuClasses} >
                <IoMdClose onClick={onToggleMobileMenu} className='menu-close-btn' />
                <NavLink
                    id='/home'
                    onClick={onNavigate('home')}
                    activeCategory={activePage}
                >
                    Home
                </NavLink>
                <NavLink
                    id='/about'
                    onClick={onNavigate('about')}
                    activeCategory={activePage}
                >
                    About
                </NavLink>
            </FlexBox>
            <FlexBox center='v-center'>
                <Image src={brandImage} className='organization-logo' />
            </FlexBox>
        </NavContainer>
    )
}

Header.propTypes = {

}

export default Header
