import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Header: React.FC = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors">
            <Leaf className="h-8 w-8" />
            <span className="text-2xl font-bold">GreenLeaf</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-emerald-600' 
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors ${
                location.pathname === '/products' 
                  ? 'text-emerald-600' 
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Products
            </Link>
          </nav>

          <Link 
            to="/cart" 
            className="relative flex items-center space-x-2 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full transition-colors"
          >
            <ShoppingCart className="h-5 w-5 text-emerald-600" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
            <span className="text-emerald-600 font-medium hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;