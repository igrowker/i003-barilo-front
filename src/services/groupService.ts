import axios from "axios";
import { StepOneFormData } from "../types/step/StepOneFormData";

const API_URL = import.meta.env.VITE_API_URL;

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const createGroup = async (data: StepOneFormData) => {
  const token = getToken();
  if (!token) {
    throw new Error("No se encontró el token de autenticación");
  }

  const groupData = {
    name: data.groupName,
    studentsQuantity: data.numberOfPeople,
    users: [],
  };

  try {
    const response = await axios.post(`${API_URL}/groups`, groupData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al crear el grupo:",
        error.response?.data || error.message
      );
    } else {
      console.error("Error inesperado:", error);
    }
    throw error;
  }
};

export const getTransportById = async (id: number) => {
  const token = getToken();

  try {
    const response = await axios.get(`${API_URL}/transports/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error al obtener el transporte:", error);
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
  const token = getToken();

  try {
    const response = await axios.post(`${API_URL}/transports`, transportData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error al crear el transporte:", error);
    throw new Error(
      error.response?.data?.message || "Error al crear el transporte"
    );
  }
};

export const getAvailablePassages = async (
  origin: string,
  destination: string,
  departureDate: string,
  returnDate: string,
  isFlight: boolean
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
    console.error("Error al obtener los pasajes:", error);
    throw new Error(
      error.response?.data?.message || "Error al obtener los pasajes"
    );
  }
};
