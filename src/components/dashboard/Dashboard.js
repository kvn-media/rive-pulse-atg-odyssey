// src/components/dashboard/Dashboard.js
import React from 'react';

function Dashboard() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tankData.map((tank) => (
          <TankCard key={tank.id} tank={tank} />
      ))}
    </div>
    );
  }
  
  export default Dashboard;