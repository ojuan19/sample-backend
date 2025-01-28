import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};