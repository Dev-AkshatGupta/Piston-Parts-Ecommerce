import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "V-Ribbed Belt",
    category: "AIR_CONDITIONING",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/bb654de9e471092e85c66920aa5efb91.webp",
      alt: "Rubber Belt",
    },
    manufacturerName: "FENNER",
    quantity: 4,
    outOfStock: false,
    rating: 4,
    wishList: false,
    price: {
      actualPrice: 399,
      previousPrice: 500,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "Air Filter",
    category: "AIR_CONDITIONING",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/77757b8.webp",
      alt: "Air Filter",
    },
    manufacturerName: "Elofic",
    quantity: 8,
    outOfStock: false,
    rating: 2,
    wishList: false,
    price: {
      actualPrice: 419,
      previousPrice: 599,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "Rubber Hose Heater",
    category: "AIR_CONDITIONING",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/9ba5f80eedb3a95fe0cb06db89df2c63.webp",
      alt: "Rubber Hose Heater",
    },
    manufacturerName: "BRAVO",
    quantity: 8,
    outOfStock: false,
    rating: 3,
    wishList: false,
    price: {
      actualPrice: 419,
      previousPrice: 599,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "Side Marker Light Set",
    category: "Light",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/8020f103cfa315e91abb33334381ce3c.webp",
      alt: " Light Set",
    },
    manufacturerName: "Auto Gold",
    quantity: 4,
    outOfStock: false,
    rating: 5,
    wishList: false,
    price: {
      actualPrice: 221,
      previousPrice: 245,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "Side Rear View Mirror Right",
    category: "Light",
    image: {
      src: "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/f96eebfb5dc27b027901d32b703f0a4c.webp",
      alt: "Side Rear View Mirror Right",
    },
    manufacturerName: "AFRO",
    quantity: 4,
    outOfStock: false,
    rating: 1,
    wishList: false,
    price: {
      actualPrice: 392,
      previousPrice: 413,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "BUSH, STEERING CENTER",
    category: "Mechanical",
    image: {
      src: "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/88b6088b62d2256b3fbf5728781e20c7.webp",
      alt: "BUSH, STEERING CENTER",
    },
    manufacturerName: "MARUTI SUZUKI",
    quantity: 10,
    outOfStock: false,
    rating: 5,
    wishList: false,
    price: {
      actualPrice: 392,
      previousPrice: 413,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "PISTON",
    category: "Mechanical",
    image: {
      src: "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/88b6088b62d2256b3fbf5728781e20c7.webp",
      alt: "PISTON",
    },
    manufacturerName: "Febest",
    quantity: 7,
    outOfStock: false,
    rating: 4,
    wishList: false,
    price: {
      actualPrice: 1239,
      previousPrice: 1304.0,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "Headlamp Assembly Right",
    category: "Electric",
    image: {
      src: "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/e4bffecb1dd8440a7916d363176442ac.webp",
      alt: "Headlamp Assembly Right",
    },
    manufacturerName: "MACLITE",
    quantity: 7,
    outOfStock: false,
    rating: 3,
    wishList: false,
    price: {
      actualPrice: 1445,
      previousPrice: 1700,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "Glow Plug",
    category: "Electric",
    image: {
      src: "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/f9e1af01e17e6f9c4fe7e713af9565a6.webp",
      alt: "Glow Plug",
    },
    manufacturerName: "CHAMPION",
    quantity: 7,
    outOfStock: false,
    rating: 5,
    wishList: false,
    price: {
      actualPrice: 1445,
      previousPrice: 1700,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
  {
    _id: uuid(),
    name: "Oil Filter",
    category: "Oil",
    image: {
      src: "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/c2e3ca7e15fc9d62dcfef209d963e791.webp",
      alt: "Oil Filter",
    },
    manufacturerName: "Elofic",
    quantity: 13,
    outOfStock: false,
    rating: 3,
    wishList: false,
    price: {
      actualPrice: 459,
      previousPrice: 541,
    },
    description: [
      "Great authentic products",
      "We are selling genuine products",
      "100% Lowest price gurantee",
    ],
    details:
      "We at Piston parTs gurantee the best in qualit lowest price and genuine virgin products ",
  },
];
