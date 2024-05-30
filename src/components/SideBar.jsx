import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUser, faClipboard, faSignOut } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <div className="w-1/4 bg-[#feffd4] text-white p-6 rounded-lg shadow-md">
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faTruck} className="text-orange-500 mr-3 text-2xl" />
        <span className="text-lg font-bold text-orange-500">MY MOVES</span>
      </div>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faUser} className="text-orange-500 mr-3 text-2xl" />
        <span className="text-lg font-bold text-orange-500">MY PROFILE</span>
      </div>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faClipboard} className="text-orange-500 mr-3 text-2xl" />
        <span className="text-lg font-bold text-orange-500">GET QUOTE</span>
      </div>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faSignOut} className="text-orange-500 mr-3 text-2xl" />
        <span className="text-lg font-bold text-orange-500">LOGOUT</span>
      </div>
    </div>
  );
};

export default SideBar;
