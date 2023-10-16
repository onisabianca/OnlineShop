import React from "react";
import Modal from "react-modal";

const VisitPopup = ({ isOpen, selectedProperty, insertedVisit, handleInsert, handleClose, setInsertedVisit, availableHour }) => {

    const hours = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <form className="update-form" onSubmit={handleInsert}>
        <label htmlFor="type-input">Operation: {selectedProperty.Operation}</label>
        <label htmlFor="type-input">Type: {selectedProperty.Type}</label>
        <label htmlFor="type-input">Price: {selectedProperty.Price}</label>
        <label htmlFor="type-input">Location: {selectedProperty.Location}</label>
        <label htmlFor="type-input">Dimension: {selectedProperty.Dimension}</label>
        <label htmlFor="type-input">Date:</label>
        <input type="text" value={insertedVisit.Date} onChange={(e) => setInsertedVisit({...insertedVisit, Date: e.target.value})}/>
        <label htmlFor="price-input">Hour:</label>
        <select value={insertedVisit.Hour} onChange={(e) => setInsertedVisit({...insertedVisit, Hour: e.target.value})}>
                  {hours.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
        <label>{availableHour}</label>
        <button type="submit" className="form-button">Save</button>
      </form>
      <button className="close" type="button" onClick={handleClose}>Close</button>
    </Modal>
  );
};

export default VisitPopup;