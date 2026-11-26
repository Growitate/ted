import {
  FRESHMAN_OPERATIONS,
  SCHOLAR_ALL_OPERATIONS,
  GRADUATE_ALL_OPERATIONS,
  DOCTORATE_ALL_OPERATIONS,
  TWO_WHEELER_FRESHMAN_OPERATIONS,
  TWO_WHEELER_DOCTORATE_OPERATIONS
} from './detailingOperations.js';

export const CARS_DATA = [
  {
    id: "freshman-car-package",
    slug: "freshman-car-package",
    name: "Freshman",
    badge: "01 · The Fundamentals",
    bodyStyle: "Car Package",
    price: 499,
    year: 2026,
    fuel: "0-4 TDS Water",
    transmission: "pH-Neutral Wash",
    engine: "Material-Safe Chemistry",
    horsepower: "TDS 0-4",
    zeroToSixty: "pH 7.0",
    topSpeed: "Pure Care",
    mileage: "For Cars",
    drivetrain: "Routine Maintenance",
    exteriorColor: "Deionized Water Wash",
    interiorColor: "Microfiber Dust & Vacuum",
    image: "/images/freshman_car_wash.png",
    gallery: [
      "/images/freshman_car_wash.png",
      "/images/hero_detailing_studio.png"
    ],
    description: "The fundamental routine maintenance care for four-wheelers. Features a pH-neutral shampoo bath, exterior pre-rinse, microfiber hand drying, and TED's signature 0–4 TDS deionized-water spot-free rinse, paired with interior dusting, cabin vacuuming, and floor mat cleaning.",
    features: [
      "Initial vehicle inspection & condition check",
      "Wheel and tyre surface cleaning",
      "Exterior pre-rinse & pH-neutral shampoo wash",
      "Exterior panel cleaning & exterior glass cleaning",
      "Deionized-water final rinse (0-4 TDS)",
      "Interior dust removal using clean microfiber",
      "Interior vacuuming & floor mat cleaning and placement"
    ],
    operationsCount: 10,
    operations: FRESHMAN_OPERATIONS
  },
  {
    id: "scholar-car-package",
    slug: "scholar-car-package",
    name: "Scholar",
    badge: "02 · Enhanced Care",
    bodyStyle: "Car Package",
    price: 999,
    year: 2026,
    fuel: "Decontamination & Dressing",
    transmission: "Enhanced Wash",
    engine: "Koch Chemie & Vonixx",
    horsepower: "Enhanced",
    zeroToSixty: "Gloss Lift",
    topSpeed: "Precision",
    mileage: "For Cars",
    drivetrain: "Surface Enhancement",
    exteriorColor: "Wheel Arch & Trim Dressing",
    interiorColor: "Dashboard & Console Clean",
    image: "/images/scholar_car_decontam.png",
    gallery: [
      "/images/scholar_car_decontam.png",
      "/images/graduate_paint_correction.png"
    ],
    description: "An enhanced detailing standard building on Freshman with comprehensive surface care. Adds thorough wheel-face and arch cleaning, long-lasting tyre dressing, exterior plastic trim restoration, door-jamb wiping, and interior dashboard and console detailing.",
    features: [
      "Everything included in Freshman package",
      "Detailed wheel-face & accessible wheel-arch cleaning",
      "Tyre dressing application & exterior plastic-trim dressing",
      "Door-jamb cleaning & interior door-panel cleaning",
      "Dashboard microfiber cleaning & centre-console surface cleaning",
      "Interior glass cleaning & dusting of accessible crevices"
    ],
    operationsCount: 20,
    operations: SCHOLAR_ALL_OPERATIONS
  },
  {
    id: "graduate-car-package",
    slug: "graduate-car-package",
    name: "Graduate",
    badge: "03 · Deep Cleaning",
    bodyStyle: "Car Package",
    price: 2499,
    year: 2026,
    fuel: "Touchless Pre-Rinse & Steam",
    transmission: "Deep Extraction",
    engine: "Targeted Chemistry",
    horsepower: "Deep Clean",
    zeroToSixty: "Revival",
    topSpeed: "Sanitization",
    mileage: "For Cars",
    drivetrain: "Deep Restoration",
    exteriorColor: "Touchless Pre-Wash Chem",
    interiorColor: "Steam & Odour Neutralisation",
    image: "/images/graduate_paint_correction.png",
    gallery: [
      "/images/graduate_paint_correction.png",
      "/images/doctorate_ceramic_coating.png"
    ],
    description: "A targeted deep-cleaning treatment for vehicles demanding intensive interior and exterior attention. Incorporates touchless pre-wash chemistry, high-temperature steam cleaning on suitable surfaces, deep carpet and seat care, and active odour neutralisation.",
    features: [
      "Everything included in Scholar package",
      "Touchless pre-rinse using suitable pre-wash chemistry",
      "Steam cleaning of suitable interior surfaces",
      "Deep cleaning of floor mats, carpets & floor areas",
      "Fabric-seat cleaning & targeted stain treatment where appropriate",
      "Detailed cleaning of accessible seat crevices, cup holders & seat rails",
      "Steering-wheel, control-area & door pockets deep clean",
      "Interior odour-source inspection & neutralisation treatment (Ozone optional)"
    ],
    operationsCount: 37,
    operations: GRADUATE_ALL_OPERATIONS
  },
  {
    id: "doctorate-car-package",
    slug: "doctorate-car-package",
    name: "Doctorate",
    badge: "04 · Comprehensive Detailing",
    bodyStyle: "Car Package",
    price: 4499,
    year: 2026,
    fuel: "Specialised Surface Care",
    transmission: "105-Step Detailing SOP",
    engine: "Flagship Technical Care",
    horsepower: "Master Level",
    zeroToSixty: "Pinnacle Care",
    topSpeed: "Full Armor",
    mileage: "For Cars",
    drivetrain: "Comprehensive Perfection",
    exteriorColor: "Iron Decon & Intricate Crevices",
    interiorColor: "Delicate Trim & Air-Vent Detailing",
    image: "/images/doctorate_ceramic_coating.png",
    gallery: [
      "/images/doctorate_ceramic_coating.png",
      "/images/hero_detailing_studio.png"
    ],
    description: "TED's flagship 105-step comprehensive detailing treatment. Features meticulous cleaning of accessible panel gaps, badges, piano-black trims, delicate infotainment switches, air-vent fins, leather conditioning, iron decontamination, and reusable performance air filter care.",
    features: [
      "Everything included in Graduate package",
      "Intricate cleaning of panel gaps, badges, grille, door handles & mirror crevices",
      "Weather seals, door hinges & fuel-filler area cleaning",
      "Delicate finishes, piano-black trim & infotainment controls care",
      "Air-vent fins, gear selector, switches & handbrake precision detailing",
      "Leather cleaning & conditioning / Fabric extraction where suitable",
      "Wheel barrels, spokes, arches & targeted iron decontamination",
      "Bonded contamination removal & final deionized-water rinse",
      "Compatible reusable performance air filter inspection & cleaning",
      "Completion of 105-step detailing quality-control checklist"
    ],
    operationsCount: 105,
    operations: DOCTORATE_ALL_OPERATIONS
  },
  {
    id: "freshman-moto-package",
    slug: "freshman-moto-package",
    name: "Freshman Two-Wheeler",
    badge: "Basic Wash + Trim Restoration",
    bodyStyle: "Motorcycle Package",
    price: 359,
    year: 2026,
    fuel: "0-4 TDS Water",
    transmission: "pH-Neutral Gentle Wash",
    engine: "Material-Safe Chemistry",
    horsepower: "20 Services",
    zeroToSixty: "Safe Wash",
    topSpeed: "Pure Moto",
    mileage: "For Bikes",
    drivetrain: "Routine Maintenance",
    exteriorColor: "Deionised Zero-TDS Rinse",
    interiorColor: "Plastic Trim Dressing",
    image: "/images/freshman_moto_wash.png",
    gallery: [
      "/images/freshman_moto_wash.png"
    ],
    description: "A progressive routine maintenance treatment with 20 included services. Delivers a gentle pH-neutral foam hand wash, tank and mudguard cleaning, lever and visor care, plastic trim dressing, and safe drying with a spot-free deionised-water final rinse.",
    features: [
      "Normal Bikes / Scooty: ₹359 | Premium Segment: ₹459",
      "Initial vehicle inspection & condition check",
      "Pre-rinse & pH-neutral shampoo foam gentle hand wash",
      "Fuel tank, tank-cover, front & rear mudguards cleaning",
      "Basic wheel, rim face & tyre sidewall cleaning",
      "Handlebar, grips, levers, switches & visor cleaning",
      "Accessible exterior crevice cleaning with detailing brushes",
      "Plastic trim dressing to enhance appearance",
      "Deionised-water final rinse, safe drying & final inspection"
    ],
    operationsCount: 20,
    operations: TWO_WHEELER_FRESHMAN_OPERATIONS.map((title, i) => ({ step: i + 1, title, category: "Two-Wheeler Routine" }))
  },
  {
    id: "doctorate-moto-package",
    slug: "doctorate-moto-package",
    name: "Doctorate Two-Wheeler",
    badge: "Signature Detailing",
    bodyStyle: "Motorcycle Package",
    price: 1299,
    year: 2026,
    fuel: "Chain Clean & Lube + Decon",
    transmission: "Signature Moto Detailing",
    engine: "Material-Safe Cleaning",
    horsepower: "20 Detailing SOPs",
    zeroToSixty: "Showroom",
    topSpeed: "Ultimate Shield",
    mileage: "For Bikes",
    drivetrain: "Comprehensive Detailing",
    exteriorColor: "Engine Casing & Water-Mark Treatment",
    interiorColor: "Switchgear & Electronics Care",
    image: "/images/doctorate_moto_detail.png",
    gallery: [
      "/images/doctorate_moto_detail.png"
    ],
    description: "Comprehensive signature two-wheeler detailing with 20 specialised operations. Features thorough wheel and spoke detailing, drive chain degreasing and precision lubrication, sprocket cleaning, material-safe engine casing care, and surface water-mark treatment.",
    features: [
      "Normal Bikes / Scooty: ₹1,299 | Premium Segment: ₹1,899",
      "All 20 services included in Freshman package",
      "Thorough wheel & rim detailing with individual spoke cleaning",
      "Chain cleaning & lubrication + front/rear sprocket cleaning",
      "Water-mark treatment on suitable exterior surfaces",
      "Material-safe engine exterior cleaning & heat-shield detailing",
      "Careful cleaning of electrical housings, electronics & switchgear",
      "Seat cleaning with material-appropriate product & trim treatment",
      "Deionised-water final rinse, controlled drying & final QC inspection"
    ],
    operationsCount: 20,
    operations: TWO_WHEELER_DOCTORATE_OPERATIONS.map((title, i) => ({ step: i + 1, title, category: "Two-Wheeler Signature" }))
  }
];

export const VEHICLE_CATEGORIES = [
  'Hatchback',
  'Sedan',
  'Compact SUV',
  'SUV',
  'Luxury vehicle',
  'Lifestyle truck'
];

export const CATEGORY_PRICING = {
  'Hatchback': {
    'freshman-car-package': 499,
    'scholar-car-package': 999,
    'graduate-car-package': 2499,
    'doctorate-car-package': 4499,
  },
  'Sedan': {
    'freshman-car-package': 599,
    'scholar-car-package': 1099,
    'graduate-car-package': 2799,
    'doctorate-car-package': 4999,
  },
  'Compact SUV': {
    'freshman-car-package': 659,
    'scholar-car-package': 1199,
    'graduate-car-package': 3099,
    'doctorate-car-package': 5499,
  },
  'SUV': {
    'freshman-car-package': 699,
    'scholar-car-package': 1299,
    'graduate-car-package': 3399,
    'doctorate-car-package': 5999,
  },
  'Luxury vehicle': {
    'freshman-car-package': 749,
    'scholar-car-package': 1499,
    'graduate-car-package': 4199,
    'doctorate-car-package': 7499,
  },
  'Luxury': {
    'freshman-car-package': 749,
    'scholar-car-package': 1499,
    'graduate-car-package': 4199,
    'doctorate-car-package': 7499,
  },
  'Lifestyle truck': {
    'freshman-car-package': 859,
    'scholar-car-package': 1699,
    'graduate-car-package': 4799,
    'doctorate-car-package': 8499,
  },
  'Lifestyle Trucks': {
    'freshman-car-package': 859,
    'scholar-car-package': 1699,
    'graduate-car-package': 4799,
    'doctorate-car-package': 8499,
  }
};

export const TWO_WHEELER_PRICING = [
  {
    packageId: 'freshman-moto-package',
    name: 'Freshman Two-Wheeler',
    scope: 'Basic wash + plastic trim restoration',
    normalPrice: 359,
    premiumPrice: 459,
    servicesCount: 20
  },
  {
    packageId: 'doctorate-moto-package',
    name: 'Doctorate Two-Wheeler',
    scope: 'Comprehensive signature two-wheeler detailing',
    normalPrice: 1299,
    premiumPrice: 1899,
    servicesCount: 20
  }
];

export const CAR_MODELS_DB = {
  'BMW': [
    { model: '5 Series', category: 'Luxury vehicle' },
    { model: '3 Series Gran Limousine', category: 'Luxury vehicle' },
    { model: 'M340i', category: 'Luxury vehicle' },
    { model: '7 Series', category: 'Luxury vehicle' },
    { model: 'X1', category: 'Compact SUV' },
    { model: 'X3', category: 'Luxury vehicle' },
    { model: 'X5', category: 'Luxury vehicle' },
    { model: 'X7', category: 'Luxury vehicle' },
    { model: 'M5 / M8', category: 'Luxury vehicle' },
    { model: 'Z4 Roadster', category: 'Luxury vehicle' },
    { model: 'i4 / i7 Electric', category: 'Luxury vehicle' }
  ],
  'Mercedes-Benz': [
    { model: 'E-Class', category: 'Luxury vehicle' },
    { model: 'C-Class', category: 'Luxury vehicle' },
    { model: 'S-Class', category: 'Luxury vehicle' },
    { model: 'GLA', category: 'Compact SUV' },
    { model: 'GLC', category: 'Luxury vehicle' },
    { model: 'GLE', category: 'Luxury vehicle' },
    { model: 'GLS', category: 'Luxury vehicle' },
    { model: 'G-Wagon (G 63)', category: 'Luxury vehicle' },
    { model: 'AMG GT', category: 'Luxury vehicle' }
  ],
  'Audi': [
    { model: 'A4', category: 'Luxury vehicle' },
    { model: 'A6', category: 'Luxury vehicle' },
    { model: 'A8 L', category: 'Luxury vehicle' },
    { model: 'Q3', category: 'Compact SUV' },
    { model: 'Q5', category: 'Luxury vehicle' },
    { model: 'Q7', category: 'Luxury vehicle' },
    { model: 'Q8', category: 'Luxury vehicle' },
    { model: 'RS e-tron GT', category: 'Luxury vehicle' }
  ],
  'Porsche': [
    { model: '911 Carrera / GT3', category: 'Luxury vehicle' },
    { model: '718 Cayman / Boxster', category: 'Luxury vehicle' },
    { model: 'Macan', category: 'Luxury vehicle' },
    { model: 'Cayenne', category: 'Luxury vehicle' },
    { model: 'Panamera', category: 'Luxury vehicle' },
    { model: 'Taycan', category: 'Luxury vehicle' }
  ],
  'Toyota': [
    { model: 'Fortuner / Legender', category: 'SUV' },
    { model: 'Hilux', category: 'Lifestyle truck' },
    { model: 'Innova Crysta / Hycross', category: 'SUV' },
    { model: 'Glanza', category: 'Hatchback' },
    { model: 'Urban Cruiser Taisor', category: 'Compact SUV' },
    { model: 'Camry Hybrid', category: 'Luxury vehicle' },
    { model: 'Land Cruiser 300', category: 'Luxury vehicle' },
    { model: 'Vellfire', category: 'Luxury vehicle' }
  ],
  'Mahindra': [
    { model: 'Thar 3-Door / Thar Roxx 5-Door', category: 'Lifestyle truck' },
    { model: 'Scorpio-N', category: 'SUV' },
    { model: 'Scorpio Classic', category: 'SUV' },
    { model: 'XUV700', category: 'SUV' },
    { model: 'XUV3XO / XUV300', category: 'Compact SUV' },
    { model: 'Bolero / Bolero Neo', category: 'SUV' }
  ],
  'Tata': [
    { model: 'Nexon / Nexon EV', category: 'Compact SUV' },
    { model: 'Punch / Punch EV', category: 'Compact SUV' },
    { model: 'Harrier', category: 'SUV' },
    { model: 'Safari', category: 'SUV' },
    { model: 'Altroz', category: 'Hatchback' },
    { model: 'Tiago', category: 'Hatchback' },
    { model: 'Curvv / Curvv EV', category: 'Sedan' },
    { model: 'Yodha Pickup', category: 'Lifestyle truck' }
  ],
  'Hyundai': [
    { model: 'i20 / i20 N Line', category: 'Hatchback' },
    { model: 'Grand i10 Nios', category: 'Hatchback' },
    { model: 'Verna', category: 'Sedan' },
    { model: 'Aura', category: 'Sedan' },
    { model: 'Exter / Venue', category: 'Compact SUV' },
    { model: 'Creta / Creta N Line', category: 'Compact SUV' },
    { model: 'Alcazar', category: 'SUV' },
    { model: 'Tucson', category: 'SUV' },
    { model: 'Ioniq 5 EV', category: 'Luxury vehicle' }
  ],
  'Isuzu': [
    { model: 'D-Max V-Cross', category: 'Lifestyle truck' },
    { model: 'Hi-Lander', category: 'Lifestyle truck' },
    { model: 'MU-X', category: 'SUV' }
  ],
  'Ford': [
    { model: 'Endeavour', category: 'SUV' },
    { model: 'Mustang V8', category: 'Luxury vehicle' },
    { model: 'Ranger / F-150', category: 'Lifestyle truck' },
    { model: 'EcoSport', category: 'Compact SUV' }
  ],
  'Land Rover': [
    { model: 'Defender 90 / 110 / 130', category: 'Luxury vehicle' },
    { model: 'Range Rover', category: 'Luxury vehicle' },
    { model: 'Range Rover Sport', category: 'Luxury vehicle' },
    { model: 'Range Rover Velar', category: 'Luxury vehicle' },
    { model: 'Range Rover Evoque', category: 'Luxury vehicle' },
    { model: 'Discovery / Discovery Sport', category: 'Luxury vehicle' }
  ],
  'Maruti Suzuki': [
    { model: 'Swift / Baleno', category: 'Hatchback' },
    { model: 'Dzire', category: 'Sedan' },
    { model: 'Brezza / Fronx / Jimny', category: 'Compact SUV' },
    { model: 'Grand Vitara', category: 'Compact SUV' },
    { model: 'Invicto', category: 'SUV' },
    { model: 'Ciaz', category: 'Sedan' }
  ],
  'Honda': [
    { model: 'City / City e:HEV Hybrid', category: 'Sedan' },
    { model: 'Amaze', category: 'Sedan' },
    { model: 'Elevate', category: 'Compact SUV' }
  ],
  'Volkswagen': [
    { model: 'Virtus', category: 'Sedan' },
    { model: 'Taigun', category: 'Compact SUV' },
    { model: 'Tiguan', category: 'SUV' },
    { model: 'Polo', category: 'Hatchback' }
  ],
  'Skoda': [
    { model: 'Slavia', category: 'Sedan' },
    { model: 'Kushaq', category: 'Compact SUV' },
    { model: 'Kodiaq', category: 'SUV' },
    { model: 'Superb / Octavia', category: 'Luxury vehicle' }
  ],
  'Kia': [
    { model: 'Seltos', category: 'Compact SUV' },
    { model: 'Sonet', category: 'Compact SUV' },
    { model: 'Carens', category: 'SUV' },
    { model: 'EV6 / Carnival', category: 'Luxury vehicle' }
  ]
};
