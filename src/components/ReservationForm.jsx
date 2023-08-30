/* eslint-disable react/prop-types */
import "../styles/ReservationForm.css";
import { useState } from "react";

const ReservationForm = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ selectedDate, selectedTime, numberOfPeople });
  };

  return (
    <div className="reservation-form">
      <h3 className="reservation-form-title">Reserva</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="datePicker">Fecha:</label>
          <input
            type="date"
            id="datePicker"
            value={selectedDate || ""}
            onChange={(event) => handleDateChange(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="timePicker">Hora:</label>
          <input
            type="time"
            id="timePicker"
            value={selectedTime || ""}
            onChange={(event) => handleTimeChange(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberOfPeople">Número de Personas:</label>
          <input
            type="number"
            id="numberOfPeople"
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
          />
        </div>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default ReservationForm;
