import React, { createContext, useContext, ReactNode } from 'react';
import useCart from '../hooks/useCart';

interface CartContextProps {
  children: ReactNode;
}

const CartContext = createContext<any>(null);

export const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const cart = useCart();
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
