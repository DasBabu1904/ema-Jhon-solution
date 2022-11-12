import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import '../shop/Shop.css'



const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)

            });
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);
    }, [products])

    const [cart, setCart] = useState([]);

    function addToCart(SelectedProduct) {

        const exist = cart.find(product => product.id === SelectedProduct.id)
        let newCart = [];

        if (!exist) {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== SelectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...cart, exist];
        }

        setCart(newCart)
        addToDb(SelectedProduct.id)
        //console.log(cart);
    }



    return (
        <div className="Main-Section">
            <div className="Shopping-area">
                {
                    products.map(product => <Product product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;