import React from 'react';
import PropTypes from 'prop-types';
import DuckListItem from './duck-list-item';


const DuckList = (props) => {

    // const ducksJSX = props.ducks.map(
    //     d => <DuckListItem key={d.id} firstname={d.firstname} lastname={d.lastname} />
    // )

    const ducksJSX = props.ducks.map(
        duck => <DuckListItem key={duck.id} {...duck} />
    )

    return (
        <ul>{ducksJSX}</ul>
    )
}

DuckList.defaultProps = {
    ducks: []
}

DuckList.propTypes = {
    ducks: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    }))
}

export default DuckList;