export interface SubCategory {
  label: string;
  value: string;
  level: number;
}

export interface Category {
  label: string;
  value: string;
  level: number;
  subCategories?: SubCategory[];
}

export const categories: Category[] = [
  {
    label: "Avatars",
    value: "avatars",
    level: 0,
    subCategories: [
      { label: "Human-like", value: "humanLike", level: 1 },
      { label: "Antro & Furry", value: "antroAndFurry", level: 1 },
      { label: "Robot and Cybrogs", value: "robotAndCybrogs", level: 1 },
      { label: "Others", value: "others", level: 1 },
      { label: "All in Avatars", value: "allInAvatars", level: 1 },
    ],
  },
  {
    label: "Fashion",
    value: "fashion",
    level: 0,
    subCategories: [
      { label: "Cloths", value: "cloths", level: 1 },
      { label: "Accessories", value: "accessories", level: 1 },
      { label: "Others", value: "others", level: 1 },
      { label: "All in Avatars", value: "allInAvatars", level: 1 },
    ],
  },
  {
    label: "All",
    value: "all",
    level: 0,
    subCategories: [],
  },
];

export interface Product {
  id: number;
  productName: string;
  creatorName: string;
  rating: number;
  price: number;
  category: string[];
}

export const products: Product[] = [
  {
    id: 1,
    productName: "Human Avatar Model",
    creatorName: "John Doe",
    rating: 4.5,
    price: 49.99,
    category: ["avatars", "humanLike"],
  },
  {
    id: 2,
    productName: "Furry Character Set",
    creatorName: "Jane Smith",
    rating: 4.8,
    price: 69.99,
    category: ["avatars", "antroAndFurry"],
  },
  {
    id: 3,
    productName: "Robot Avatar Pack",
    creatorName: "Techy123",
    rating: 4.3,
    price: 39.99,
    category: ["avatars", "robotAndCybrogs"],
  },
  {
    id: 4,
    productName: "Mystery Avatar Collection",
    creatorName: "MysticMaker",
    rating: 4.6,
    price: 29.99,
    category: ["avatars", "others"],
  },
  {
    id: 5,
    productName: "Ultimate Avatar Bundle",
    creatorName: "ProDesigns",
    rating: 4.9,
    price: 89.99,
    category: ["avatars", "allInAvatars"],
  },
  {
    id: 6,
    productName: "Casual Clothing Set",
    creatorName: "Fashionista",
    rating: 4.7,
    price: 24.99,
    category: ["fashion", "cloths"],
  },
  {
    id: 7,
    productName: "Elegant Accessories Pack",
    creatorName: "JewelsCraft",
    rating: 4.5,
    price: 15.99,
    category: ["fashion", "accessories"],
  },
  {
    id: 8,
    productName: "Miscellaneous Fashion Items",
    creatorName: "TrendyMix",
    rating: 4.2,
    price: 19.99,
    category: ["fashion", "others"],
  },
  {
    id: 9,
    productName: "Complete Fashion Ensemble",
    creatorName: "HighStyle",
    rating: 4.8,
    price: 79.99,
    category: ["fashion", "allInAvatars"],
  },
  {
    id: 10,
    productName: "Avatar Starter Kit",
    creatorName: "FirstStep",
    rating: 4.1,
    price: 12.99,
    category: ["avatars", "humanLike"],
  },
  {
    id: 11,
    productName: "Furry Themed Avatar Pack",
    creatorName: "ArtisanFurr",
    rating: 4.6,
    price: 35.99,
    category: ["avatars", "antroAndFurry"],
  },
  {
    id: 12,
    productName: "High-Tech Robot Models",
    creatorName: "CyberWorks",
    rating: 4.9,
    price: 59.99,
    category: ["avatars", "robotAndCybrogs"],
  },
  {
    id: 13,
    productName: "Unique Avatar Concepts",
    creatorName: "CreativeMinds",
    rating: 4.4,
    price: 22.99,
    category: ["avatars", "others"],
  },
  {
    id: 14,
    productName: "All-inclusive Avatar Set",
    creatorName: "AllForOne",
    rating: 4.9,
    price: 95.99,
    category: ["avatars", "allInAvatars"],
  },
  {
    id: 15,
    productName: "Designer Clothing Pack",
    creatorName: "ClothWorks",
    rating: 4.7,
    price: 45.99,
    category: ["fashion", "cloths"],
  },
  {
    id: 16,
    productName: "Accessory Mega Bundle",
    creatorName: "StyleSupreme",
    rating: 4.5,
    price: 28.99,
    category: ["fashion", "accessories"],
  },
  {
    id: 17,
    productName: "Fashion Variety Kit",
    creatorName: "VarietyVibes",
    rating: 4.3,
    price: 34.99,
    category: ["fashion", "others"],
  },
  {
    id: 18,
    productName: "Ultimate Fashion Pack",
    creatorName: "StyleGuru",
    rating: 4.8,
    price: 99.99,
    category: ["fashion", "allInAvatars"],
  },
  {
    id: 19,
    productName: "Mixed Avatar Set",
    creatorName: "BlendCreations",
    rating: 4.2,
    price: 18.99,
    category: ["avatars", "others"],
  },
  {
    id: 20,
    productName: "Robot-Centric Avatar Kit",
    creatorName: "FutureFaces",
    rating: 4.6,
    price: 42.99,
    category: ["avatars", "robotAndCybrogs"],
  },
];
