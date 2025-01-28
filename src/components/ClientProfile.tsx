import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const ClientProfile: React.FC = () => {
  const { profile, updateProfile } = useContext(UserContext);
  const [name, setName] = useState(profile.name);
  const [address, setAddress] = useState(profile.address);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, address, email, phone });
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Client Profile</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="block w-full mb-2 p-2 border" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="block w-full mb-2 p-2 border" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full mb-2 p-2 border" />
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="block w-full mb-2 p-2 border" />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Update</button>
    </form>
  );
};

export default ClientProfile;