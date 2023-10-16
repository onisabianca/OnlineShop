import React, { useState, useEffect } from "react";
import "./RentalsHouses.css";
import {variables,imageMap} from "../Variables.js";
import InfoPopup from "./InfoPopup.js"

const RentalsHouses = () => {

  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch(variables.API_URL+'property');
      const data = await response.json();
      setHouses(data);
    };
    fetchHouses();
  }, []);

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

  const onlyHouses = houses.filter(house => house.Type === "house");
  const rentHouses = onlyHouses.filter(house => house.Operation === "rent");
  const houseList = rentHouses.map((house) => (
    <div key={house.PropertyId} className="house">
      <p>Type: {house.Type}</p>
      <p>Price: {house.Price}</p>
      <p>Location: {house.Location}</p>
      <p>Dimension: {house.Dimension}</p>
      <div className="image-container">
        <img className="images" src={imageMap[house.Image]} style={{width: "100px", height: "100px"}} />
      </div>
      <div className="icons">
            <button onClick={() => {setSelectedProperty(house); setIsInfoPopupOpen(true);}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            </button>
      </div>
    </div>
  ));

 return(
    <div>
        <div className="label">For Rent</div>
        <div className="label2-wrapper">
          <div className="label2">
            <p>Houses</p>
          </div>
          <div className="horizontal-line"></div>
        </div>
        <div className="house-list">{houseList}</div>
        {selectedProperty && (
        <InfoPopup
          isOpen={isInfoPopupOpen}
          selectedProperty={selectedProperty}
          handleClose={() => {setIsInfoPopupOpen(false)}}
        />
        )}
    </div>
    )
}

export default RentalsHouses;
