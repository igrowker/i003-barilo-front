import Detail from './ui/Detail';
import { restaurantsData } from './step/Restaurants';

const RestaurantDetail: React.FC<{ id: number }> = ({ id }) => {
  const restaurant = restaurantsData.find(restaurant => restaurant.id === id);

  if (!restaurant) return <p>Restaurante no encontrado.</p>;

  return (
    <Detail
      name={restaurant.name}
      duration="Duración de la visita"
      location="Ubicación del Restaurante"
      price={`$${restaurant.price}`}
      description={restaurant.description}
      imageUrl={restaurant.image}
    />
  );
};

export default RestaurantDetail;