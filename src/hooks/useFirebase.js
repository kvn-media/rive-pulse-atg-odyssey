// src/hooks/useFirebase.js
import { useEffect, useState } from 'react';
import FirebaseService from '../services/FirebaseService';

export const useTankData = () => {
  const [tankData, setTankData] = useState([]);

  useEffect(() => {
    const unsubscribe = FirebaseService.subscribeToTankData((data) => {
      setTankData(data);
    });

    return () => unsubscribe();
  }, []);

  return tankData;
};