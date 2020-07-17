import React, { Fragment } from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <Fragment>
            <input onChange={searchChange} type='search' placeholder='search robots...' className='pa3 ba b--green bg-lightest-blue ma2' />
        </Fragment>
    );
}

export default SearchBox;