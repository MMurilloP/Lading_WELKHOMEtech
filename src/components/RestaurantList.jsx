/* eslint-disable react/prop-types */
import "../styles/RestaurantList.css";
const RestaurantList = ({ restaurants, onSelectRestaurant }) => {
  return (
    <div className="restaurant-list">
      <h2 className="restaurant-list-title">
        Restaurantes <br />
        disponibles:
      </h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li
            className="restaurant-list-item"
            key={restaurant.id}
            onClick={() => onSelectRestaurant(restaurant)}
          >
            <h3 className="restaurant-name">{restaurant.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
