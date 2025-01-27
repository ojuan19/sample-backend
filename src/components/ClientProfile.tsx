import React, { useState } from 'react';
import { validateEmail } from '../utils/validation';

const ClientProfile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { email?: string } = {};
    if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email address';
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Profile submitted!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Client Profile</h2>
      <div className="mb-4">
        <label className="block">Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full text-black" />
      </div>
      <div className="mb-4">
        <label className="block">Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full text-black" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block">Address:</label>
        <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="w-full text-black" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ClientProfile;
