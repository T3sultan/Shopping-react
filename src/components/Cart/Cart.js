import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;


    //reduce
    const total = cart.reduce((previous, product) => previous + product.price, 0)


    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price
    // }


    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax


    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered:{props.cart.length}</h5>
            <br />
            <p>Total={total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;