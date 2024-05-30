import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHome,
  faBuilding,
  faRoad,
  faTruckMedical,
  faExclamationTriangle,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

const ItemListing = () => {
  const [moves, setMoves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMoveDetails, setShowMoveDetails] = useState(null);

  const toggleMoveDetails = (estimateId) => {
    setShowMoveDetails(showMoveDetails === estimateId ? null : estimateId);
  };

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const response = await fetch(`https://backend-server-box.vercel.app/api/sample-data`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMoves(data.Customer_Estimate_Flow);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoves();
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div>
      {moves.map((move) => (
        <Fragment key={move.estimate_id}>
          <div className="border-b border-gray-300 p-6  rounded-lg shadow-md mb-4 bg-[#feffd4]">
            <div className="flex gap-10 mb-6 justify-between items-center">
              <div className="from_address text-center">
                <span className="block text-gray-600">From</span>
                <p className="font-semibold">{move.moving_from}</p>
              </div>
              <div className="center_arrow text-center">
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-600" />
              </div>
              <div className="to_address text-center">
                <span className="block text-gray-600">To</span>
                <p className="font-semibold">{move.moving_to}</p>
              </div>
              <div className="request text-center">
                <span className="block text-gray-600">Request#</span>
                <p className="font-semibold">{move.estimate_id}</p>
              </div>
            </div>

            <div className="flex gap-10 mb-6 justify-between">
              <div className="icon_text text-center">
                <p>
                  <FontAwesomeIcon icon={faHome} className="text-red-500 text-2xl" />
                </p>
                {move.property_size}
              </div>
              <div className="icon_text text-center">
                <p>
                  <FontAwesomeIcon icon={faBuilding} className="text-red-500 text-2xl" />
                </p>
                {move.total_items}
              </div>
              <div className="icon_text text-center">
                <p>
                  <FontAwesomeIcon icon={faRoad} className="text-red-500 text-2xl" />
                </p>
                {move.distance}
              </div>
              <div className="icon_text text-center">
                <p>
                  <FontAwesomeIcon icon={faTruckMedical} className="text-red-500 text-2xl" />
                </p>
                {move.order_date}
                <FontAwesomeIcon icon={faPencilAlt} className="ml-2 text-gray-600 cursor-pointer" />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`checkbox-${move.estimate_id}`}
                  className="custom-checkbox"
                  checked={move.move_date_flexible === "0"}
                  readOnly
                />
                <label htmlFor={`checkbox-${move.estimate_id}`}></label>
                <p className="text-gray-600">Is flexible</p>
              </div>
              <div className="buttons flex gap-5">
                <button
                  className="text-orange-500 border border-orange-500 py-2 px-4 rounded"
                  onClick={() => toggleMoveDetails(move.estimate_id)}
                >
                  {showMoveDetails === move.estimate_id
                    ? "Hide more details"
                    : "View more details"}
                </button>
                <button className="bg-orange-500 py-2 px-4 rounded text-white">
                  Quotes Awaiting
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="text-red-500 text-xl"
              />
              <span className="font-bold text-gray-700"> Disclaimer:</span>
              <p className="text-gray-600">Please update your move date before two days of shifting</p>
            </div>

            {showMoveDetails === move.estimate_id && (
              <div className="move-details p-6 border-t border-gray-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-700">Additional Information</span>
                  <button className="bg-black text-white py-2 px-4 rounded">Edit Additional Info</button>
                </div>
                <div className="mb-4 text-gray-700">Test Data</div>
                <div className="text-red-500 font-bold mb-2">Existing House Details</div>

                <div className="flex justify-between w-3/4 mb-4">
                  <div>
                    <span className="font-bold">Floor No.</span>
                    <span className="ml-2">{move.existing_floor_no}</span>
                  </div>
                  <div>
                    <span className="font-bold">Elevator Availability</span>
                    <span className="ml-2">{move.existing_elevator_availability}</span>
                  </div>
                  <div>
                    <span className="font-bold">Distance from Elevator / Staircase to truck</span>
                    <span className="ml-2">{move.existing_parking_distance}</span>
                  </div>
                </div>
                <div className="text-red-500 font-bold mb-2">New House Details</div>

                <div className="flex justify-between w-3/4 mb-4">
                  <div>
                    <span className="font-bold">Floor No.</span>
                    <span className="ml-2">{move.new_floor_no}</span>
                  </div>
                  <div>
                    <span className="font-bold">Elevator Availability</span>
                    <span className="ml-2">{move.new_elevator_availability}</span>
                  </div>
                  <div>
                    <span className="font-bold">Distance from Elevator / Staircase to truck</span>
                    <span className="ml-2">{move.new_parking_distance}</span>
                  </div>
                </div>
                <div className="text-red-500 font-bold mb-4">Inventory Details</div>

                <div id="accordion-collapse" data-accordion="collapse">
                  {move.items.inventory.map((item, index) => (
                    <div key={index}>
                      <h2 id={`accordion-collapse-heading-${index}`}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full p-4 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          data-accordion-target={`#accordion-collapse-body-${index}`}
                          aria-expanded="false"
                          aria-controls={`accordion-collapse-body-${index}`}
                          onClick={() =>
                            document
                              .getElementById(
                                `accordion-collapse-body-${index}`
                              )
                              .classList.toggle("hidden")
                          }
                        >
                          <span className="flex items-center gap-2 text-red-500 font-bold">
                            {item.displayName}
                          </span>
                          <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5 5 1 1 5"
                            />
                          </svg>
                        </button>
                      </h2>
                      <div
                        id={`accordion-collapse-body-${index}`}
                        className="hidden"
                        aria-labelledby={`accordion-collapse-heading-${index}`}
                      >
                        <div className="p-4 border border-b-0 border-gray-200 dark:border-gray-700 flex flex-wrap gap-12">
                          {item.category
                            .filter((cat) =>
                              cat.items.some((ite) => ite.qty > 0)
                            )
                            .map((cat, catIndex) => (
                              <div key={catIndex} className="font-bold">
                                {cat.displayName}
                                {cat.items
                                  .filter((ite) => ite.qty > 0)
                                  .map((ite) => (
                                    <div
                                      key={ite.uniqueId}
                                      className="mb-4"
                                    >
                                      <div className="flex justify-between">
                                        <div>
                                          {ite.displayName}{" "}
                                          {ite.type
                                            .filter((option) => option.selected)
                                            .map((option) => (
                                              <div
                                                key={option.option}
                                                className="font-bold text-sm"
                                              >
                                                {option.option}
                                              </div>
                                            ))}
                                        </div>
                                        <span className="font-bold ml-4">
                                          {ite.qty}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ItemListing;
