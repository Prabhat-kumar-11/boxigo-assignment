import React, { useEffect, useState } from 'react';
import MoveItem from './MoveItem';
import Sidebar from './SideBar';



const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showMoveDetails, setShowMoveDetails] = useState({});



  useEffect(() => {
    fetch('http://test.api.boxigo.in/sample-data/')
      .then(response => response.json())
      .then(data => {
        setData(data.Customer_Estimate_Flow);
      });
  }, []);

  const toggleMoveDetails = (estimateId) => {
    console.log(estimateId);
  

    const updatedMoveDetails = { ...showMoveDetails };
  
    // Toggle the value for the given estimateId
    updatedMoveDetails[estimateId] = !updatedMoveDetails[estimateId];
  
    // Update the state with the modified copy
    setShowMoveDetails(updatedMoveDetails);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex">
        <Sidebar />
        <div className="w-3/4 p-4">
          <div className="mb-6">
            <h4 className="font-bold text-xl">My Moves</h4>
          </div>
          {data.map((move) => (
            <MoveItem
              key={move.estimate_id}
              move={move}
              toggleMoveDetails={toggleMoveDetails}
              showMoveDetails={showMoveDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
