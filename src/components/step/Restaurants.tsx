export interface Restaurant {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export const restaurantsData: Restaurant[] = [
  {
    id: 1,
    name: "stepFour.restaurant.id_1.name",
    image:
      "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/restaurante%20bariloche/El-boliche-de-Alberto.jpg",
    description: "stepFour.restaurant.id_1.description",
    price: 25,
  },
  {
    id: 2,
    name: "stepFour.restaurant.id_2.name",
    image:
      "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/restaurante%20bariloche/Butterfly-bariloche.jpg",
    description: "stepFour.restaurant.id_2.description",
    price: 35,
  },
  {
    id: 3,
    name: "stepFour.restaurant.id_3.name",
    image:
      "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/restaurante%20bariloche/Fam%C3%ADlia-Weiss.jpg",
    description: "stepFour.restaurant.id_3.description",
    price: 15,
  },
  {
    id: 4,
    name: "stepFour.restaurant.id_4.name",
    image:
      "https://assets.turismocity.com/cdn-cgi/image/format=auto,width=1400,fit=scale-down/restaurante%20bariloche/El-patacon.jpg",
    description: "stepFour.restaurant.id_4.description",
    price: 20,
  },
];
