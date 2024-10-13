export interface Activity {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface StepFourFormData {
  activities: Activity[];
  restaurants: Restaurant[];
  confirmation?: string;
  destinationId: number;
}
