import React from 'react';
import { connect } from 'react-redux';


const Action = (props) => {
    const {incr, decr} = props;

    return (
        <div>
            <button onClick={incr}>+1</button>
            <button onClick={decr}>-1</button>
        </div>
    )
}

// Regle d'interaction avec le store
//**********************************/
// Mapping des actions a "dispatch" vers les props du composant
const mapDispatchToProp = (dispatch) => ({
    incr: () => dispatch({type: 'INCR', payload: 1}),
    decr: () => dispatch({type: 'DECR', payload: 1})
})


export default connect(null, mapDispatchToProp)(Action);