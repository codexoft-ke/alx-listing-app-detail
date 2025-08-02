export interface PropertyProps {
  name: string;
  image: string;
  rating: number;
  description: string;
  address: {
    city: string;
    country: string;
    street?: string;
  };
  category: string[];
  price: number;
  reviews?: ReviewProps[];
  amenities?: string[];
  images?: string[];
  host?: {
    name: string;
    avatar: string;
    joinedDate: string;
  };
}

export interface ReviewProps {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BookingProps {
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}
