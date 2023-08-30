import { useState } from "react";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import backgroundVideo from "./assets/backgroundVideo.mp4";

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const restaurants = [
    {
      id: 1,
      name: "Delicias del Mar",
      address: "Calle Principal 123",
      cuisine: "Mariscos",
      img: "https://cdn.pixabay.com/photo/2013/07/19/00/18/seafood-165220_1280.jpg",
    },
    {
      id: 2,
      name: "La Parrilla Feliz",
      address: "Avenida Central 456",
      cuisine: "Parrilla",
    },
    {
      id: 3,
      name: "Café Aromático",
      address: "Plaza del Sabor 789",
      cuisine: "Cafetería",
    },
    {
      id: 4,
      name: "Sabor Oriental",
      address: "Calle de los Sabores 234",
      cuisine: "Comida China",
    },
    {
      id: 5,
      name: "Pizza Supreme",
      address: "Avenida de la Pizza 567",
      cuisine: "Pizza",
    },
  ];

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };
  return (
    <div className="app-container">
      <h1 className="app-title">SaborExplorer</h1>
      <div className="app-content">
        <RestaurantList
          restaurants={restaurants}
          onSelectRestaurant={handleSelectRestaurant}
        />
        <RestaurantDetails selectedRestaurant={selectedRestaurant} />
      </div>
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default App;
