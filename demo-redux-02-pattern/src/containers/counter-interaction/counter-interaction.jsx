import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../store/actions/counter-action';

const CounterInteraction = (props) => {
    const {step} = props;
    const {incrementCounter, decrementCounter} = props;

    const decrement = () => {
        decrementCounter(step);
    }

    return (
        <div>
            <button onClick={() => incrementCounter(step)}> +{step} </button>
            <button onClick={decrement}> -{step} </button>
        </div>
    )
}

CounterInteraction.defaultProps = {
    step: 1
}

CounterInteraction.propTypes = {
    step: PropTypes.number
}

// Regle de mapping des actions a "Dispatch" au store vers les props du composant
const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter
}

export default connect(null, mapDispatchToProps)(CounterInteraction);