import React from 'react';
import PropTypes from 'prop-types';
import ProductTableItem from './product-table-item';

import style from './product-table.module.css';

const ProductTable = (props) => {
    const {className, products} = props;

    const productsJSX = products.map(
        product => <ProductTableItem key={product.id} {...product} />
    )

    return (
        <table className={`${className} ${style.products}`}>
            <tbody>
                {productsJSX}
            </tbody>
        </table>
    )
}

ProductTable.defaultProps =  {
    className: '',
    products : []
}

ProductTable.propTypes = {
    className: PropTypes.string,
    products: PropTypes.array
}

export default ProductTable;