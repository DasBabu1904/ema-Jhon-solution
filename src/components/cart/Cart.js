import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart
    console.log(cart);
    let totalPrice = 0;
    let Shipping = 0;
    let quant = 0;
    for (const product of cart) {
        totalPrice += (product.price) * (product.quantity);
        Shipping += product.shipping;
        quant += product.quantity;
    }
    let Tax = parseFloat((totalPrice * 0.1).toFixed(2));
    // console.log(totalPrice, Shipping);
    return (
        <div className="Cart-Area">
            <div className="Sticky-Component">
                <h2 className="Cart-Header">Order Summary</h2>
                <p className="Cart-detail">
                    <p>cart items: {quant}</p>
                    <p>Total Price:{totalPrice} </p>
                    <p>Total Tax: {Tax}</p>
                    <p>Total Shipping Charge: {Shipping}</p>
                    <h3>Grand Total: {totalPrice + Shipping + Tax}</h3>

                </p>
                < div className="Button-area">
                    <button className="Cart-area-Button">Clear Cart</button>
                    <br />
                    <button className="Cart-area-Button">Review Order</button>
                </div>
            </div>
        </div >
    );
};

export default Cart;