// src/views/dashboard/DashboardView.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FirebaseService } from '../services/FirebaseService';
import { setTankData } from '../../store/actions';
import RiveAnimation from '../components/RiveAnimation';
import Card from '../components/common/Card';

const DashboardView = () => {
    const tankData = useSelector((state) => state.tankData);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const unsubscribe = FirebaseService.subscribeToTankData((data) => {
        dispatch(setTankData(data));
    });
  
      return () => unsubscribe();
    }, [dispatch]);


    const updateTankLevel = (tankId, newLevel) => {
      FirebaseService.updateTankLevel(tankId, newLevel);
    };


    return (
      <div className="bg-deep-ocean-blue text-soft-white min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">IoT Tank Monitoring Dashboard</h1>
          {tankData.map((tank) => (
            <Card key={tank.id} className="mb-6 p-4">
              <h3 className="text-lg font-semibold mb-2">Tank {tank.id}</h3>
              <RiveAnimation animationData={tank.animationData} />
              <p className="text-seaweed-green">Level: {tank.level}%</p>
              <button
                className="bg-turquoise-water text-deep-ocean-blue py-2 px-4 rounded"
                onClick={() => updateTankLevel(tank.id, newLevel)}
              >
                Update Tank Level
              </button>
              {/* Add more tank details and animations */}
            </Card>
          ))}
        </div>
      </div>
    );
  };

export default DashboardView;