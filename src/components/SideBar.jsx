import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <div className="mb-4">
        <span className="fa fa-truck"> MY MOVES</span>
      </div>
      <div className="mb-4">
        <span className="fa fa-user"> MY PROFILE</span>
      </div>
      <div className="mb-4">
        <span className="fa fa-clipboard"> GET QUOTE</span>
      </div>
      <div className="mb-4">
        <span className="fa fa-sign-out"> LOGOUT</span>
      </div>
    </div>
  );
};

export default Sidebar;
