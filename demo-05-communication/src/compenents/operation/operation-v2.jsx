import React from 'react';
import PropTypes from 'prop-types';

export const ASC = "ASC";
export const DESC = "DESC";

const Operation = (props) => {
    const {step} = props;
    const {onModify} = props;

    return (
        <div>
            <button onClick={() => onModify(ASC, step)}>+{step}</button>
            <button onClick={() => onModify(DESC, step)}>-{step}</button>
        </div>
    );
}

Operation.propTypes = {
    step: PropTypes.number,
    onModify: PropTypes.func
}

Operation.defaultProps = {
    step: 1,
    onModify: () => {}
}

export default Operation