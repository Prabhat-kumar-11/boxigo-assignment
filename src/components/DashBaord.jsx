import React from 'react';
import ItemListing from './ItemListing';
import SideBar from './SideBar';


const Dashboard = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-md sticky top-0" style={{ height: '85px' }}>
        <div className="text-orange-500 font-bold text-2xl">Boxigo</div>
        <div className="flex space-x-6">
          <button className="text-orange-500 font-semibold">Home</button>
          <button className="text-orange-500 font-semibold">About</button>
          <button className="text-orange-500 font-semibold">Services</button>
          <button className="text-orange-500 font-semibold">Contact</button>
        </div>
      </nav>
      <div className="container mx-auto mt-10 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex">
          <SideBar />
          <div className="w-3/4 p-6">
            <div className="mb-6">
              <h4 className="font-bold text-2xl text-gray-700 text-orange-500">My Moves</h4>
            </div>
            <ItemListing />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
