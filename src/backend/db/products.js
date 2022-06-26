import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "bb654de9e471092e85c66920aa5efb91",
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
    _id: "77757b8",
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
    _id: "9ba5f80eedb3a95fe0cb06db89df2c63",
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
    _id: "8020f103cfa315e91abb33334381ce3c",
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
    _id: "f96eebfb5dc27b027901d32b703f0a4c",
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
    _id: "88b6088b62d2256b3fbf5728781e20c7",
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
    _id: "e4bffecb1dd8440a7916d363176442ac",
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
    _id: "f9e1af01e17e6f9c4fe7e713af9565a6",
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
    _id: "3a5a65c4-0eac-44ec-bbb1-5834fd37cdc0",
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
  {
    _id: "3c062899-9471-4d77-a90e-c02bb4508160",
    name: "Mobil Super 3000 Formula | 5W-40(1L)",
    category: "Oil",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/8bf90475b2f90fe1c503d9bd199bce16.webp",
      alt: " Oil",
    },
    manufacturerName: "Mobil",
    quantity: 2,
    outOfStock: false,
    rating: 3,
    wishList: false,
    price: {
      actualPrice: 591,
      previousPrice: 700,
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
    _id: "707dc483fc3b27ba36f2489c3a514292",
    name: "Castrol Magnatec Diesel Part-Synthetic Oil | 3.5L",
    category: "Oil",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/707dc483fc3b27ba36f2489c3a514292.webp",
      alt: "Engine Oil",
    },
    manufacturerName: "Castrol",
    quantity: 5,
    outOfStock: false,
    rating: 5,
    wishList: false,
    price: {
      actualPrice: 1650,
      previousPrice: 2000,
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
    _id: "c8fb86d8-f2ea-4801-8bbb-c6b9e16672dc",
    name: "Techno Semi Synthetic Engine Oil",
    category: "Oil",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/5e8573a332c2e8e73809b3469fb7c12b.webp",
      alt: "Synthetic Oil",
    },
    manufacturerName: "Motul",
    quantity: 23,
    outOfStock: false,
    rating: 4,
    wishList: false,
    price: {
      actualPrice: 499,
      previousPrice: 600,
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
    _id: "0966391c-9a9d-4e70-a5fe-a5940ba97398",
    name: "Rear Door Latch Left",
    category: "Body",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/bd8d0e591a2f7b0c14a5a2ab20b1efb3.webp",
      alt: "Body",
    },
    manufacturerName: "Spark",
    quantity: 4,
    outOfStock: false,
    rating: 3,
    wishList: false,
    price: {
      actualPrice: 1153,
      previousPrice: 1500,
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
    _id: "cdf4bc9e-e49f-4d0a-a0db-324ecd0a4573",
    name: "Outer Door Handle Front Right",
    category: "Body",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/db8048271245435b0e95107ef5a04240.webp",
      alt: "Body",
    },
    manufacturerName: "Spark",
    quantity: 20,
    outOfStock: false,
    rating: 3,
    wishList: false,
    price: {
      actualPrice: 120,
      previousPrice: 200,
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
    _id: "58660b35-5bb5-42ee-af5f-8901d821c889",
    name: "Tailgate Gas Spring Left",
    category: "Body",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/ac22432bed76e248d99d8f5823393288.webp",
      alt: "Body",
    },
    manufacturerName: "Gabriel",
    quantity: 15,
    outOfStock: false,
    rating: 4,
    wishList: false,
    price: {
      actualPrice: 400,
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
    _id: "1c5aa7be-2c08-424e-bb8f-8d2889b7edb1",
    name: "Glove Box Lock",
    category: "Body",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/fa2a498d6df724e082556fb3ce60b1cb.webp",
      alt: "Body",
    },
    manufacturerName: "Spark",
    quantity: 10,
    outOfStock: false,
    rating: 2,
    wishList: false,
    price: {
      actualPrice: 233,
      previousPrice: 300,
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
    _id: "22e8dcb0-8347-4080-a290-4ee0813886e7",
    name: "Ignition Switch cum Steering Lock 1pc, Door Lock 1pc, with 2 Keys",
    category: "Body",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/871327bc20d018a85de8ef2eea224e80.webp",
      alt: "Body",
    },
    manufacturerName: "Spark",
    quantity: 15,
    outOfStock: false,
    rating: 1,
    wishList: false,
    price: {
      actualPrice: 539,
      previousPrice: 700,
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
    _id: "c3a04c63-f260-44ac-8273-d35137cbd007",
    name: "Rear Brake Shoe Sets",
    category: "SC",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/1181accf9ea63855828d581db182a055.webp",
      alt: "Body",
    },
    manufacturerName: "Spark",
    quantity: 5,
    outOfStock: false,
    rating: 1,
    wishList: false,
    price: {
      actualPrice: 479,
      previousPrice: 700,
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
    _id: "d8106b65-0896-468f-97a7-ac0f5f6c5a1c",
    name: "Rubber Hose Front Brake Right",
    category: "Brakes",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/e5927412777a57b817b70dffbd126cab.webp",
      alt: "Brakes",
    },
    manufacturerName: "Bravo",
    quantity: 10,
    outOfStock: false,
    rating: 1,
    wishList: false,
    price: {
      actualPrice: 479,
      previousPrice: 700,
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
    _id: "a201d1cebcd4fd53cb19655111ee68fa",
    name: "Rear Brake Shoe Set",
    category: "Brakes",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/a201d1cebcd4fd53cb19655111ee68fa.webp",
      alt: "Brakes",
    },
    manufacturerName: "SC",
    quantity: 15,
    outOfStock: false,
    rating: 1,
    wishList: false,
    price: {
      actualPrice: 977,
      previousPrice: 1100,
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
    _id: "f56deab548694a03057527cb266c7593",
    name: "Parking Brake Cable Rear",
    category: "Brakes",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/f56deab548694a03057527cb266c7593.webp",
      alt: "Brakes",
    },
    manufacturerName: "NEW ERA",
    quantity: 12,
    outOfStock: false,
    rating: 1,
    wishList: false,
    price: {
      actualPrice: 493,
      previousPrice: 600,
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
    _id: "77f25f4b2b50a39c2cd9f8efbd830832",
    name: "Starter Motor",
    category: "Engine",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/77f25f4b2b50a39c2cd9f8efbd830832.webp",
      alt: "Engine",
    },
    manufacturerName: "Valeo",
    quantity: 10,
    outOfStock: false,
    rating: 1,
    wishList: false,
    price: {
      actualPrice: 2000,
      previousPrice: 2400,
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
    _id: "49990248f216a4c16f17a65eac603e4e",
    name: "Front Engine Mounting",
    category: "Engine",
    image: {
      src: "https://boodmo.com/media/cache/catalog_part/images/parts/49990248f216a4c16f17a65eac603e4e.webp",
      alt: "Engine",
    },
    manufacturerName: "Valeo",
    quantity: 15,
    outOfStock: false,
    rating: 3,
    wishList: false,
    price: {
      actualPrice: 420,
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
];
