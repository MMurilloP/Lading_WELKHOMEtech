/* eslint-disable react/prop-types */
import "../styles/RestaurantDetails.css";

import ReservationForm from "./ReservationForm";
import RegistrationForm from "./RegistrationForm";

const RestaurantDetails = ({ selectedRestaurant }) => {
  const handleReservationSubmit = (reservationData) => {
    // Lógica para procesar la reserva
    console.log("Reserva enviada:", reservationData);
  };

  const handleRegistrationSubmit = (registrationData) => {
    // Lógica para procesar el registro
    console.log("Registro enviado:", registrationData);
  };

  if (!selectedRestaurant) {
    return (
      <div className="restaurant-details-title-condition">
        Selecciona un <br/>restaurante
      </div>
    );
  }

  return (
    <>
      <div
        className="restaurant-details"
        style={{
          backgroundImage: `url(${selectedRestaurant.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="restaurante-details-container">
          <h2 className="restaurant-details-title">Detalles del Restaurante</h2>
          <h3 className="restaurant-details-restaurant-name">
            {selectedRestaurant.name}
          </h3>
          <p className="restaurant-details-restaurant-address">
            Dirección: {selectedRestaurant.address}
          </p>
          <p className="restaurant-details-restaurant-cuisine">
            Tipo de cocina: {selectedRestaurant.cuisine}
          </p>

          <ReservationForm onSubmit={handleReservationSubmit} />
          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
