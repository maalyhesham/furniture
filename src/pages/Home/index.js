import React, { useState, useEffect } from 'react'
import sampleProjects from '../../data/projects'
import { getSearchQuery, navigateBetweenImages } from '../../utils/helpers'
import {
    Footer,
    Layouts,
    Header,
} from '../../components'

import { Project, SearchBox } from './components'
import './style.css'

const {
    Page,
    FlexBox
} = Layouts

const images = [
    'https://i.imgur.com/9B8W4qm.png',
    'https://i.imgur.com/9B8W4qm.png',
    'https://i.imgur.com/8M6z6Ks.jpg'
]
const filterProjects = (projects = [], category, searchKey = '') => {

    const withCategory = category && typeof category === 'string'
    return projects
        .filter(project => withCategory ? (project.category === category) : true)
        .filter(project => {
            if (!searchKey || !searchKey.trim())
                return true;

            const content = (`${project.name} ${project.description}`).toLowerCase()

            return content.includes(searchKey.toLowerCase())
        })
}


const Home = ({ projects, ...props }) => {

    const [coverImage, setImage] = useState(images[0]);
    const [searchKey, setSearchKey] = useState();

    const activeCategory = getSearchQuery('category', props.location.search)
    const filteredProjects = filterProjects(projects, activeCategory, searchKey)


    const projectsCards = filteredProjects.map(project =>
    (<Project
        key={project.id}
        {...project}
        history={props.history}
    />)
    )

    useEffect(() => {
        setSearchKey()
        return navigateBetweenImages(images)
            .in((img) => {
                setImage(img)
            })
    }, [activeCategory])

    const onSearch = (key) => {
        setSearchKey(key)
    }
    return (
        <Page className='home-page' >
            <FlexBox column className='home-cover' style={{ backgroundImage: `url(${coverImage})` }}>
                <Header {...props} />
                <FlexBox center='v-center' column flexEnd flex>
                    <SearchBox onFilter={onSearch} searchKey={searchKey} />
                </FlexBox>
            </FlexBox>
            <FlexBox center='h-center' flex>
                <FlexBox wrappable className='projects-list'>
                    {projectsCards}
                    {!projectsCards.length && (
                        <FlexBox center='h-center' className='gray-text large-text padding-20'>

                        </FlexBox>
                    )}
                </FlexBox>
            </FlexBox>
            <Footer />
        </Page>
    )
}

Home.defaultProps = {
    projects: sampleProjects
}

export default Home
