export interface Hotel {
  id: number;
  name: string;
  image: {
    url: string;
  };
  price: number;
  location?: string;
}

export interface StepThreeFormData {
  hotels: Hotel[];
  confirmation?: string;
}
