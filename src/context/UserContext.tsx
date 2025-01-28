import React, { createContext, useState } from 'react';

interface UserProfile {
  name: string;
  address: string;
  email: string;
  phone: string;
}

interface UserContextType {
  profile: UserProfile;
  updateProfile: (profile: UserProfile) => void;
  shipping: string;
  updateShipping: (method: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [shipping, setShipping] = useState<string>('standard');

  const updateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  const updateShipping = (method: string) => {
    setShipping(method);
  };

  return (
    <UserContext.Provider value={{ profile, updateProfile, shipping, updateShipping }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };