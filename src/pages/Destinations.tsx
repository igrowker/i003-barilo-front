import React, { useEffect, useState } from "react";
import HomeCardComponent from '../components/HomeCardComponent';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("/destinations");
        const contentType = response.headers.get("content-type");
        
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("La respuesta no es JSON. Recibiste HTML u otro tipo de contenido.");
        }
  
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
  
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchDestinations();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container px-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Destinations</h1>
      <div className="flex flex-wrap -mx-4">
        {destinations.map((destination) => (
          <HomeCardComponent
            key={destination.id}
            imageUrl={destination.image.url} 
            text={destination.name}
            link={`/destinations/${destination.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
