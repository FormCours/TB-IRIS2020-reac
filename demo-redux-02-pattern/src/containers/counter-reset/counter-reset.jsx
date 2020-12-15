import React from 'react';
import { connect } from 'react-redux';
import { resetCounter } from '../../store/actions/counter-action';

const CounterReset = (props) => {
    const {isReset} = props;
    const {resetCounter} = props;
    
    return (
        <div>
            <button onClick={() => resetCounter()} disabled={isReset}>Reset</button>
        </div>
    );
}

// Regle de mapping: Lecture du store
const mapStateToProps = (state) => ({
    isReset : state.counter.resetValue === state.counter.count
})

// Regle de mapping: Envoie des actions
const mapDispatchToProps = {
    resetCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterReset);