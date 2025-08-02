import React, { useState } from 'react';

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const totalPrice = price * calculateNights();

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          <span className="text-3xl">${price}</span>
          <span className="text-lg font-normal text-gray-600"> / night</span>
        </h3>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2 border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 border-r border-gray-300">
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm text-gray-900 focus:outline-none"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm text-gray-900 focus:outline-none"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-3">
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full text-sm text-gray-900 focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} guest{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg mt-6 hover:from-pink-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105">
        Reserve now
      </button>

      {calculateNights() > 0 && (
        <div className="mt-6 space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>${price} × {calculateNights()} nights</span>
            <span>${price * calculateNights()}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Service fee</span>
            <span>${Math.round(totalPrice * 0.14)}</span>
          </div>
          <div className="border-t border-gray-300 pt-3">
            <div className="flex justify-between text-lg font-semibold text-gray-900">
              <span>Total</span>
              <span>${totalPrice + Math.round(totalPrice * 0.14)}</span>
            </div>
          </div>
        </div>
      )}

      <p className="text-center text-sm text-gray-500 mt-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingSection;
