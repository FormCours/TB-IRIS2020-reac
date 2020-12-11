import React from 'react';
import PropTypes from 'prop-types';

export const ASC = "ASC";
export const DESC = "DESC";

const Operation = (props) => {
    const {step} = props;
    const {onModify} = props;

    const increment = () => {
        onModify(ASC, step);
    }
    const decrement = () => {
        onModify(DESC, step);
    }

    return (
        <div>
            <button onClick={increment}>+{step}</button>
            <button onClick={decrement}>-{step}</button>
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