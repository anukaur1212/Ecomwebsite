import { useState } from "react";

export const useCartAdd = ({cart,setCart}) => {

 const CartAdded = (product) => {
        setCart(prev => {
            const safeCart = prev.filter(item => item != null);
            if (safeCart.some(item => item.id === product.id)) {
                return safeCart;
            }

            const updatedCart = [...safeCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    return { cart,CartAdded };

}

export default useCartAdd
