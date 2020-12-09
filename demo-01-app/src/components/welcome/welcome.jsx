import React from 'react';
import PropTypes from 'prop-types';

export const Welcome = (props) => {
    const {name} = props;  // =>  const name = props.name;

    return (
        <p className='green'>Hello {name} !</p>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

export default Welcome;


// npm install prop-types 