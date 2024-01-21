// src/components/Auth/Login.js
import React, { useState } from 'react';
import { auth } from '../../firebase';
import '../../styles/tailwind.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log('User logged in successfully!');
        } catch (error) {
            console.error('Error logging in user:', error.message);
        }
    };


    return (
        <div className="Container p-4">
          <h2 className="text-2x1 mb-4 font-bold">Login</h2>
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
          <button onClick={handleLogin} className="bg-turquoise-water text-deep-ocean-blue py-2 px-4 rounded">
            Login
          </button>
        </div>
      );
};

export default Login;