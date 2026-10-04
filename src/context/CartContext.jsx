import { createContext, useContext, useMemo, useState } from "react";
import { initialProducts } from "../data/product";

import { Bounce, ToastContainer, toast } from 'react-toastify';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const products = initialProducts


    //Add Item into the Cart
    const addToCart = (product) => {

        toast.success('Item Added to Cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });



        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })
    }


    // Remove item from Cart
    const removeFromCart = (productId, removeAll = false) => {

        toast.error('Item Remove from cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === productId);

            if (!existingItem) return prevCart;

            if (removeAll || existingItem.quantity === 1) {
                return prevCart.filter((item) => item.id !== productId);

            } else {
                return prevCart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        })

    }


    //clear cart
    const clearCart = () => setCart([]);

    const cartCount = useMemo(
        () => cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    const cartTotal = useMemo(
        () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
        [cart]
    );

    return (
        <>
            <CartContext.Provider value={{ products, addToCart, removeFromCart, cartCount, cartTotal, clearCart, cart }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider
export const useCart = () => useContext(CartContext);
