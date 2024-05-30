import React, { Fragment } from 'react';
import InventoryDetails from './InventoryDetails';

const MoveItem = ({ move, toggleMoveDetails, showMoveDetails }) => {
  return (
    <Fragment key={move.estimate_id}>
      <div className="border p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <b>From</b> <br />
            {move.moving_from}
          </div>
          <div className="text-center">
            <span className="fa fa-arrow-right"></span>
          </div>
          <div>
            <b>To</b> <br />
            {move.moving_to}
          </div>
          <div>
            <b>Request</b> <br />
            {move.estimate_id}
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <i className="fa fa-home"></i> {move.property_size}
          </div>
          <div>
            <i className="fa fa-building"></i> 32
          </div>
          <div>
            <i className="fa fa-map"></i> {move.distance}
          </div>
          <div>
            <i className="fa fa-calendar"></i> {move.moving_on}
          </div>
          <div>
            <input type="checkbox" /> is flexible
          </div>
          <div>
            <button
              className="border-orange-500 border-[1px]  text-[orange] px-3 py-2"
              onClick={() => toggleMoveDetails(move.estimate_id)}
            >
              View move details
            </button>
          </div>
          <div>
            <button className="bg-orange-500 text-white px-3 py-2">
              Quotes awaiting
            </button>
          </div>
        </div>

        <div className="text-red-500 mb-4">
          <i className="fa fa-warning"></i> <b>Disclaimer:</b> Please update your move date before two days of shifting
        </div>

        {showMoveDetails[move.estimate_id] && <InventoryDetails data={move} />}
      </div>
    </Fragment>
  );
};

export default MoveItem;
