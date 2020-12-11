import React from 'react';
import PropTypes from 'prop-types';

const Reset = (props) => {
    const {active, onAction} = props;

    const reset = () => {
        onAction();
    }

    return (
        <div>
            <button onClick={reset} disabled={!active}>Reset</button>
        </div>
    );
}

Reset.propTypes = {
    onAction: PropTypes.func.isRequired,
    active: PropTypes.bool
}

Reset.defaultProps = {
    active: true
}

export default Reset;