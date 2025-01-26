import React, { useState } from 'react';

const PatientForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        contactInfo: '',
        healthHistory: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Patient Data: ', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-lg" 
                    required 
                />
            </div>
            <div>
                <label className="block">Age:</label>
                <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-lg" 
                    required 
                />
            </div>
            <div>
                <label className="block">Contact Information:</label>
                <input 
                    type="text" 
                    name="contactInfo" 
                    value={formData.contactInfo} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-lg" 
                    required 
                />
            </div>
            <div>
                <label className="block">Health History:</label>
                <textarea 
                    name="healthHistory" 
                    value={formData.healthHistory} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Submit
            </button>
        </form>
    );
};

export default PatientForm;