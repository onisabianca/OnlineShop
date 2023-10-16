import React from "react";
import Modal from "react-modal"
import "./InfoPopup.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BusyCalendar = ({ visits }) => {
  const events = visits.map((visit) => {
    const startDate = new Date(`${visit.Date}T${visit.Hour}`);
    const endDate = moment(startDate).add(1, "hour").toDate();
    return {
      start: startDate,
      end: endDate,
      title: `Booked by user (${visit.UserId})`
    };
  });
    return (
      <div style={{ height: 500 }}>
        <Calendar localizer={localizer} events={events} />
      </div>
    );
  };

const VisitsPopup = ({ isOpen, visits, selectedProperty, handleClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
    <h2>Visits for Property {selectedProperty.PropertyId}</h2>
      {visits && visits.length > 0 ? (
        <>
          <ul>
            {visits.map((visit) => (
              <li key={visit.VisitId}>
                Date: {visit.Date}, Time: {visit.Hour}
              </li>
            ))}
          </ul>
          <BusyCalendar visits={visits} />
        </>
      ) : (
        <p>No visits found.</p>
      )}
      <button className="close" type="button" onClick={handleClose}>Close</button>
    </Modal>
  );
};

export default VisitsPopup;