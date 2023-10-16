import React from "react";
import Modal from "react-modal";
import "./UpdateFormPopup.css"

const InsertFormPopup = ({ isOpen, insertedProperty, handleInsert, handleClose, setInsertedProperty }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <form className="update-form" onSubmit={handleInsert}>
        <label htmlFor="type-input">Type:</label>
        <input type="text" value={insertedProperty.Type} onChange={(e) => setInsertedProperty({...insertedProperty, Type: e.target.value})}/>
        <label htmlFor="price-input">Price:</label>
        <input type="text" value={insertedProperty.Price} onChange={(e) => setInsertedProperty({...insertedProperty, Price: e.target.value})}/>
        <label htmlFor="location-input">Location:</label>
        <input type="text" value={insertedProperty.Location} onChange={(e) => setInsertedProperty({...insertedProperty, Location: e.target.value})}/>
        <label htmlFor="dimension-input">Dimension:</label>
        <input type="text" value={insertedProperty.Dimension} onChange={(e) => setInsertedProperty({...insertedProperty, Dimension: e.target.value})}/>
        <label htmlFor="operation-input">Operation:</label>
        <input type="text" value={insertedProperty.Operation} onChange={(e) => setInsertedProperty({...insertedProperty, Operation: e.target.value})}/>
        <label htmlFor="details-input">Details:</label>
        <input type="text" value={insertedProperty.Details} onChange={(e) => setInsertedProperty({...insertedProperty, Details: e.target.value})}/>
        <label htmlFor="image-input">Image:</label>
        <input type="text" value={insertedProperty.Image} onChange={(e) => setInsertedProperty({...insertedProperty, Image: e.target.value})}/>
        <button type="submit" className="form-button">Save</button>
      </form>
      <button className="close" type="button" onClick={handleClose}>Close</button>
    </Modal>
  );
};

export default InsertFormPopup;