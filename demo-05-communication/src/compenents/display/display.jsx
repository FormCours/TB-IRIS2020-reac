import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
    const {blob} = props;

    return (
        <p>La valeur du compteur {blob}</p>
    );
}

Display.propTypes = {
    blob: PropTypes.number.isRequired
}

export default Display;