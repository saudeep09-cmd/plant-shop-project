import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Shield } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="text-emerald-400">GreenLeaf</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Transform your space with nature's finest companions. 
            Discover our curated collection of premium houseplants, 
            carefully selected to bring life and beauty to your home.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About GreenLeaf</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              At GreenLeaf, we believe that every home deserves the natural beauty and 
              air-purifying benefits of houseplants. Since 2020, we've been passionate 
              about connecting plant lovers with the perfect green companions for their 
              living spaces. Our carefully curated collection features healthy, 
              premium plants that are perfect for both beginners and experienced gardeners.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Hand-selected, healthy plants from trusted growers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Care</h3>
                <p className="text-gray-600">Comprehensive care guides and ongoing support</p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Safe Delivery</h3>
                <p className="text-gray-600">Secure packaging ensures your plants arrive healthy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;