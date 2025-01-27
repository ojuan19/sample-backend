import React, { createContext, useState } from 'react';

export const CartContext = createContext<any>(null);

export const CartProvider = ({children}: any) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 9.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2 }
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => item.id === id ? {...item, quantity: Math.max(0, quantity)} : item)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
