import { useEffect, useState } from "react";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import backgroundVideo from "./assets/backgroundVideo.mp4";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

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
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcomeMessage(false);
      setShowList(true);
      setShowDetails(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-wrapper">
      <NavBar />
      <main className="app-container">
        <div className="app-content">
          {showWelcomeMessage && (
            <h2 className="welcome-msg">
              Bienvenidos <br />a <br />
              SaborExplorer
            </h2>
          )}
          {showList && (
            <RestaurantList
              restaurants={restaurants}
              onSelectRestaurant={handleSelectRestaurant}
            />
          )}
          {showDetails && (
            <RestaurantDetails selectedRestaurant={selectedRestaurant} />
          )}{" "}
        </div>
        <div className="background-video">
          <video autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
