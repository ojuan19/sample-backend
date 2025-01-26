import React, { createContext, useState } from 'react';

type CheckoutContextType = {
  items: { id: number; name: string; price: number; quantity: number; }[];
  setProfile: (profile: { name: string; email: string; address: string }) => void;
  setShipping: (method: string) => void;
  finalizePurchase: () => void;
};

export const CheckoutContext = createContext<CheckoutContextType | null>(null);

export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items] = useState([
    { id: 1, name: "Item A", price: 10, quantity: 1 },
    { id: 2, name: "Item B", price: 20, quantity: 2 }
  ]);

  const setProfile = (profile: { name: string; email: string; address: string }) => {
    console.log("Profile Set:", profile);
  };

  const setShipping = (method: string) => {
    console.log("Shipping Method Set:", method);
  };

  const finalizePurchase = () => {
    console.log("Purchase Finalized.");
  };

  return (
    <CheckoutContext.Provider value={{ items, setProfile, setShipping, finalizePurchase }}>
      {children}
    </CheckoutContext.Provider>
  );
};
