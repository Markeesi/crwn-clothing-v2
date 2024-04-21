import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
    // if foudn incrment quantity
    if (existingCartItem) {
        return cartItems.map(item =>
            item.id === productToAdd.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }
    // return new arrayy with modified cartItems / new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];

}


export const CartContext = createContext({

    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemCount: 0,
});


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        );
        setCartItemCount(count);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => { 
        setCartItems(addCartItem(cartItems, productToAdd));
    };


    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemCount };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};