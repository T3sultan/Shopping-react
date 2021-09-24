import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    // console.log(cart)
    let totalQuntity = 0;


    //reduce
    // const total = cart.reduce((previous, product) => previous + product.price, 0)

    // totalQuntity = totalQuntity + product.quantity;

    let total = 0;
    for (const product of cart) {
        // console.log(product)
        // product.quantity = !product.quantity ? 1 : product.quantity
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuntity = totalQuntity + product.quantity;
    }


    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax


    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered:{totalQuntity}</h5>

            <br />
            <p>Total={total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;