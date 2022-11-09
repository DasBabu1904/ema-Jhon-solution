import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import '../shop/Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])



    const [cart, setCart] = useState([]);

    function addToCart(product) {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
        console.log(cart);
    }
    return (
        <div className="Main-Section">
            <div className="Shopping-area">
                {
                    products.map(product => <Product product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="Cart-Area">
                <h1>Cart area{cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;