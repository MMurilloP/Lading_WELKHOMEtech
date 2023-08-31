import { useState } from "react";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import backgroundVideo from "./assets/backgroundVideo.mp4";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedRestaurantImage, setSelectedRestaurantImage] = useState(null);

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
      img: "https://cdn.pixabay.com/photo/2015/06/24/13/31/barbecue-820010_1280.jpg",
    },
    {
      id: 3,
      name: "Café Aromático",
      address: "Plaza del Sabor 789",
      cuisine: "Cafetería",
      img: "https://cdn.pixabay.com/photo/2017/07/31/19/27/coffee-2560260_1280.jpg",
    },
    {
      id: 4,
      name: "Sabor Oriental",
      address: "Calle de los Sabores 234",
      cuisine: "Comida China",
      img: "https://cdn.pixabay.com/photo/2020/08/05/18/55/meal-5466163_1280.jpg",
    },
    {
      id: 5,
      name: "Pizza Supreme",
      address: "Avenida de la Pizza 567",
      cuisine: "Pizza",
      img: "https://cdn.pixabay.com/photo/2017/09/19/20/19/pizza-2766471_1280.jpg",
    },
  ];

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setSelectedRestaurantImage(restaurant.img);
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main
        className="app-container"
        style={{ backgroundImage: `url(${selectedRestaurantImage})` }}
      >
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
