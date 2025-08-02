import React, { useState } from 'react';
import { PropertyProps } from '../../interfaces/index';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getAmenityIcon = (amenity: string) => {
    const icons: { [key: string]: string } = {
      'WiFi': '📶',
      'Pool': '🏊‍♂️',
      'Kitchen': '🍳',
      'Air Conditioning': '❄️',
      'Parking': '🚗',
      'Beach Access': '🏖️',
      'Hot Tub': '🛁',
      'Gym': '💪',
      'Balcony': '🏡',
      'TV': '📺',
      'Fireplace': '🔥',
      'Heating': '🔥',
      'Mountain View': '🏔️',
      'Ski Storage': '⛷️'
    };
    return icons[amenity] || '✅';
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About this place</h3>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities?.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <span className="text-xl">{getAmenityIcon(amenity)}</span>
                    <span className="text-gray-800">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'reviews':
        return property.reviews ? (
          <ReviewSection reviews={property.reviews} rating={property.rating} />
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No reviews yet</p>
          </div>
        );
      case 'host':
        return property.host ? (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src={property.host.avatar} 
                alt={property.host.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">Hosted by {property.host.name}</h3>
                <p className="text-gray-600">Joined in {property.host.joinedDate}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Identity verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Superhost</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">Host information not available</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {property.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h1>
        <div className="flex flex-wrap items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            {renderStars(property.rating)}
            <span className="font-semibold">{property.rating}</span>
            <span className="text-gray-600">
              ({property.reviews?.length || 0} review{(property.reviews?.length || 0) !== 1 ? 's' : ''})
            </span>
          </div>
          <span className="text-gray-600">•</span>
          <span className="text-gray-600">
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
          <div className="md:col-span-2 md:row-span-2">
            <img 
              src={property.image} 
              alt={property.name}
              className="w-full h-64 md:h-full object-cover hover:brightness-90 transition-all duration-200"
            />
          </div>
          {property.images?.slice(1, 5).map((image, index) => (
            <div key={index} className="relative">
              <img 
                src={image} 
                alt={`${property.name} ${index + 2}`}
                className="w-full h-32 md:h-48 object-cover hover:brightness-90 transition-all duration-200"
              />
              {index === 3 && property.images && property.images.length > 5 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    +{property.images.length - 4} more
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab('host')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'host'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                About host
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
