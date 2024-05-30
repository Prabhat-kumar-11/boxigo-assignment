import React, { useState, Fragment } from 'react';

const InventoryDetails = ({ data }) => {
  const [expandedSection, setExpandedSection] = useState('');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h5 className="font-bold mb-4">Inventory Details</h5>
      <button className="bg-blue-500 text-white px-3 py-2 mb-4">
        Edit Inventory
      </button>

      {data.items.inventory.map((category, index) => (
        <Fragment key={index}>
          <div className="flex justify-between items-center mb-4">
            <span>
              {category.displayName}{' '}
              <span className="bg-red-500 text-white rounded px-2">
                {category.items.length}
              </span>
            </span>
            <button
              className="bg-transparent border-0"
              onClick={() => toggleSection(category.displayName)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-chevron-${
                  expandedSection === category.displayName ? 'up' : 'down'
                }`}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d={`M7.646 ${
                    expandedSection === category.displayName ? '4.646' : '11.354'
                  }a.5.5 0 0 1 .708 0l6-6a.5.5 0 0 1 .708.708l-6 6-6-6a.5.5 0 0 1 .708-.708z`}
                />
              </svg>
            </button>
          </div>
          {expandedSection === category.displayName && (
            <div className="pl-4">
              {category.items.map((item, idx) => (
                <div key={idx} className="mb-2">
                  <b>{item.name}</b> - {item.qty}
                </div>
              ))}
            </div>
          )}
        </Fragment>
      ))}

      <div className="mt-6">
        <h5 className="font-bold mb-4">House Details</h5>
        <button className="bg-blue-500 text-white px-3 py-2 mb-4">
          Edit house details
        </button>

        <div className="mb-4">
          <h6 className="font-bold">Existing House Details</h6>
          <div className="grid grid-cols-4 gap-4 mt-2">
            <div>Floor No.</div>
            <div>Elevator Available</div>
            <div>Packing Required</div>
            <div>Distance from truck to door</div>
            <div>{data.old_floor_no}</div>
            <div>{data.old_elevator_availability}</div>
            <div>{data.packing_service}</div>
            <div>{data.old_parking_distance}</div>
          </div>
        </div>

        <div className="mb-4">
          <h6 className="font-bold">New House Details</h6>
          <div className="grid grid-cols-4 gap-4 mt-2">
            <div>Floor No.</div>
            <div>Elevator Available</div>
            <div>Packing Required</div>
            <div>Distance from truck to door</div>
            <div>{data.new_floor_no}</div>
            <div>{data.new_elevator_availability}</div>
            <div>{data.unpacking_service}</div>
            <div>{data.new_parking_distance}</div>
          </div>
        </div>

        <div className="mb-4">
          <h6 className="font-bold">Additional Information</h6>
          <div>No additional info</div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
