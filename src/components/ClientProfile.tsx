import React, { useState } from 'react';

const ClientProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validateAndContinue = () => {
    const validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!email.includes('@')) validationErrors.email = 'Email is invalid';
    if (!phone.match(/^\d+$/)) validationErrors.phone = 'Phone number is invalid';
    if (!address) validationErrors.address = 'Address is required';
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed to the next step
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Client Profile</h2>
      <form>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="block"/>
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="block"/>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="block"/>
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div>
          <label>Address</label>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="block"/>
          {errors.address && <span>{errors.address}</span>}
        </div>
        <button type="button" onClick={validateAndContinue} className="mt-4">Next</button>
      </form>
    </div>
  );
};

export default ClientProfile;
