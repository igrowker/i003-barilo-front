export interface Activity {
  id: number;
  name: string;
  description: string;
  price: number;
  destinationName: string;
  image: {
    publicId: string;
    url: string;
    weight: string;
    height: string;
  };
}
