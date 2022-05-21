import React from 'react'
// import PropTypes from 'prop-types'
import { TextField } from '../../../components/Inputs'
import { FlexBox } from '../../../components/Layouts'
import { IoIosSearch } from 'react-icons/io'

const SearchBox = ({ onFilter, searchKey, ...props }) => {
    return (
        <FlexBox center='v-center h-center' className='search-box' >
            <TextField
                className='full-width margin-h-10 margin-v-10 transparent-bg'
                name='customer.email'
                onChange={({ target }) => onFilter(target.value)}
                prefix={(
                    <IoIosSearch className='white-text' />
                )}
                placeholder='Search'
                value={searchKey}
            />
        </FlexBox>
    )
}

SearchBox.propTypes = {

}

export default SearchBox
