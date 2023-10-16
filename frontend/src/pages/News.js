import React, { useState, useEffect } from "react";
import "./News.css";
import Video from "../images/video.mp4";
import {variables,imageMap} from "../Variables.js";

const News = () => {

  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(variables.API_URL+'property');
      const data = await response.json();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  const onlyHouses = properties.filter(property => property.Type === "house");
  const lastThreeHouses = onlyHouses.slice(Math.max(onlyHouses.length - 3 , 0));
  const houseList = lastThreeHouses.map((house) => (
    <div key={house.PropertyId} className="house">
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
  const lastThreeApartments = onlyApartments.slice(Math.max(onlyApartments.length - 3, 0));
  const apartmentList = lastThreeApartments.map((apartment) => (
    <div key={apartment.PropertyId} className="apartment">
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
  const lastThreeStudios = onlyStudios.slice(Math.max(onlyStudios.length - 3, 0));
  const studioList = lastThreeStudios.map((studio) => (
    <div key={studio.PropertyId} className="studio">
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
        <div className="label">Find out what is new</div>

        <div className="video">
        <video width="320" height="240" controls>
            <source src={Video} type="video/mp4">
            </source>
        </video>
        </div>

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

    </div>
    )
}

export default News;
