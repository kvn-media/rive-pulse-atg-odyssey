// src/components/Dashboard.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FirebaseService } from '../services/FirebaseService';
import { setTankData } from '../redux/actions';
import RiveAnimation from './RiveAnimation';

const Dashboard = () => {
    const tankData = useSelector((state) => state.tankData);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const unsubscribe = FirebaseService.subscribeToTankData((data) => {
        dispatch(setTankData(data));
      });
  
      return () => unsubscribe();
    }, [dispatch]);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2x1 font-bold mb-4">IoT Tank Monitoring Dashboard</h1>
        {tankData.map((tank) => (
          <div key={tank.id} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Tank {tank.id}</h3>
            <RiveAnimation animationData={tank.animationData} />
            {/* Add more tank details and animations */}
          </div>
        ))}
      </div>
    );
  };
  
  export default Dashboard;