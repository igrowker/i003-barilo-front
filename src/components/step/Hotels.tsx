export interface Hotel {
  id: number;
  name: string;
  image: string;
  price: number;
  location: string;
}

export const hotelsData: Hotel[] = [
  {
    id: 1,
    name: "Hotel Concorde",
    image: "https://cf2.bstatic.com/xdata/images/hotel/square600/128959783.webp?k=9e7fcd71fc8130f4841cdd6029c50c611d0c6fc40e2040458c410bbbb34d6c96&o=",
    price: 75.000,
    location: "Bariloche, Argentina",
  },
  {
    id: 2,
    name: "Hotel Nahuel Huapi",
    image: "https://cf2.bstatic.com/xdata/images/hotel/square600/524312028.webp?k=bcc0a48e111a8d9994bd861aafd11f49407133ff116af195c8552c524dc1d777&o=",
    price: 136.000,
    location: "Bariloche, Argentina",
  },
  {
    id: 3,
    name: "Hotel Plaza Bariloche",
    image: "https://cf2.bstatic.com/xdata/images/hotel/square600/461585151.webp?k=f7d5ad457e3bd27022a836f8173965de66e5fa072bbf7bda85cc28784a7ffae3&o=",
    price: 44.000,
    location: "Bariloche, Argentina",
  },
];
