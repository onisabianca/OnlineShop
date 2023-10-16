import React from "react";
import Modal from "react-modal";
import "./UpdateFormPopup.css"

const UpdateFormPopup = ({ isOpen, selectedProperty, handleFormSubmit, handleClose, setSelectedProperty }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <form className="update-form" onSubmit={handleFormSubmit}>
        <label htmlFor="type-input">Type:</label>
        <input type="text" value={selectedProperty.Type} onChange={(e) => setSelectedProperty({...selectedProperty, Type: e.target.value})}/>
        <label htmlFor="price-input">Price:</label>
        <input type="text" value={selectedProperty.Price} onChange={(e) => setSelectedProperty({...selectedProperty, Price: e.target.value})}/>
        <label htmlFor="location-input">Location:</label>
        <input type="text" value={selectedProperty.Location} onChange={(e) => setSelectedProperty({...selectedProperty, Location: e.target.value})}/>
        <label htmlFor="dimension-input">Dimension:</label>
        <input type="text" value={selectedProperty.Dimension} onChange={(e) => setSelectedProperty({...selectedProperty, Dimension: e.target.value})}/>
        <label htmlFor="operation-input">Operation:</label>
        <input type="text" value={selectedProperty.Operation} onChange={(e) => setSelectedProperty({...selectedProperty, Operation: e.target.value})}/>
        <label htmlFor="details-input">Details:</label>
        <input type="text" value={selectedProperty.Details} onChange={(e) => setSelectedProperty({...selectedProperty, Details: e.target.value})}/>
        <label htmlFor="image-input">Image:</label>
        <input type="text" value={selectedProperty.Image} onChange={(e) => setSelectedProperty({...selectedProperty, Image: e.target.value})}/>
        <button type="submit" className="form-button">Update</button>
      </form>
      <button className="close" type="button" onClick={handleClose}>Close</button>
    </Modal>
  );
};

export default UpdateFormPopup;