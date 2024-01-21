// src/components/commons/Button.js
import React from 'react';

const Button = ({ onclick, children }) => {
    return (
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onclick}
        >
            {children}
        </button>
    );
};

export default Button;