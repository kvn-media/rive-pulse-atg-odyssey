// src/components/ui/Avatar.js
import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <div className="avatar">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;