import React, { useState } from 'react';
import ItemListing from './ItemListing';
import SideBar from './SideBar';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-md sticky top-0" style={{ height: '85px' }}>
        <div className="text-orange-500 font-bold text-2xl">Boxigo</div>
        <div className="hidden md:flex space-x-6">
          <button className="text-orange-500 font-semibold">Home</button>
          <button className="text-orange-500 font-semibold">About</button>
          <button className="text-orange-500 font-semibold">Services</button>
          <button className="text-orange-500 font-semibold">Contact</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <button className="block w-full text-left px-6 py-4 text-orange-500 font-semibold">Home</button>
          <button className="block w-full text-left px-6 py-4 text-orange-500 font-semibold">About</button>
          <button className="block w-full text-left px-6 py-4 text-orange-500 font-semibold">Services</button>
          <button className="block w-full text-left px-6 py-4 text-orange-500 font-semibold">Contact</button>
        </div>
      )}
      <div className="container mx-auto mt-10 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex">
          <div className="hidden lg:block lg:w-1/4">
            <SideBar />
          </div>
          <div className="w-full lg:w-3/4 p-6">
            <div className="mb-6">
              <h4 className="font-bold text-2xl text-orange-500">My Moves</h4>
            </div>
            <ItemListing />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
