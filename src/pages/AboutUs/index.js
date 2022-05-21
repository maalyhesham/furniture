import React, { useState, useEffect } from 'react'
import sampleProjects from '../../data/projects'
import { getSearchQuery, navigateBetweenImages } from '../../utils/helpers'
import { Footer, Layouts, Header, } from '../../components'
import { ValueCard } from './components'
import './style.css'

const { Page, FlexBox } = Layouts

const images = [
    'https://i.imgur.com/9B8W4qm.png',
    'https://i.imgur.com/9B8W4qm.png',
    'https://i.imgur.com/9B8W4qm.png',
]


const valuesTranslations = [
    {
        "title": "Our Impact",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
    },
    {
        "title": "Our Impact",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
    },
    {
        "title": "Our Impact",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
    },
    {
        "title": "Our Impact",
        "content": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
    }
]

const Home = ({ projects, ...props }) => {
    const [coverImage, setImage] = useState(images[0]);
    const activeCategory = getSearchQuery('category', props.location.search)

    useEffect(() => {
        return navigateBetweenImages(images).in((img) => { setImage(img) })
    }, [activeCategory])



    return (
        <Page className='about-page' >
            <FlexBox column className='about-cover' style={{ backgroundImage: `url(${coverImage})` }}>
                <Header {...props} />
                <FlexBox center='v-center' column className='about-us-message'>
                    <p>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                </FlexBox>
            </FlexBox>
            <FlexBox column center='h-center' className='values-and-principles'>
                <div className="larger-text gray-text about-title-text">
                    Section Material
                </div>
                <FlexBox wrappable className='projects-list'>
                    {valuesTranslations.map(value => (
                        <ValueCard
                            {...value}
                        />
                    ))}
                </FlexBox>
            </FlexBox>
            <Footer />
        </Page>
    )
}

Home.defaultProps = { projects: sampleProjects }

export default Home
