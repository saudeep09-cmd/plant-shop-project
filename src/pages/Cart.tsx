import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! 🌱');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any plants to your cart yet. 
                Start building your green collection!
              </p>
              <Link 
                to="/products"
                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Shopping Cart
          </h1>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-6 border-b border-gray-200 last:border-b-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-emerald-600 font-bold">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    
                    <span className="w-8 text-center font-semibold text-gray-800">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors"
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 px-6 py-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-800">
                  Total Items: {totalItems}
                </span>
                <span className="text-2xl font-bold text-emerald-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/products"
                  className="flex-1 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold transition-all"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Link>
                
                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;