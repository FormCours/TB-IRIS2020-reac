import React from 'react';
import { connect } from 'react-redux';

const CounterDisplay = (props) => {
    const {count} = props;

    return (
        <div>
            <h2>La valeur du compteur est {count}</h2>
        </div>
    )
}

// Regle de mapping du state du Store vers les props du composant
const mapStateToProps = (state) => ({
    count: state.counter.count
})

export default connect(mapStateToProps)(CounterDisplay);