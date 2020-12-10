import React from 'react';
import PropTypes from 'prop-types';

import style from './product-table.module.css';

const ProductTableItem = (props) => {
    const {name, price, inPromo} = props;

    const priceStyle = inPromo ? style.inPromo : '';

    return (
        <tr>
            <td>{name}</td>
            <td><span className={priceStyle}>{price}</span> {inPromo && 'Promo'}</td>
        </tr>
    )
}

ProductTableItem.defaultProps = {
    inPromo: false
}

ProductTableItem.propTypes = {
    name : PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inPromo: PropTypes.bool
}

export default ProductTableItem;