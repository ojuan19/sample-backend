import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return {
    cartItems,
    addItemToCart,
    removeItem,
    updateQuantity,
  };
};

export default useCart;
