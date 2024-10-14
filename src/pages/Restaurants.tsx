
const restaurants = [
  {
    id: 1,
    name: 'Gourmet Bistro',
    description: 'A fine dining experience with a selection of international dishes.',
    details: 'Cuisine: French, Price: $$$, Location: Downtown',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 2,
    name: 'The Pizza Place',
    description: 'Authentic Italian pizza with fresh ingredients and a wood-fired oven.',
    details: 'Cuisine: Italian, Price: $$, Location: City Center',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Sushi World',
    description: 'Traditional Japanese sushi and sashimi prepared by skilled chefs.',
    details: 'Cuisine: Japanese, Price: $$$, Location: Harbor District',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
]

const Restaurants: React.FC = () => {

  const handleJoin = (restaurantName: string) => {
    alert(`You have joined ${restaurantName}!`)
  }

  return (
    <div className="container px-5 pt-7 pb-16 mx-auto">
      <h2 className="text-2xl text-[#006BA8] font-bold mb-6">Restaurants</h2>
      <div className="flex flex-col gap-8">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="border p-4 rounded-lg shadow-lg">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">{restaurant.name}</h3>
            <p className="text-gray-700 mt-2">{restaurant.description}</p>
            <p className="text-gray-600 mt-2">{restaurant.details}</p>
            <button
              onClick={() => handleJoin(restaurant.name)}
              className="mt-4 px-4 py-2 bg-[#006BA8] text-white font-bold rounded-md hover:bg-[#005482]"
            >
              Unirse
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restaurants
