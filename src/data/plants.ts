export interface Plant {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const plants: Plant[] = [
  // Indoor Plants
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 45.99,
    image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Indoor Plants"
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 89.99,
    image: "https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Indoor Plants"
  },
  
  // Succulents
  {
    id: 3,
    name: "Echeveria Collection",
    price: 24.99,
    image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Succulents"
  },
  {
    id: 4,
    name: "Jade Plant",
    price: 32.99,
    image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Succulents"
  },
  
  // Flowering Plants
  {
    id: 5,
    name: "Peace Lily",
    price: 39.99,
    image: "https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Flowering Plants"
  },
  {
    id: 6,
    name: "Orchid",
    price: 54.99,
    image: "https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Flowering Plants"
  }
];

export const categories = ["Indoor Plants", "Succulents", "Flowering Plants"];