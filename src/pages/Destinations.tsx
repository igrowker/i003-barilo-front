import { Destination, getDestinations } from "@/services/tripService";
import { useEffect, useState } from "react";


const Destinations = () => {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestinations = async () => {
            const data = await getDestinations();
            if (data) {
                setDestinations(data);
            }
            setLoading(false);
        };

        fetchDestinations();
    }, []);

    if (loading) {
        return <p>Cargando destinos...</p>;
    }
  return (
    <div>
        <h1>Destinos</h1>
        <ul>
            {destinations.map(destination => (
                <li key={destination.id}>
                    <h2>{destination.name}</h2>
                    <p>{destination.description}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Destinations
