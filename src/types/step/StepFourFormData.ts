export interface Activity {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface StepFourFormData {
  activities: Activity[];
  restaurants: Restaurant[];
  confirmation?: string;
}
