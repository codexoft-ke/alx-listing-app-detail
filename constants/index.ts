import { PropertyProps } from "../interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "luxury-villa-miami",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    rating: 4.8,
    description: "Experience luxury at its finest in this stunning beachfront villa. This magnificent property offers breathtaking ocean views, modern amenities, and elegant design throughout. Perfect for families or groups seeking an unforgettable vacation experience.",
    address: {
      city: "Miami",
      country: "USA",
      street: "123 Ocean Drive"
    },
    category: ["WiFi", "Pool", "Kitchen", "Air Conditioning", "Parking", "Beach Access"],
    price: 450,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    amenities: ["WiFi", "Pool", "Kitchen", "Air Conditioning", "Parking", "Beach Access", "Hot Tub", "Gym", "Balcony", "TV"],
    host: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      joinedDate: "2019"
    },
    reviews: [
      {
        id: "1",
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        rating: 5,
        comment: "Absolutely amazing property! The views were spectacular and the amenities exceeded our expectations. Sarah was a wonderful host and very responsive.",
        date: "2024-01-15"
      },
      {
        id: "2",
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        rating: 5,
        comment: "Perfect location and beautiful property. The pool area was our favorite spot. Highly recommend for anyone visiting Miami!",
        date: "2024-01-08"
      },
      {
        id: "3",
        name: "David Park",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        rating: 4,
        comment: "Great experience overall. The house was clean and well-maintained. Only minor issue was the WiFi speed, but everything else was perfect.",
        date: "2023-12-28"
      }
    ]
  },
  {
    name: "cozy-cabin-aspen",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    description: "Escape to this charming mountain cabin nestled in the heart of Aspen. Features rustic charm with modern conveniences, perfect for ski enthusiasts and nature lovers alike.",
    address: {
      city: "Aspen",
      country: "USA",
      street: "456 Mountain View Road"
    },
    category: ["WiFi", "Fireplace", "Kitchen", "Heating", "Parking"],
    price: 320,
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    amenities: ["WiFi", "Fireplace", "Kitchen", "Heating", "Parking", "Mountain View", "Ski Storage"],
    host: {
      name: "John Miller",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      joinedDate: "2020"
    },
    reviews: [
      {
        id: "4",
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
        rating: 5,
        comment: "Perfect cabin for our ski trip! Very cozy and the fireplace was amazing after long days on the slopes.",
        date: "2024-02-01"
      }
    ]
  }
];
