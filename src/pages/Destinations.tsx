const destinations = [
  {
    id: 1,
    name: 'Bariloche',
    description: 'Conocida por sus lagos y montañas, ideal para el esquí y el senderismo.',
    details: 'Famosos puntos turísticos: Cerro Catedral, Lago Nahuel Huapi, Circuito Chico',
    image: 'https://images.unsplash.com/photo-1643649333345-251efb6db590?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Ushuaia',
    description: 'La ciudad más austral del mundo, famosa por sus paisajes únicos y fauna marina.',
    details: 'Famosos puntos turísticos: Parque Nacional Tierra del Fuego, Canal Beagle, Glaciar Martial',
    image: 'https://images.unsplash.com/photo-1615656637621-5aa19f1ef847?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Salta',
    description: 'Conocida por su arquitectura colonial, viñedos y paisajes impresionantes.',
    details: 'Famosos puntos turísticos: Tren a las Nubes, Quebrada de Humahuaca, Cafayate',
    image: 'https://images.unsplash.com/photo-1581524810992-17f210b103bd?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const DestinationsPage: React.FC = () => {

  const handleJoin = (destinationName: string) => {
    alert(`Te has unido al viaje a ${destinationName}!`)
  }

  return (
    <div className="container px-5 pt-7 pb-16 mx-auto">
      <h2 className="text-2xl text-[#006BA8] font-bold mb-6">Destinos</h2>
      <div className="flex flex-col gap-8">
        {destinations.map(destination => (
          <div key={destination.id} className="border p-4 rounded-lg shadow-lg">
            <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">{destination.name}</h3>
            <p className="text-gray-700 mt-2">{destination.description}</p>
            <p className="text-gray-600 mt-2">{destination.details}</p>
            <button
              onClick={() => handleJoin(destination.name)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Crear viaje
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DestinationsPage
