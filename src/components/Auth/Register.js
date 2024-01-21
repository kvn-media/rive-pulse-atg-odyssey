// src/components/Auth/Register.js
import React, { useState } from 'react';
import { auth } from '../../firebase';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            console.log('User registered successfully!');
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    };


    return (
        <div className="Container p-4">
          <h2 className="text-2x1 mb-4 font-bold">Register</h2>
          <label className="mb-2 block text-soft-white">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 mb-4"
          />
          <br />
          <label className="mb-2 block text-soft-white">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded p-2 mb-4"
          />
          <br />
          <button onClick={handleRegister} className="bg-turquoise-water text-deep-ocean-blue py-2 px-4 rounded">
            Register
          </button>
        </div>
      );
};

export default Register;