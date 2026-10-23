import React from 'react'

export const finalPayment = ({cart,setCart,quantity,setQuantity}) => {

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * (quantity[item.id] || 1),
        0
    );

    const totalQuantity = cart.reduce(
        (sum, item) => sum + (quantity[item.id] || 1),
        0
    );

    const shipping = totalPrice * 0.10;
    const grandTotal = totalPrice + shipping;

    return({totalPrice,totalQuantity,shipping,grandTotal});

}
