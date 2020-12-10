import React from 'react';
import PropTypes from 'prop-types';

import style from './product-table.module.css';

const ProductTableItem = (props) => {
    const {name, price, inPromo} = props;

    let contentPrice;
    if(inPromo) {
        contentPrice = <><span className={style.inPromo}>{price}</span> Promo</>
    }
    else {
        contentPrice = <span>{price}</span>
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{contentPrice}</td>
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