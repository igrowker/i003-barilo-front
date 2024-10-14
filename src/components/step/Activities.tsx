export interface Activity {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export const activitiesData: Activity[] = [
  {
    id: 1,
    name: "stepFour.activity.id_1.name",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-360x240/12/6d/56/f5.jpg",
    description:  "stepFour.activity.id_1.description",
    price: 20,
  },
  {
    id: 2,
    name: "stepFour.activity.id_2.name",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/d9/80.jpg",
    description: "stepFour.activity.id_2.description",
    price: 30,
  },
  {
    id: 3,
    name: "stepFour.activity.id_3.name",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/dc/16.jpg",
    description: "stepFour.activity.id_3.description",
    price: 25,
  },
  {
    id: 4,
    name: "stepFour.activity.id_4.name",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/61/95/e1.jpg",
    description: "stepFour.activity.id_4.description",
    price: 40,
  },
];
