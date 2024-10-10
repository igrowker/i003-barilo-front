import axios from "axios";
import { StepOneFormData } from "../types/step/StepOneFormData";

const API_URL = import.meta.env.VITE_API_URL;

export const createGroup = async (groupData: StepOneFormData) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No se encontró el token de autenticación");
  }

  try {
    const response = await axios.post(
      `${API_URL}/travels`,
      {
        groupId: 0,
        destinationId: 0,
        origin: "",
        totalPrice: 0,
        costPerStudent: 0,
        startDate: "",
        endDate: "",
        accommodations: [],
        activities: [],
        transports: [],
        meals: [],
        ...groupData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creando el grupo:", error);
    throw error;
  }
};

export const getTransportById = async (id: number) => {
  const token = localStorage.getItem("authToken");

  try {
    const response = await axios.get(`${API_URL}/transports/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al obtener el transporte"
    );
  }
};

export const createTransport = async (transportData: {
  name: string;
  price: number;
  destinationId: number;
  transportCategory: "BASIC" | "STANDARD" | "PREMIUM";
}) => {
  try {
    const response = await axios.post(`${API_URL}/transports`, transportData);
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al crear el transporte"
    );
  }
};

export const getAvailablePassages = async (
  origin,
  destination,
  departureDate,
  returnDate,
  isFlight
) => {
  try {
    const response = await axios.get(`${API_URL}/passages`, {
      params: {
        origin,
        destination,
        departureDate,
        returnDate,
        isFlight,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al obtener los pasajes"
    );
  }
};
