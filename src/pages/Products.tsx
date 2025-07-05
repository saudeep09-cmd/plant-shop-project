import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { plants, categories } from '../data/plants';
import { RootState } from '../store/store';
import { ShoppingCart } from 'lucide-react';

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = (plant: any) => {
    dispatch(addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));
  };

  const isInCart = (plantId: number) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Plant Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium houseplants, 
            perfect for bringing nature into your home.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {category}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plants
                .filter(plant => plant.category === category)
                .map((plant) => (
                  <div 
                    key={plant.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={plant.image} 
                        alt={plant.name}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {plant.name}
                      </h3>
                      <p className="text-2xl font-bold text-emerald-600 mb-4">
                        ${plant.price}
                      </p>
                      
                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                        className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                          isInCart(plant.id)
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
                        }`}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        <span>
                          {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;