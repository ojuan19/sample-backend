import React, { useState } from 'react';

interface UserProfile {
  name: string;
  address: string;
  email: string;
}

interface ClientProfileProps {
  onSubmit: (profile: UserProfile) => void;
}

const ClientProfile: React.FC<ClientProfileProps> = ({ onSubmit }) => {
  const [profile, setProfile] = useState<UserProfile>({ name: '', address: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold">Client Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
        className="block w-full mt-2 p-2 rounded bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleChange}
        className="block w-full mt-2 p-2 rounded bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={handleChange}
        className="block w-full mt-2 p-2 rounded bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      <button type="submit" className="mt-4 bg-blue-500 px-3 py-1 rounded">Submit</button>
    </form>
  );
};

export default ClientProfile;