// src/components/commons/Button.js
import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button 
            className="bg-sunlight-yellow hover:bg-soft-white text-deep-ocean-blue font-bold py-2 px-4 rounded"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;