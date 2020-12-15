import React from 'react';
import { connect } from 'react-redux';

const Country = (props) => {
    const {onLoading, onError, data, errorMsg} = props;

    console.log('Rendu !');
    return (
        <div>
            {onLoading ? (
                <h3>Chargement</h3>
            ) : onError ? (
                <h3>{errorMsg}</h3>
            ) : data && (<>
                <h3>{data.name}</h3>
                <h4>{data.population}</h4>
                <ul>
                    {data.lang.map(l => <li key={l}>{l}</li>)}
                </ul>
            </>)}
        </div>
    )

}

const mapStateToProps = (state) => ({
    onLoading: state.country.onLoading,
    data: state.country.data,
    onError: state.country.onError,
    errorMsg: state.country.errorMsg
});

export default connect(mapStateToProps)(Country);