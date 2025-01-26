import React, { useState } from 'react';

const ClientProfile: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    return form.name && form.email && form.address;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Client Profile</h2>
      <form className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="block w-full border p-2" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="block w-full border p-2" required />
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="block w-full border p-2" required />
        <button type="button" disabled={!validateForm()} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400">Save</button>
      </form>
    </div>
  );
};

export default ClientProfile;
