import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import {variables,imageMap} from "../Variables.js";
import VisitPopup from "./VisitPopup.js"
import {useNavigate} from 'react-router-dom';

const Visit = () => {

    const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(variables.API_URL+'property');
      const data = await response.json();
      setProperties(data);
    };
    fetchProperties();
  }, []);

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [insertedVisit, setInsertedVisit]= useState(false);
    const [availableHour, setAvailableHour]= useState("");

    const handlePropertyClick = (property) => {
      setSelectedProperty(property);
      setIsPopupOpen(true);
    };

const handleInsert = (event) => {
  event.preventDefault();

  const userData = JSON.parse(localStorage.getItem("user"));
  const loggedUserId = userData.UserId;

  const newVisit = {
    PropertyId: selectedProperty.PropertyId,
    UserId: loggedUserId,
    Date: event.target[0].value,
    Hour: event.target[1].value,
  };

  fetch(variables.API_URL + 'visit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newVisit),
  })
    .then((response) => response.json())
    .then((data) => {
    if (data==="Visit added!")
    {
      setIsPopupOpen(false);
      window.location.reload();
    }
    else
    {
        setAvailableHour(data)
        setIsPopupOpen(true);
    }
    });
};


  const onlyHouses = properties.filter(property => property.Type === "house");
  const houseList = onlyHouses.map((house) => (
    <div key={house.PropertyId} className="house" onClick={() => handlePropertyClick(house)}>
      <p>For {house.Operation}</p>
      <p>Type: {house.Type}</p>
      <p>Price: {house.Price}</p>
      <p>Location: {house.Location}</p>
      <p>Dimension: {house.Dimension}</p>
      <div className="image-container">
        <img className="images" src={imageMap[house.Image]} style={{width: "100px", height: "100px"}} />
      </div>
    </div>
  ));

  const onlyApartments = properties.filter(property => property.Type === "apartment");
  const apartmentList = onlyApartments.map((apartment) => (
    <div key={apartment.PropertyId} className="apartment" onClick={() => handlePropertyClick(apartment)}>
      <p>For {apartment.Operation}</p>
      <p>Type: {apartment.Type}</p>
      <p>Price: {apartment.Price}</p>
      <p>Location: {apartment.Location}</p>
      <p>Dimension: {apartment.Dimension}</p>
      <div className="image-container">
        <img className="images" src={imageMap[apartment.Image]} style={{width: "100px", height: "100px"}} />
      </div>
    </div>
  ));

  const onlyStudios = properties.filter(property => property.Type === "studio");
  const studioList = onlyStudios.map((studio) => (
    <div key={studio.PropertyId} className="studio" onClick={() => handlePropertyClick(studio)}>
      <p>For {studio.Operation}</p>
      <p>Type: {studio.Type}</p>
      <p>Price: {studio.Price}</p>
      <p>Location: {studio.Location}</p>
      <p>Dimension: {studio.Dimension}</p>
      <div className="image-container">
        <img className="images" src={imageMap[studio.Image]} style={{width: "100px", height: "100px"}} />
      </div>
    </div>
  ));

 return(
    <div>
    <div className="label">Pay a visit</div>
        <div className="label2-wrapper">
          <div id="apartments" className="label2">
            <p>Apartments</p>
          </div>
          <div className="horizontal-line"></div>
        </div>
        <div className="apartment-list">{apartmentList}</div>

        <div className="label3-wrapper">
          <div id="houses" className="label2">
            <p>Houses</p>
          </div>
          <div className="horizontal-line"></div>
        </div>
        <div className="house-list">{houseList}</div>

        <div className="label4-wrapper">
          <div id="studios" className="label2">
            <p>Studios</p>
          </div>
          <div className="horizontal-line"></div>
        </div>
        <div className="studio-list">{studioList}</div>

    {isPopupOpen && (
          <VisitPopup
            isOpen={isPopupOpen}
            selectedProperty={selectedProperty}
            insertedVisit={insertedVisit}
            handleInsert={handleInsert}
            handleClose={() => {setIsPopupOpen(false)}}
            setInsertedVisit={setInsertedVisit}
            availableHour={availableHour}
          />
        )}
    </div>
    )
}

export default Visit;
