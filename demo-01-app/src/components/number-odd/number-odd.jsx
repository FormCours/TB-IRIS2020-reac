import React from 'react';
import PropTypes from 'prop-types';

import style from './number-odd.module.css';

const NumberOdd = (props) => {
    const {nb} = props;
    const isOdd = nb % 2 !== 0;

    return (
        <p className={style.green} >Le nombre {nb} est {isOdd ? 'impair' : 'pair'}</p>
    );
}

NumberOdd.propTypes = {
    nb: PropTypes.number
}

NumberOdd.defaultProps = {
    nb: 42
}

export default NumberOdd;