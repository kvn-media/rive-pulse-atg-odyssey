// src/components/RiveAnimation.js
import React from 'react';
import { Rive } from 'react-rive';

const RiveAnimation = ({ animationData }) => {
    return <Rive src={animationData} />;
  };
  
  export default RiveAnimation;