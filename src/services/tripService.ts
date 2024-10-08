import axios, { AxiosResponse } from 'axios';

// Define el tipo de respuesta esperada
export interface Destination {
    id: number;
    name: string;
    description: string;
    // Agrega otros campos según la estructura de tu respuesta
}

// Función para obtener destinos
export const getDestinations = async (): Promise<Destination[] | null> => {
    try {
        const token = localStorage.getItem('token')
  
        if (!token) {
          console.error('Token no disponible')
          return null
        }

        const response: AxiosResponse<Destination[]> = await axios.get(
            'https://barilo.onrender.com/barilo/api/accomodations',
            {
                headers: {
                Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
                'Content-Type': 'application/json',
                },
            },
        );
        if (response.status === 200) {
            console.log('Destinos obtenidos exitosamente:', response.data);
            return response.data;
        } else {
            console.error('No se pudo obtener los destinos:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error al obtener los destinos:', error);
        return null;
    }
};
