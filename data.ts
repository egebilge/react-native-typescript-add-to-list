interface Fruit {
  id: number;
  name: string;
  price: number;
}

const Fruits: Fruit[] = [
  {
    id: 1,
    name: 'Mango',
    price: 10,
  },
  {
    id: 2,
    name: 'Pineapple',
    price: 20,
  },
  {
    id: 3,
    name: 'Apple',
    price: 12,
  },
  {
    id: 4,
    name: 'Orange',
    price: 7,
  },
];

export {Fruits};
export type {Fruit};
