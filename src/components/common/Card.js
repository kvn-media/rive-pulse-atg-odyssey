// src/components/common/Card.js
import React from 'react';

const Card = ({ children }) => {
    return <div className="bg-light-blue p-4 shadow-md rounded">{children}</div>;
};

export default Card;