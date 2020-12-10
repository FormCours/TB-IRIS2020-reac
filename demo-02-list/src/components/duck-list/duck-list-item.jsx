import React from 'react';
import PropTypes from 'prop-types';

const DuckListItem = (props) => {
    const {firstname, lastname} = props;

    return (
        <li>
            <h3>{firstname}</h3>
            <h4>{lastname.toUpperCase()}</h4>
        </li>
    )
}

DuckListItem.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default DuckListItem;