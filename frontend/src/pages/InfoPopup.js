import React from "react";
import Modal from "react-modal"
import "./InfoPopup.css";

const InfoPopup = ({ isOpen, selectedProperty, handleClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
        <label htmlFor="type-input">Type:</label>
        <input type="text" value={selectedProperty.Type} readOnly />
        <label htmlFor="price-input">Price:</label>
        <input type="text" value={selectedProperty.Price} readOnly />
        <label htmlFor="location-input">Location:</label>
        <input type="text" value={selectedProperty.Location} readOnly />
        <label htmlFor="dimension-input">Dimension:</label>
        <input type="text" value={selectedProperty.Dimension} readOnly />
        <label htmlFor="operation-input">Operation:</label>
        <input type="text" value={selectedProperty.Operation} readOnly />
        <label htmlFor="details-input">Details:</label>
        <input type="text" value={selectedProperty.Details} readOnly />
        <label htmlFor="image-input">Image:</label>
        <input type="text" value={selectedProperty.Image} readOnly />
      <button className="close" type="button" onClick={handleClose}>Close</button>
    </Modal>
  );
};

export default InfoPopup;