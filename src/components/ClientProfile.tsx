import React, { useState } from 'react';

const ClientProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    // Basic validation
    return formData.name !== '' && formData.email.includes('@');
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">Client Profile</h2>
      <input 
        name="name"
        type="text" 
        placeholder="Name" 
        className="p-2 w-full mb-2 bg-gray-700"
        onChange={handleChange} 
      />
      <input 
        name="email"
        type="email" 
        placeholder="Email" 
        className="p-2 w-full mb-2 bg-gray-700"
        onChange={handleChange} 
      />
      <input 
        name="phone"
        type="tel" 
        placeholder="Phone" 
        className="p-2 w-full mb-2 bg-gray-700"
        onChange={handleChange} 
      />
      <input 
        name="address"
        type="text" 
        placeholder="Address" 
        className="p-2 w-full mb-2 bg-gray-700"
        onChange={handleChange} 
      />
      {!validate() && <div className="text-red-600">Please fill out all fields correctly.</div>}
    </div>
  );
};

export default ClientProfile;
