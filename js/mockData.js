/**
 * GeoPulse: Urban & Campus Smart Explorer
 * Local OpenStreetMap POI Dataset (Bangalore University & Central Tech Corridor)
 * Used as high-reliability cache and fallback for live OSM Overpass/Nominatim API queries.
 */

const OSM_DEFAULT_CENTER = {
  lat: 12.9344,
  lng: 77.6060,
  name: "CHRIST (Deemed to be University), Central Campus, Bengaluru",
  zoom: 15
};

const OSM_MOCK_POIS = [
  // HEALTHCARE & EMERGENCY
  {
    id: "osm_node_101",
    name: "St. John's Medical College & Hospital",
    category: "healthcare",
    categoryLabel: "Hospital & Emergency",
    lat: 12.9312,
    lng: 77.6200,
    address: "Sarjapur Road, John Nagar, Koramangala, Bengaluru",
    openingHours: "Open 24/7 (Emergency Available)",
    phone: "+91 80 2206 5000",
    rating: 4.6,
    tags: {
      amenity: "hospital",
      emergency: "yes",
      healthcare: "hospital",
      wheelchair: "yes"
    },
    studentTip: "24/7 casualty wing with dedicated student emergency desk."
  },
  {
    id: "osm_node_102",
    name: "Apollo Clinic & Diagnostic Center",
    category: "healthcare",
    categoryLabel: "Clinic & Pharmacy",
    lat: 12.9360,
    lng: 77.6110,
    address: "Hosur Main Road, Near Forum Mall, Bengaluru",
    openingHours: "08:00 AM - 09:00 PM",
    phone: "+91 80 4111 2233",
    rating: 4.4,
    tags: {
      amenity: "clinic",
      healthcare: "clinic",
      pharmacy: "yes"
    },
    studentTip: "Discounted routine checkups and quick lab diagnostic reports."
  },
  {
    id: "osm_node_103",
    name: "MedPlus 24x7 Pharmacy",
    category: "healthcare",
    categoryLabel: "Pharmacy",
    lat: 12.9330,
    lng: 77.6045,
    address: "SG Palya Main Road, Opposite Christ Back Gate",
    openingHours: "Open 24/7",
    phone: "+91 80 6789 0123",
    rating: 4.3,
    tags: {
      amenity: "pharmacy",
      healthcare: "pharmacy",
      dispensing: "yes"
    },
    studentTip: "Reliable 24-hour medicine stock right outside the campus gate."
  },

  // CAFES & STUDY SPOTS
  {
    id: "osm_node_201",
    name: "Third Wave Coffee - Koramangala Hub",
    category: "cafe",
    categoryLabel: "Study Cafe & Work Hub",
    lat: 12.9352,
    lng: 77.6185,
    address: "1st Block, Koramangala, Bengaluru",
    openingHours: "08:00 AM - 11:30 PM",
    phone: "+91 80 4321 8765",
    rating: 4.8,
    tags: {
      amenity: "cafe",
      internet_access: "wlan",
      power_supply: "yes",
      outdoor_seating: "yes"
    },
    studentTip: "High-speed Wi-Fi, abundant charging points, and quiet group discussion desks."
  },
  {
    id: "osm_node_202",
    name: "Christ Central Library & Knowledge Center",
    category: "cafe",
    categoryLabel: "Academic Library",
    lat: 12.9348,
    lng: 77.6062,
    address: "Block II, CHRIST Central Campus, Hosur Road",
    openingHours: "08:30 AM - 09:00 PM",
    phone: "+91 80 4012 9100",
    rating: 4.9,
    tags: {
      amenity: "library",
      access: "students",
      quiet_zone: "strict"
    },
    studentTip: "Silent research cubicles, vast journals archive, and digital media terminals."
  },
  {
    id: "osm_node_203",
    name: "Chai Point & Reader's Corner",
    category: "cafe",
    categoryLabel: "Budget Cafe",
    lat: 12.9340,
    lng: 77.6080,
    address: "Tavarekere Main Road, Bengaluru",
    openingHours: "07:30 AM - 10:00 PM",
    phone: "+91 80 2345 6789",
    rating: 4.2,
    tags: {
      amenity: "cafe",
      cuisine: "tea",
      takeaway: "yes"
    },
    studentTip: "Affordable ginger tea, quick snacks, and fast UPI payment queues."
  },

  // AFFORDABLE STUDENT DINING
  {
    id: "osm_node_301",
    name: "Christ Gourmet South Canteen",
    category: "dining",
    categoryLabel: "Student Canteen",
    lat: 12.9338,
    lng: 77.6058,
    address: "Audi Block Basement, CHRIST University",
    openingHours: "07:30 AM - 06:30 PM",
    phone: "+91 80 4012 9000",
    rating: 4.7,
    tags: {
      amenity: "food_court",
      diet: "vegetarian_friendly",
      budget: "$"
    },
    studentTip: "Subsidized hot South Indian meals, fresh juices, and quick meal combos."
  },
  {
    id: "osm_node_302",
    name: "Keventers & Kathi Roll Junction",
    category: "dining",
    categoryLabel: "Fast Casual Dining",
    lat: 12.9365,
    lng: 77.6095,
    address: "Bhavani Nagar, SG Palya, Bengaluru",
    openingHours: "11:00 AM - 11:00 PM",
    phone: "+91 98450 12345",
    rating: 4.5,
    tags: {
      amenity: "fast_food",
      cuisine: "rolls",
      student_discount: "10%"
    },
    studentTip: "Popular student late-night snack spot with verified student ID discounts."
  },
  {
    id: "osm_node_303",
    name: "Udupi Garden Vegetarian Thali",
    category: "dining",
    categoryLabel: "Budget Restaurant",
    lat: 12.9315,
    lng: 77.6105,
    address: "Bannerghatta Main Road, Near Dairy Circle",
    openingHours: "07:00 AM - 10:30 PM",
    phone: "+91 80 2668 1122",
    rating: 4.3,
    tags: {
      amenity: "restaurant",
      cuisine: "south_indian",
      budget: "$"
    },
    studentTip: "Unlimited student thalis under ₹120 with rapid hygienic service."
  },

  // TRANSIT & METRO
  {
    id: "osm_node_401",
    name: "Dairy Circle BMTC Transit Station",
    category: "transit",
    categoryLabel: "Bus Rapid Transit",
    lat: 12.9325,
    lng: 77.6025,
    address: "Hosur Road - Dairy Circle Flyover, Bengaluru",
    openingHours: "05:00 AM - 11:30 PM",
    phone: "1800-425-1663",
    rating: 4.1,
    tags: {
      highway: "bus_stop",
      public_transport: "platform",
      routes: "V-360B, 365, 342, 356"
    },
    studentTip: "Direct AC and non-AC feeder buses to Majestic, Electronic City, and Koramangala."
  },
  {
    id: "osm_node_402",
    name: "South End Circle Metro Station (Green Line)",
    category: "transit",
    categoryLabel: "Namma Metro Station",
    lat: 12.9288,
    lng: 77.5815,
    address: "Patalamma Temple Rd, Basavanagudi, Bengaluru",
    openingHours: "05:00 AM - 11:00 PM",
    phone: "+91 80 2519 1091",
    rating: 4.7,
    tags: {
      railway: "station",
      station: "subway",
      line: "Namma Metro Green Line"
    },
    studentTip: "10 mins by feeder auto; fastest way to avoid Hosur Road peak traffic."
  },
  {
    id: "osm_node_403",
    name: "BTM Layout Ring Road Bus Terminal",
    category: "transit",
    categoryLabel: "Intercity & City Transit",
    lat: 12.9165,
    lng: 77.6100,
    address: "Outer Ring Road, BTM 2nd Stage, Bengaluru",
    openingHours: "24 Hours Service",
    phone: "1800-425-1663",
    rating: 4.0,
    tags: {
      amenity: "bus_station",
      intercity: "yes",
      smart_card: "accepted"
    },
    studentTip: "Catch direct buses towards Silk Board, Whitefield, and Hebbal tech corridors."
  }
];

// Helper to calculate Haversine distance in kilometers
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(2));
}

// Convert distance to estimated walking time in minutes (average speed ~4.5 km/h)
function estimateWalkingTime(distanceKm) {
  const minutes = Math.round((distanceKm / 4.5) * 60);
  return minutes < 1 ? "< 1 min" : `${minutes} mins walk`;
}
