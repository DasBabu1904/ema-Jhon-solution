import React from 'react';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Product = (props) => {
    const { product, addToCart } = props;

    return (
        <div className="product">
            <img src={product.img} alt="" />
            <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p>Price:{product.price}</p>
                <p><small>Seller:{product.seller}</small></p>
                <p><small>Rating:{product.ratings}</small></p>
            </div>
            <button onClick={() => { addToCart(product) }} className="Cart-Button">
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} className="Icon-design"></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Product;