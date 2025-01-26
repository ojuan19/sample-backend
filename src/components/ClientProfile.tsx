import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext } from '../context/CheckoutContext';

const ClientProfile: React.FC = () => {
  const navigate = useNavigate();
  const { setProfile } = useContext(CheckoutContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({ name, email, address });
    navigate('/shipping');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Client Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Address" className="input-field" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Continue to Shipping
        </button>
      </form>
    </div>
  );
};

export default ClientProfile;
