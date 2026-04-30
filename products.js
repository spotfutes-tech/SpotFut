/* ================================
   DEFAULT DESCRIPTIONS SYSTEM
================================ */

// Global fallback (used if nothing else exists)
const DEFAULT_DESCRIPTION = 
"Premium quality sportswear engineered for comfort, durability, and performance. Designed for everyday athletes and professionals.";

// Category-based (for kits, etc.)
const CATEGORY_DESCRIPTIONS = {
soccer_kits_men: "Elite performance soccer kit designed for speed, breathability, and durability. \n\n Material : Interlock 100% Polyester (GSM 140-170).",
soccer_kits_women: "Elite performance soccer kit designed for speed, breathability, and durability. \n\n Material : Interlock 100% Polyester (GSM 140-170).",
soccer_kits_juniors: "Elite performance soccer kit designed for speed, breathability, and durability. \n\n Material : Interlock 100% Polyester (GSM 140-170).",
polos_men: "Comfortable, versatile, and professionally branded — ideal for casual and smart-casual wear. \n\n Material : 1) 100% Polyester 2) 100% Cottom 3) 65% Polyester 35% Cotton 4) 80% Polyester 20% Cotton.",
polos_women: "Comfortable, versatile, and professionally branded — ideal for casual and smart-casual wear. \n\n Material : 1) 100% Polyester 2) 100% Cottom 3) 65% Polyester 35% Cotton 4) 80% Polyester 20% Cotton.",
polos_juniors: "Comfortable, versatile, and professionally branded — ideal for casual and smart-casual wear. \n\n Material : 1) 100% Polyester 2) 100% Cottom 3) 65% Polyester 35% Cotton 4) 80% Polyester 20% Cotton.",
caps: "Breathable. Bold. Built for the move. The SpotFut Mesh Series is the ultimate trucker cap — classic white front panel with our signature 'SF' logo in crisp black embroidery, paired with ultra-breathable black mesh back and structured black visor. Snapback closure, lightweight feel, perfect ventilation for training, travel, summer sessions, or everyday street style. ",
puffers_men: "Elite Fashion. Built for the street fashion. \n\n Material : 100% Nyleon (Cotton Filling 150-200 GSM)",
   puffers_women: "Elite Fashion. Built for the street fashion. \n\n Material : 100% Nyleon (Cotton Filling 150-200 GSM)",

   tracks_casual_women: "Breathable. Bold. Built for the move. \n\n Material : Cotton Fleece"
};

// Global fallback
const DEFAULT_SIZES = ["3XS","2XS","XS","S","M","L","XL","2XL","3XL"];

// Category-based sizes
const CATEGORY_SIZES = {
  soccer_kits_men: ["3XS","2XS","XS","S","M","L","XL","2XL","3XL"],
  classic_tracksets_men: ["XS","S","M","L","XL","2XL"],
   puffers_men: ["XS","S","M","L","XL","2XL"],
   puffers_women: ["XS","S","M","L","XL","2XL"],
   classic_tracksets_women: ["XS","S","M","L","XL","2XL"],
   bags: ["Standard"],
   caps: ["S","M","L"]
};

/* ================================
   SPOTFUT PRODUCT DATABASE (CORE)
   DO NOT CHANGE EXISTING IDS
================================ */

const PRODUCTS = {

  /* Jackets */
  "varsity-black": { name: "Varsity Black Edition", price: 59 },
  "varsity-green": { name: "Varsity Green Edition", price: 59 },
  "varsity-blue": { name: "Varsity Royal Blue Edition", price: 59 },
  "varsity-latte": { name: "Varsity Latte Edition", price: 59 },
  "varsity-solar": { name: "Varsity Solar Edition", price: 59 },
  "varsity-sky": { name: "Varsity Sky Edition", price: 59 },

  /* Urban Hoodie */
  "SF-UHM-S001": { name: "Elite Play Men Edition", price: 29 },
  "SF-UHM-S002": { name: "Momentum Slash Men Edition", price: 29 },
  "SF-UHM-S003": { name: "Sol Bear Drop Men Edition", price: 29 },

  "SF-UHF-S001": { name: "Urban Wave Women Edition", price: 29 },
  "SF-UHF-S002": { name: "Chevron Wave Women Edition", price: 29 },
  "SF-UHF-S005": { name: "Tie-Dye Women Edition", price: 29 },

  "SF-UHK-S001": { name: "Neo Strike Boys Edition", price: 29 },
  "SF-UHK-S003": { name: "Tech Vibe Boys Edition", price: 29 },
  "SF-UHK-S011": { name: "Orbital Hex Boys Edition", price: 29 },

  "SF-UHK-S101": { name: "NYC Checkerboard Girls Edition", price: 29 },
  "SF-UHK-S102": { name: "Super Nova Girls Edition", price: 29 },
  "SF-UHK-S104": { name: "Zen Valley Girls Edition", price: 29 },

  /* Signature Elite Kits - Male */
  "SF-SJM-S001": { name: "Soccer Elite Pro Fusion Edition", price: 11},
  "SF-SJM-S004": { name: "Soccer Hexa Pulse Edition", price: 11},
  "SF-SJM-S003": { name: "Soccer Urban Strike Gradient Edition", price: 11 },
  "SF-SJM-S005": { name: "Soccer Aurum Pro Edition", price: 11},
  "SF-SJM-S007": { name: "Soccer Aqua Storm Edition", price: 11 },
  "SF-SJM-S008": { name: "Soccer Crimson Bolt Edition", price: 11 },
 "SF-SJM-S002": { name: "Soccer Eclipse Edition", price: 11 },
  "SF-SJM-S006": { name: "Soccer Red Velocity Edition", price: 11 },
  "SF-SJM-S009": { name: "Soccer Regal Stripe Edition", price: 11 },
   "SF-SJM-S010": { name: "Soccer Neon Strike Edition", price: 11 },
  "SF-SJM-S011": { name: "Soccer Midnight Edition", price: 11 },

  /* Female Kits */
  "SF-SJF-S001": { name: "Soccer Blush Strike Edition", price: 11 },
  "SF-SJF-S002": { name: "Soccer Phantom Fade Edition", price: 11 },
  "SF-SJF-S004": { name: "Soccer Storm Fit Edition", price: 11 },
   "SF-SJF-S003": { name: "Soccer Gold-Leaf Kinetic Edition", price: 11 },
  "SF-SJF-S005": { name: "Soccer Molten Slate Edition", price: 11 },
  "SF-SJF-S006": { name: "Soccer Naval Vanguard Edition", price: 11 },
   "SF-SJF-S007": { name: "Soccer Monarc Gold Edition", price: 11 },
  "SF-SJF-S008": { name: "Soccer Static Strike Edition", price: 11 },
  "SF-SJF-S009": { name: "Soccer Glacier Strike Edition", price: 11 },
   "SF-SJF-S010": { name: "Soccer Prism Pulse Edition", price: 11 },

  /* Junior Kits */
  "SF-SJK-S001": { name: "Soccer Junior Strike Pro Edition", price: 11 },
  "SF-SJK-S003": { name: "Soccer Junior Fire Start Edition", price: 11 },
  "SF-SJK-S004": { name: "Soccer Junior Velocity Flame Edition", price: 11 },
   "SF-SJK-S002": { name: "Soccer Junior Stary Glow Edition", price: 11 },
  "SF-SJK-S005": { name: "Soccer Junior Emerland Flux Edition", price: 11 },
  "SF-SJK-S006": { name: "Soccer Junior Monarc Blue Edition", price: 11 },

   "SF-SJK-S101": { name: "Soccer Junior Spark Edge Edition", price: 11 },
  "SF-SJK-S102": { name: "Soccer Junior Nexus Rush Edition", price: 11 },
  "SF-SJK-S103": { name: "Soccer Junior Velocity Flame Edition", price: 11 },
   "SF-SJK-S104": { name: "Soccer Junior Strike Pro Edition", price: 11 },
  "SF-SJK-S105": { name: "Soccer Junior Magma Rift Edition", price: 11 },
  "SF-SJK-S106": { name: "Soccer Junior Solar Drift Edition", price: 11 },

   /*  FOr the cat pages e have this following format*/
   /* 11111111111111....... Men Football Kits .........................*/
  "SF-SJM-S001a": {"name": "Soccer Elite Pro Fusion Edition","price": 11,  category: "soccer_kits_men", "img": ["Soccer_Hero/Men_Images/SF-SJM-S001_1.png","Soccer_Hero/Men_Images/SF-SJM-S001_2.png","Soccer_Hero/Men_Images/SF-SJM-S001_3.png","Soccer_Hero/Men_Images/SF-SJM-S001_4.jpg"],
  "description": "Elite performance soccer kit designed for speed, comfort, and durability. Lightweight breathable fabric with pro-level fit.",
  "sizes": ["3XS","2XS","XS","S", "M", "L", "XL", "2XL", "3XL"]},
  "SF-SJM-S004a": {"name": "Soccer Hexa Pulse Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S004_1.jpg","Soccer_Hero/Men_Images/SF-SJM-S004_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S004_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S004_4.jpg"]},
  "SF-SJM-S003a": {"name": "Soccer Urban Strike Gradient Edition",  category: "soccer_kits_men","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S003_1.jpg","Soccer_Hero/Men_Images/SF-SJM-S003_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S003_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S003_4.jpg"]},
  "SF-SJM-S005a": {"name": "Soccer Aurum Pro Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S005_1.png","Soccer_Hero/Men_Images/SF-SJM-S005_2.png","Soccer_Hero/Men_Images/SF-SJM-S005_3.png","Soccer_Hero/Men_Images/SF-SJM-S005_4.jpg"]},
  "SF-SJM-S007a": {"name": "Soccer Aqua Storm Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S007_1.png","Soccer_Hero/Men_Images/SF-SJM-S007_2.png","Soccer_Hero/Men_Images/SF-SJM-S007_3.png","Soccer_Hero/Men_Images/SF-SJM-S007_4.jpg"]},
  "SF-SJM-S008a": {"name": "Soccer Crimson Bolt Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S008_1.jpg","Soccer_Hero/Men_Images/SF-SJM-S008_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S008_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S008_4.jpg"]},
  "SF-SJM-S002a": {"name": "Soccer Eclipse Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S002_1.png","Soccer_Hero/Men_Images/SF-SJM-S002_2.png","Soccer_Hero/Men_Images/SF-SJM-S002_3.png","Soccer_Hero/Men_Images/SF-SJM-S002_4.jpg"]},
  "SF-SJM-S006a": {"name": "Soccer Red Velocity Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S006_1.jpeg","Soccer_Hero/Men_Images/SF-SJM-S006_2.jpeg","Soccer_Hero/Men_Images/SF-SJM-S006_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S006_4.jpg"]},
  "SF-SJM-S009a": {"name": "Soccer Regal Stripe Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S009_1.jpeg","Soccer_Hero/Men_Images/SF-SJM-S009_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S009_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S009_4.jpg"]},
  "SF-SJM-S010a": {"name": "Soccer Neon Strike Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S010_1.jpeg","Soccer_Hero/Men_Images/SF-SJM-S010_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S010_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S010_4.jpg"]},
  "SF-SJM-S011a": {"name": "Soccer Midnight Edition","price": 11,  category: "soccer_kits_men","img": ["Soccer_Hero/Men_Images/SF-SJM-S011_1.jpeg","Soccer_Hero/Men_Images/SF-SJM-S011_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S011_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S011_4.jpg"]},

/* 11111111111111....... Men BasketBall Kits .........................*/
  "SF-BJM-S001a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S001_1.jpg","BasketBall/Men_Kits/SF-BJM-S001_2.jpg","BasketBall/Men_Kits/SF-BJM-S001_3.jpg"]},
"SF-BJM-S002a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S002_1.jpg","BasketBall/Men_Kits/SF-BJM-S002_2.jpg","BasketBall/Men_Kits/SF-BJM-S002_3.jpg"]},
"SF-BJM-S003a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S003_1.jpg","BasketBall/Men_Kits/SF-BJM-S003_2.jpg","BasketBall/Men_Kits/SF-BJM-S003_3.jpg"]},
"SF-BJM-S004a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S004_1.jpg","BasketBall/Men_Kits/SF-BJM-S004_2.jpg","BasketBall/Men_Kits/SF-BJM-S004_3.jpg"]},
"SF-BJM-S005a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S005_1.jpg","BasketBall/Men_Kits/SF-BJM-S005_2.jpg","BasketBall/Men_Kits/SF-BJM-S005_3.jpg"]},
"SF-BJM-S006a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S006_1.jpg","BasketBall/Men_Kits/SF-BJM-S006_2.jpg","BasketBall/Men_Kits/SF-BJM-S006_3.jpg"]},
"SF-BJM-S007a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S007_1.jpg","BasketBall/Men_Kits/SF-BJM-S007_2.jpg","BasketBall/Men_Kits/SF-BJM-S007_3.jpg"]},
"SF-BJM-S008a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S008_1.jpg","BasketBall/Men_Kits/SF-BJM-S008_2.jpg","BasketBall/Men_Kits/SF-BJM-S008_3.jpg"]},
"SF-BJM-S009a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S009_1.jpg","BasketBall/Men_Kits/SF-BJM-S009_2.jpg","BasketBall/Men_Kits/SF-BJM-S009_3.jpg"]},
"SF-BJM-S010a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S010_1.jpg","BasketBall/Men_Kits/SF-BJM-S010_2.jpg","BasketBall/Men_Kits/SF-BJM-S010_3.jpg"]},
"SF-BJM-S011a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S011_1.jpg","BasketBall/Men_Kits/SF-BJM-S011_2.jpg","BasketBall/Men_Kits/SF-BJM-S011_3.jpg"]},
"SF-BJM-S012a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S012_1.jpg","BasketBall/Men_Kits/SF-BJM-S012_2.jpg","BasketBall/Men_Kits/SF-BJM-S012_3.jpg"]},
"SF-BJM-S013a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S013_1.jpg","BasketBall/Men_Kits/SF-BJM-S013_2.jpg","BasketBall/Men_Kits/SF-BJM-S013_3.jpg"]},
"SF-BJM-S014a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S014_1.jpg","BasketBall/Men_Kits/SF-BJM-S014_2.jpg","BasketBall/Men_Kits/SF-BJM-S014_3.jpg"]},
"SF-BJM-S015a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S015_1.jpg","BasketBall/Men_Kits/SF-BJM-S015_2.jpg","BasketBall/Men_Kits/SF-BJM-S015_3.jpg"]},
"SF-BJM-S016a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Men_Kits/SF-BJM-S016_1.jpg","BasketBall/Men_Kits/SF-BJM-S016_2.jpg","BasketBall/Men_Kits/SF-BJM-S016_3.jpg"]},

   /* 11111111111111....... Men Tracksets Fitness .........................*/
"SF-CTS-M036a": {"name": "Spot C36 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M036_1.jpg","Men/Images_Tracksets/SF_CTS_M036_2.jpg","Men/Images_Tracksets/SF_CTS_M036_3.jpg"]},
"SF-CTS-M037a": {"name": "Spot C37 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M037_1.jpg","Men/Images_Tracksets/SF_CTS_M037_2.jpg","Men/Images_Tracksets/SF_CTS_M037_3.jpg"]},
"SF-CTS-M038a": {"name": "Spot C38 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M038_1.jpg","Men/Images_Tracksets/SF_CTS_M038_2.jpg","Men/Images_Tracksets/SF_CTS_M038_3.jpg"]},
"SF-CTS-M039a": {"name": "Spot C39 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M039_1.jpg","Men/Images_Tracksets/SF_CTS_M039_2.jpg","Men/Images_Tracksets/SF_CTS_M039_3.jpg"]},
"SF-CTS-M040a": {"name": "Spot C40 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M040_1.jpg","Men/Images_Tracksets/SF_CTS_M040_2.jpg","Men/Images_Tracksets/SF_CTS_M040_3.jpg"]},
"SF-CTS-M041a": {"name": "Spot C41 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M041_1.jpg","Men/Images_Tracksets/SF_CTS_M041_2.jpg","Men/Images_Tracksets/SF_CTS_M041_3.jpg"]},
"SF-CTS-M042a": {"name": "Spot C42 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M042_1.jpg","Men/Images_Tracksets/SF_CTS_M042_2.jpg","Men/Images_Tracksets/SF_CTS_M042_3.jpg"]},
"SF-CTS-M043a": {"name": "Spot C43 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M043_1.jpg","Men/Images_Tracksets/SF_CTS_M043_2.jpg","Men/Images_Tracksets/SF_CTS_M043_3.jpg"]},
"SF-CTS-M044a": {"name": "Spot C44 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M044_1.jpg","Men/Images_Tracksets/SF_CTS_M044_2.jpg","Men/Images_Tracksets/SF_CTS_M044_3.jpg"]},
"SF-CTS-M045a": {"name": "Spot C45 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M045_1.jpg","Men/Images_Tracksets/SF_CTS_M045_2.jpg","Men/Images_Tracksets/SF_CTS_M045_3.jpg"]},
"SF-CTS-M046a": {"name": "Spot C46 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M046_1.jpg","Men/Images_Tracksets/SF_CTS_M046_2.jpg","Men/Images_Tracksets/SF_CTS_M046_3.jpg"]},
"SF-CTS-M047a": {"name": "Spot C47 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M047_1.jpg","Men/Images_Tracksets/SF_CTS_M047_2.jpg","Men/Images_Tracksets/SF_CTS_M047_3.jpg"]},
"SF-CTS-M048a": {"name": "Spot C48 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M048_1.jpg","Men/Images_Tracksets/SF_CTS_M048_2.jpg","Men/Images_Tracksets/SF_CTS_M048_3.jpg"]},
"SF-CTS-M049a": {"name": "Spot C49 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M049_1.jpg","Men/Images_Tracksets/SF_CTS_M049_2.jpg","Men/Images_Tracksets/SF_CTS_M049_3.jpg"]},
"SF-CTS-M050a": {"name": "Spot C50 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M050_1.jpg","Men/Images_Tracksets/SF_CTS_M050_2.jpg","Men/Images_Tracksets/SF_CTS_M050_3.jpg"]},
"SF-CTS-M051a": {"name": "Spot C51 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M051_1.jpg","Men/Images_Tracksets/SF_CTS_M051_2.jpg","Men/Images_Tracksets/SF_CTS_M051_3.jpg"]},
"SF-CTS-M052a": {"name": "Spot C52 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M052_1.jpg","Men/Images_Tracksets/SF_CTS_M052_2.jpg","Men/Images_Tracksets/SF_CTS_M052_3.jpg"]},
"SF-CTS-M053a": {"name": "Spot C53 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M053_1.jpg","Men/Images_Tracksets/SF_CTS_M053_2.jpg","Men/Images_Tracksets/SF_CTS_M053_3.jpg"]},
"SF-CTS-M054a": {"name": "Spot C54 Trackset","price": 31,"img": ["Men/Images_Tracksets/SF_CTS_M054_1.jpg","Men/Images_Tracksets/SF_CTS_M054_2.jpg","Men/Images_Tracksets/SF_CTS_M054_3.jpg"]},

    /* 11111111111111....... Men Tracksets casual .........................*/
"SF-HTS-M241a": {"name": "Spot H241 Trackset","price": 31,"img": ["Men/Images_Tracksets_Casual/SF_HTS_M241_1.png","Men/Images_Tracksets_Casual/SF_HTS_M241_2.jpeg","Men/Images_Tracksets_Casual/SF_HTS_M241_3.jpeg"]},
"SF-HTS-M242a": {"name": "Spot H242 Trackset","price": 31,"img": ["Men/Images_Tracksets_Casual/SF_HTS_M242_1.png","Men/Images_Tracksets_Casual/SF_HTS_M242_2.png","Men/Images_Tracksets_Casual/SF_HTS_M242_3.png"]},
"SF-HTS-M243a": {"name": "Spot H243 Trackset","price": 31,"img": ["Men/Images_Tracksets_Casual/SF_HTS_M243_1.png","Men/Images_Tracksets_Casual/SF_HTS_M243_2.png","Men/Images_Tracksets_Casual/SF_HTS_M243_3.png"]},
"SF-HTS-M244a": {"name": "Spot H244 Trackset","price": 31,"img": ["Men/Images_Tracksets_Casual/SF_HTS_M244_1.png","Men/Images_Tracksets_Casual/SF_HTS_M244_2.png","Men/Images_Tracksets_Casual/SF_HTS_M244_3.png"]},
"SF-HTS-M245a": {"name": "Spot H245 Trackset","price": 31,"img": ["Men/Images_Tracksets_Casual/SF_HTS_M245_1.png","Men/Images_Tracksets_Casual/SF_HTS_M245_2.png","Men/Images_Tracksets_Casual/SF_HTS_M245_3.png"]},
"SF-HTS-M246a": {"name": "Spot H246 Trackset","price": 31,"img": ["Men/Images_Tracksets_Casual/SF_HTS_M246_1.png","Men/Images_Tracksets_Casual/SF_HTS_M246_2.png","Men/Images_Tracksets_Casual/SF_HTS_M246_3.png"]},
"SF-HTS-M247a": {"name": "Spot H247 Trackset","price": 31,"img": ["Men/Images_Tracksets_Casual/SF_HTS_M247_1.png","Men/Images_Tracksets_Casual/SF_HTS_M247_2.png","Men/Images_Tracksets_Casual/SF_HTS_M247_3.jpeg"]},
"SF-HTS-M248a": {"name": "Spot H248 Trackset","price": 31,"img": ["Men/Images_Tracksets_Casual/SF_HTS_M248_1.png","Men/Images_Tracksets_Casual/SF_HTS_M248_2.jpeg","Men/Images_Tracksets_Casual/SF_HTS_M248_3.jpeg"]},

   
    /* 11111111111111....... Men Polos .........................*/
"SF-BPM-M180a": {"name": "Spot B180 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-180_1.jpg","Men/Images_Polos/SF-BPM-180_2.jpg","Men/Images_Polos/SF-BPM-180_3.jpg"]},
"SF-BPM-M181a": {"name": "Spot B181 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-181_1.jpg","Men/Images_Polos/SF-BPM-181_2.jpg","Men/Images_Polos/SF-BPM-181_3.jpg"]},
"SF-BPM-M182a": {"name": "Spot B182 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-182_1.jpg","Men/Images_Polos/SF-BPM-182_2.jpg","Men/Images_Polos/SF-BPM-182_3.jpg"]},
"SF-BPM-M183a": {"name": "Spot B183 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-183_1.jpg","Men/Images_Polos/SF-BPM-183_2.jpg","Men/Images_Polos/SF-BPM-183_3.jpg"]},
"SF-BPM-M184a": {"name": "Spot B184 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-184_1.jpg","Men/Images_Polos/SF-BPM-184_2.jpg","Men/Images_Polos/SF-BPM-184_3.jpg"]},
"SF-BPM-M185a": {"name": "Spot B185 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-185_1.jpg","Men/Images_Polos/SF-BPM-185_2.jpg","Men/Images_Polos/SF-BPM-185_3.jpg"]},
"SF-BPM-M186a": {"name": "Spot B186 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-186_1.jpg","Men/Images_Polos/SF-BPM-186_2.jpg","Men/Images_Polos/SF-BPM-186_3.jpg"]},
"SF-BPM-M187a": {"name": "Spot B187 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-187_1.jpg","Men/Images_Polos/SF-BPM-187_2.jpg","Men/Images_Polos/SF-BPM-187_3.jpg"]},
"SF-BPM-M188a": {"name": "Spot B188 Polo","price": 21,  category: "polos_men","img": ["Men/Images_Polos/SF-BPM-188_1.jpg","Men/Images_Polos/SF-BPM-188_2.jpg","Men/Images_Polos/SF-BPM-188_3.jpg"]},

 /* 11111111111111....... Men Puffers .........................*/
"SF-PJ-M851a": {"name": "Spot MJ851 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M851_1.jpg","Men/Imagers_Puffers/SF-PJ-M851_2.jpg","Men/Imagers_Puffers/SF-PJ-M851_3.jpg","Men/Imagers_Puffers/SF-PJ-M851_4.jpg"]},
"SF-PJ-M852a": {"name": "Spot MJ852 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M852_1.jpg","Men/Imagers_Puffers/SF-PJ-M852_2.jpg","Men/Imagers_Puffers/SF-PJ-M852_3.jpg","Men/Imagers_Puffers/SF-PJ-M852_4.jpg"]},
"SF-PJ-M853a": {"name": "Spot MJ853 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M853_1.jpg","Men/Imagers_Puffers/SF-PJ-M853_2.jpg","Men/Imagers_Puffers/SF-PJ-M853_3.jpg","Men/Imagers_Puffers/SF-PJ-M853_4.jpg"]},
"SF-PJ-M854a": {"name": "Spot MJ854 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M854_1.jpg","Men/Imagers_Puffers/SF-PJ-M854_2.jpg","Men/Imagers_Puffers/SF-PJ-M854_3.jpg","Men/Imagers_Puffers/SF-PJ-M854_4.jpg"]},
"SF-PJ-M855a": {"name": "Spot MJ855 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M855_1.jpg","Men/Imagers_Puffers/SF-PJ-M855_2.jpg","Men/Imagers_Puffers/SF-PJ-M855_3.jpg","Men/Imagers_Puffers/SF-PJ-M855_4.jpg"]},
   
   /* 11111111111111....... Women Football Kits .........................*/
  "SF-SJF-S001a": {"name": "Soccer Blush Strike Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S001_1.png", "Soccer_Hero/Women_Images/SF-SJF-S001_2.png", "Soccer_Hero/Women_Images/SF-SJF-S001_3.png", "Soccer_Hero/Women_Images/SF-SJF-S001_4.jpg"]},
  "SF-SJF-S002a": {"name": "Soccer Phantom Fade Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S002_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S002_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S002_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S002_4.jpg"]},
  "SF-SJF-S003a": {"name": "Soccer Gold-Leaf Kinetic Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S003_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S003_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S003_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S003_4.jpg"]},
  "SF-SJF-S004a": {"name": "Soccer Storm Fit Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S004_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S004_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S004_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S004_4.jpg"]},
  "SF-SJF-S005a": {"name": "Soccer Molten Slate Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S005_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S005_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S005_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S005_4.jpg"]},
  "SF-SJF-S006a": {"name": "Soccer Naval Vanguard Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S006_1.png", "Soccer_Hero/Women_Images/SF-SJF-S006_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S006_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S006_4.jpg"]},
  "SF-SJF-S007a": {"name": "Soccer Monarc Gold Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S007_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S007_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S007_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S007_4.jpg"]},
  "SF-SJF-S008a": {"name": "Soccer Static Strike Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S008_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S008_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S008_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S008_4.jpg"]},
  "SF-SJF-S009a": {"name": "Soccer Glacier Strike Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S009_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S009_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S009_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S009_4.jpg"]},
  "SF-SJF-S010a": {"name": "Soccer Prism Pulse Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S010_1.png", "Soccer_Hero/Women_Images/SF-SJF-S010_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S010_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S010_4.jpg"]},

   /* 11111111111111....... Women BasketBall Kits .........................*/
   "SF-BJF-S001a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S001_1.jpg","BasketBall/Women_Kits/SF-BJF-S001_2.jpg","BasketBall/Women_Kits/SF-BJF-S001_3.jpg"]},
"SF-BJF-S002a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S002_1.jpg","BasketBall/Women_Kits/SF-BJF-S002_2.jpg","BasketBall/Women_Kits/SF-BJF-S002_3.jpg"]},
"SF-BJF-S003a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S003_1.jpg","BasketBall/Women_Kits/SF-BJF-S003_2.jpg","BasketBall/Women_Kits/SF-BJF-S003_3.jpg"]},
"SF-BJF-S004a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S004_1.jpg","BasketBall/Women_Kits/SF-BJF-S004_2.jpg","BasketBall/Women_Kits/SF-BJF-S004_3.jpg"]},
"SF-BJF-S005a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S005_1.jpg","BasketBall/Women_Kits/SF-BJF-S005_2.jpg","BasketBall/Women_Kits/SF-BJF-S005_3.jpg"]},
"SF-BJF-S006a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S006_1.jpg","BasketBall/Women_Kits/SF-BJF-S006_2.jpg","BasketBall/Women_Kits/SF-BJF-S006_3.jpg"]},
"SF-BJF-S007a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S007_1.jpg","BasketBall/Women_Kits/SF-BJF-S007_2.jpg","BasketBall/Women_Kits/SF-BJF-S007_3.jpg"]},
"SF-BJF-S008a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S008_1.jpg","BasketBall/Women_Kits/SF-BJF-S008_2.jpg","BasketBall/Women_Kits/SF-BJF-S008_3.jpg"]},
"SF-BJF-S009a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S009_1.jpg","BasketBall/Women_Kits/SF-BJF-S009_2.jpg","BasketBall/Women_Kits/SF-BJF-S009_3.jpg"]},
"SF-BJF-S010a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S010_1.jpg","BasketBall/Women_Kits/SF-BJF-S010_2.jpg","BasketBall/Women_Kits/SF-BJF-S010_3.jpg"]},
"SF-BJF-S011a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S011_1.jpg","BasketBall/Women_Kits/SF-BJF-S011_2.jpg","BasketBall/Women_Kits/SF-BJF-S011_3.jpg"]},
"SF-BJF-S012a": {"name": "BB TBA Edition","price": 11,"img": ["BasketBall/Women_Kits/SF-BJF-S012_1.jpg","BasketBall/Women_Kits/SF-BJF-S012_2.jpg","BasketBall/Women_Kits/SF-BJF-S012_3.jpg"]},

 /* 11111111111111....... Women Tracksets Fitness.........................*/
   /* 1111111 Simple fitness polyester ..*/
"SF-CTS-F120a": {"name": "Spot C120 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F120_1.jpg","Women/Images_Tracksets/SF_CTS_F120_2.jpg","Women/Images_Tracksets/SF_CTS_F120_3.jpg"]},
"SF-CTS-F121a": {"name": "Spot C121 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F121_1.jpg","Women/Images_Tracksets/SF_CTS_F121_2.jpg","Women/Images_Tracksets/SF_CTS_F121_3.jpg"]},
"SF-CTS-F122a": {"name": "Spot C122 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F122_1.jpg","Women/Images_Tracksets/SF_CTS_F122_2.jpg","Women/Images_Tracksets/SF_CTS_F122_3.jpg"]},
"SF-CTS-F123a": {"name": "Spot C123 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F123_1.jpg","Women/Images_Tracksets/SF_CTS_F123_2.jpg","Women/Images_Tracksets/SF_CTS_F123_3.jpg"]},
"SF-CTS-F124a": {"name": "Spot C124 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F124_1.jpg","Women/Images_Tracksets/SF_CTS_F124_2.jpg","Women/Images_Tracksets/SF_CTS_F124_3.jpg"]},
"SF-CTS-F125a": {"name": "Spot C125 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F125_1.jpg","Women/Images_Tracksets/SF_CTS_F125_2.jpg","Women/Images_Tracksets/SF_CTS_F125_3.jpg"]},
"SF-CTS-F126a": {"name": "Spot C126 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F126_1.jpg","Women/Images_Tracksets/SF_CTS_F126_2.jpg","Women/Images_Tracksets/SF_CTS_F126_3.jpg"]},
"SF-CTS-F127a": {"name": "Spot C127 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F127_1.jpg","Women/Images_Tracksets/SF_CTS_F127_2.jpg","Women/Images_Tracksets/SF_CTS_F127_3.jpg"]},
"SF-CTS-F128a": {"name": "Spot C128 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F128_1.jpg","Women/Images_Tracksets/SF_CTS_F128_2.jpg","Women/Images_Tracksets/SF_CTS_F128_3.jpg"]},
"SF-CTS-F129a": {"name": "Spot C129 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F129_1.jpg","Women/Images_Tracksets/SF_CTS_F129_2.jpg","Women/Images_Tracksets/SF_CTS_F129_3.jpg"]},
"SF-CTS-F130a": {"name": "Spot C130 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F130_1.jpg","Women/Images_Tracksets/SF_CTS_F130_2.jpeg","Women/Images_Tracksets/SF_CTS_F130_3.jpeg"]},
"SF-CTS-F131a": {"name": "Spot C131 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F131_1.jpg","Women/Images_Tracksets/SF_CTS_F131_2.jpeg","Women/Images_Tracksets/SF_CTS_F131_3.jpeg"]},
"SF-CTS-F132a": {"name": "Spot C132 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F132_1.jpg","Women/Images_Tracksets/SF_CTS_F132_2.jpeg","Women/Images_Tracksets/SF_CTS_F132_3.jpeg"]},
"SF-CTS-F133a": {"name": "Spot C133 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F133_1.jpg","Women/Images_Tracksets/SF_CTS_F133_2.jpg","Women/Images_Tracksets/SF_CTS_F133_3.jpg"]},
"SF-CTS-F134a": {"name": "Spot C134 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F134_1.jpg","Women/Images_Tracksets/SF_CTS_F134_2.jpg","Women/Images_Tracksets/SF_CTS_F134_3.jpg"]},
"SF-CTS-F135a": {"name": "Spot C135 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F135_1.jpg","Women/Images_Tracksets/SF_CTS_F135_2.jpg","Women/Images_Tracksets/SF_CTS_F135_3.jpg"]},
"SF-CTS-F136a": {"name": "Spot C136 Trackset","price": 31,"img": ["Women/Images_Tracksets/SF_CTS_F136_1.jpeg","Women/Images_Tracksets/SF_CTS_F136_2.jpeg","Women/Images_Tracksets/SF_CTS_F136_3.jpeg"]},

    /* 1111111 ZipUp fitness fleece ..*/
"SF-ZTS-F210a": {"name": "Spot C210 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F210_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F210_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F210_3.jpg"]},
"SF-ZTS-F211a": {"name": "Spot C211 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F211_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F211_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F211_3.jpg"]},
"SF-ZTS-F212a": {"name": "Spot C212 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F212_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F212_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F212_3.jpg"]},
"SF-ZTS-F213a": {"name": "Spot C213 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F213_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F213_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F213_3.jpg"]},
"SF-ZTS-F214a": {"name": "Spot C214 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F214_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F214_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F214_3.jpg"]},
"SF-ZTS-F215a": {"name": "Spot C215 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F215_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F215_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F215_3.jpg"]},
"SF-ZTS-F216a": {"name": "Spot C216 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F216_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F216_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F216_3.jpg"]},
"SF-ZTS-F217a": {"name": "Spot C217 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F217_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F217_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F217_3.jpg"]},
"SF-ZTS-F218a": {"name": "Spot C218 Trackset","price": 31,"img": ["Women/Images_Tracksets_ZipUp/SF_ZTS_F218_1.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F218_2.jpg","Women/Images_Tracksets_ZipUp/SF_ZTS_F218_3.jpg"]},

   /* 11111111111111....... Women Tracksets Classic/Casual.........................*/
"SF-HTS-F110a": {"name": "Spot H110 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F110_1.jpg","Women/Images_Tracksets_Casual/SF_HTS_F110_2.jpg","Women/Images_Tracksets_Casual/SF_HTS_F110_3.jpg"]},
"SF-HTS-F111a": {"name": "Spot H111 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F111_1.jpg","Women/Images_Tracksets_Casual/SF_HTS_F111_2.jpg","Women/Images_Tracksets_Casual/SF_HTS_F111_3.jpg"]},
"SF-HTS-F112a": {"name": "Spot H112 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F112_1.jpg","Women/Images_Tracksets_Casual/SF_HTS_F112_2.jpg","Women/Images_Tracksets_Casual/SF_HTS_F112_3.jpg"]},
"SF-HTS-F113a": {"name": "Spot H113 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F113_1.jpg","Women/Images_Tracksets_Casual/SF_HTS_F113_2.jpg","Women/Images_Tracksets_Casual/SF_HTS_F113_3.jpg"]},
"SF-HTS-F114a": {"name": "Spot H114 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F114_1.jpg","Women/Images_Tracksets_Casual/SF_HTS_F114_2.jpg","Women/Images_Tracksets_Casual/SF_HTS_F114_3.jpg"]},
"SF-HTS-F115a": {"name": "Spot H115 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F115_1.jpg","Women/Images_Tracksets_Casual/SF_HTS_F115_2.jpg","Women/Images_Tracksets_Casual/SF_HTS_F115_3.jpg"]},

"SF-HTS-F261a": {"name": "Spot H115 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F261_1.jpeg","Women/Images_Tracksets_Casual/SF_HTS_F261_2.jpeg","Women/Images_Tracksets_Casual/SF_HTS_F261_3.jpeg"]},
"SF-HTS-F262a": {"name": "Spot H115 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F262_1.jpeg","Women/Images_Tracksets_Casual/SF_HTS_F262_2.jpeg","Women/Images_Tracksets_Casual/SF_HTS_F262_3.jpeg"]},
"SF-HTS-F263a": {"name": "Spot H115 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F263_1.jpeg","Women/Images_Tracksets_Casual/SF_HTS_F263_2.jpeg","Women/Images_Tracksets_Casual/SF_HTS_F263_3.jpeg"]},
"SF-HTS-F264a": {"name": "Spot H115 Trackset","price": 31,category: "tracks_casual_women","img": ["Women/Images_Tracksets_Casual/SF_HTS_F264_1.jpeg","Women/Images_Tracksets_Casual/SF_HTS_F264_2.jpeg","Women/Images_Tracksets_Casual/SF_HTS_F264_3.jpeg"]},


 /* 11111111111111....... Women Tracksets Travel.........................*/
"SF-TTS-F471a": {"name": "Spot T471 Trackset","price": 31,"category": "tracks_travel_women","img": ["Women/Images_Tracksets_Travel/SF-TTS-F471_1.png","Women/Images_Tracksets_Travel/SF-TTS-F471_2.png","Women/Images_Tracksets_Travel/SF-TTS-F471_3.png"]},
"SF-TTS-F472a": {"name": "Spot T472 Trackset","price": 31,"category": "tracks_travel_women","img": ["Women/Images_Tracksets_Travel/SF-TTS-F472_1.png","Women/Images_Tracksets_Travel/SF-TTS-F472_2.png","Women/Images_Tracksets_Travel/SF-TTS-F472_3.png"]},
"SF-TTS-F473a": {"name": "Spot T473 Trackset","price": 31,"category": "tracks_travel_women","img": ["Women/Images_Tracksets_Travel/SF-TTS-F473_1.png","Women/Images_Tracksets_Travel/SF-TTS-F473_2.png","Women/Images_Tracksets_Travel/SF-TTS-F473_3.png"]},
"SF-TTS-F474a": {"name": "Spot T474 Trackset","price": 31,"category": "tracks_travel_women","img": ["Women/Images_Tracksets_Travel/SF-TTS-F474_1.png","Women/Images_Tracksets_Travel/SF-TTS-F474_2.png","Women/Images_Tracksets_Travel/SF-TTS-F474_3.png"]},
"SF-TTS-F475a": {"name": "Spot T475 Trackset","price": 31,"category": "tracks_travel_women","img": ["Women/Images_Tracksets_Travel/SF-TTS-F475_1.png","Women/Images_Tracksets_Travel/SF-TTS-F475_2.png","Women/Images_Tracksets_Travel/SF-TTS-F475_3.png"]},
   
   
    /* 11111111111111....... Women Polos .........................*/
"SF-BPF-111a": {"name": "Spot B111 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-111_1.jpeg","Women/Images_Polos/SF-BPF-111_2.jpeg","Women/Images_Polos/SF-BPF-111_3.jpeg"]},
"SF-BPF-112a": {"name": "Spot B112 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-112_1.jpeg","Women/Images_Polos/SF-BPF-112_2.jpeg","Women/Images_Polos/SF-BPF-112_3.jpeg"]},
"SF-BPF-113a": {"name": "Spot B113 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-113_1.jpeg","Women/Images_Polos/SF-BPF-113_2.jpeg","Women/Images_Polos/SF-BPF-113_3.jpeg"]},
"SF-BPF-114a": {"name": "Spot B114 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-114_1.jpeg","Women/Images_Polos/SF-BPF-114_2.jpeg","Women/Images_Polos/SF-BPF-114_3.jpeg"]},
"SF-BPF-115a": {"name": "Spot B115 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-115_1.jpeg","Women/Images_Polos/SF-BPF-115_2.jpeg","Women/Images_Polos/SF-BPF-115_3.jpeg"]},
"SF-BPF-116a": {"name": "Spot B116 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-116_1.jpeg","Women/Images_Polos/SF-BPF-116_2.jpeg","Women/Images_Polos/SF-BPF-116_3.jpeg"]},
"SF-BPF-117a": {"name": "Spot B117 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-117_1.jpeg","Women/Images_Polos/SF-BPF-117_2.jpeg","Women/Images_Polos/SF-BPF-117_3.jpeg"]},
"SF-BPF-118a": {"name": "Spot B118 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-118_1.jpeg","Women/Images_Polos/SF-BPF-118_2.jpeg","Women/Images_Polos/SF-BPF-118_3.jpeg"]},
"SF-BPF-119a": {"name": "Spot B119 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-119_1.jpeg","Women/Images_Polos/SF-BPF-119_2.jpeg","Women/Images_Polos/SF-BPF-119_3.jpeg"]},
"SF-BPF-120a": {"name": "Spot B120 Polo","price": 21,  category: "polos_women","img": ["Women/Images_Polos/SF-BPF-120_1.jpeg","Women/Images_Polos/SF-BPF-120_2.jpeg","Women/Images_Polos/SF-BPF-120_3.jpeg"]},

/* 11111111111111....... Women Puffers .........................*/
"SF-PJ-F201a": {"name": "Spot FJ201 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F201_1.png","Women/Images_Puffers/SF-PJ-F201_2.png","Women/Images_Puffers/SF-PJ-F201_3.png","Women/Images_Puffers/SF-PJ-F201_4.png"]},
"SF-PJ-F202a": {"name": "Spot FJ202 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F202_1.png","Women/Images_Puffers/SF-PJ-F202_2.png","Women/Images_Puffers/SF-PJ-F202_3.png","Women/Images_Puffers/SF-PJ-F202_4.png"]},
"SF-PJ-F203a": {"name": "Spot FJ203 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F203_1.png","Women/Images_Puffers/SF-PJ-F203_2.png","Women/Images_Puffers/SF-PJ-F203_3.png","Women/Images_Puffers/SF-PJ-F203_4.png"]},
"SF-PJ-F204a": {"name": "Spot FJ204 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F204_1.png","Women/Images_Puffers/SF-PJ-F204_2.png","Women/Images_Puffers/SF-PJ-F204_3.png","Women/Images_Puffers/SF-PJ-F204_4.png"]},
"SF-PJ-F205a": {"name": "Spot FJ205 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F205_1.png","Women/Images_Puffers/SF-PJ-F205_2.png","Women/Images_Puffers/SF-PJ-F205_3.png","Women/Images_Puffers/SF-PJ-F205_4.png"]},

   "SF-PJ-F301a": {"name": "Spot FJ301 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F301_1.png","Women/Images_Puffers/SF-PJ-F301_2.png","Women/Images_Puffers/SF-PJ-F301_3.png","Women/Images_Puffers/SF-PJ-F301_4.png"]},
"SF-PJ-F302a": {"name": "Spot FJ302 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F302_1.png","Women/Images_Puffers/SF-PJ-F302_2.png","Women/Images_Puffers/SF-PJ-F302_3.png","Women/Images_Puffers/SF-PJ-F302_4.png"]},
"SF-PJ-F303a": {"name": "Spot FJ303 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F303_1.png","Women/Images_Puffers/SF-PJ-F303_2.png","Women/Images_Puffers/SF-PJ-F303_3.png","Women/Images_Puffers/SF-PJ-F303_4.png"]},
"SF-PJ-F304a": {"name": "Spot FJ304 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F304_1.png","Women/Images_Puffers/SF-PJ-F304_2.png","Women/Images_Puffers/SF-PJ-F304_3.png","Women/Images_Puffers/SF-PJ-F304_4.png"]},
   
   /* 11111111111111....... Junior Football Kits .........................*/
"SF-SJK-S001a":{"name":"Soccer Junior Strike Pro Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S001_1.png","Soccer_Hero/Junior_Images/SF-SJK-S001_2.png","Soccer_Hero/Junior_Images/SF-SJK-S001_3.png","Soccer_Hero/Junior_Images/SF-SJK-S001_4.jpg"]},
"SF-SJK-S003a":{"name":"Soccer Junior Fire Start Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S003_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S003_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S003_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S003_4.jpg"]},
"SF-SJK-S004a":{"name":"Soccer Junior Velocity Flame Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S004_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S004_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S004_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S004_4.jpg"]},
"SF-SJK-S002a":{"name":"Soccer Junior Stary Glow Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S002_1.png","Soccer_Hero/Junior_Images/SF-SJK-S002_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S002_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S002_4.jpg"]},
"SF-SJK-S005a":{"name":"Soccer Junior Emerland Flux Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S005_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S005_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S005_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S005_4.jpg"]},
"SF-SJK-S006a":{"name":"Soccer Junior Monarc Blue Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S006_1.png","Soccer_Hero/Junior_Images/SF-SJK-S006_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S006_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S006_4.jpg"]},
"SF-SJK-S101a":{"name":"Soccer Junior Spark Edge Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S101_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S101_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S101_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S101_4.jpg"]},
"SF-SJK-S102a":{"name":"Soccer Junior Nexus Rush Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S102_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S102_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S102_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S102_4.jpg"]},
"SF-SJK-S103a":{"name":"Soccer Junior Velocity Flame Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S103_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S103_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S103_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S103_4.jpg"]},
"SF-SJK-S104a":{"name":"Soccer Junior Strike Pro Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S104_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S104_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S104_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S104_4.jpg"]},
"SF-SJK-S105a":{"name":"Soccer Junior Magma Rift Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S105_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S105_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S105_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S105_4.jpg"]},
"SF-SJK-S106a":{"name":"Soccer Junior Solar Drift Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S106_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S106_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S106_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S106_4.jpg"]},

      /* 11111111111111....... Bags - Accessoris .........................*/
"SF-BP-0001a":{"name":"SF Classic Backpack","price":19,category: "bags","img":["Accessories/Images_Bags/SF-BP-0001-4.png","Accessories/Images_Bags/SF-BP-0001-5.png","Accessories/Images_Bags/SF-BP-0001-6.png"]},
"SF-BP-1001a":{"name":"SF Urban Edge Backpack","price":19,category: "bags","img":["Accessories/Images_Bags/SF-BP-1001-1.png","Accessories/Images_Bags/SF-BP-1001-2.png","Accessories/Images_Bags/SF-BP-1001-3.png"]},
"SF-BP-2001a":{"name":"SF Camo Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-2001-1.png","Accessories/Images_Bags/SF-BP-2001-2.png"]},
"SF-BP-3001a":{"name":"SF Camo Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-3001-1.png","Accessories/Images_Bags/SF-BP-3001-2.png"]},
"SF-BP-4001a":{"name":"SF TBA Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-4001-1.png","Accessories/Images_Bags/SF-BP-4001-2.png"]},
"SF-BP-5001a":{"name":"SF TBA Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-5001-1.png","Accessories/Images_Bags/SF-BP-5001-2.png"]},
"SF-BP-6001a":{"name":"SF TBA Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-6001-1.png","Accessories/Images_Bags/SF-BP-6001-2.png"]},
"SF-BP-7001a":{"name":"SF TBA Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-7001-1.png","Accessories/Images_Bags/SF-BP-7001-2.png"]},
"SF-BP-8001a":{"name":"SF TBA Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-8001-1.png","Accessories/Images_Bags/SF-BP-8001-2.png"]},
"SF-BP-9001a":{"name":"SF TBA Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-9001-1.png","Accessories/Images_Bags/SF-BP-9001-2.png"]},
"SF-BP-1010a":{"name":"SF TBA Backpack","price":29,category: "bags","img":["Accessories/Images_Bags/SF-BP-1010-1.png","Accessories/Images_Bags/SF-BP-1010-2.png","Accessories/Images_Bags/SF-BP-1010-3.png","Accessories/Images_Bags/SF-BP-1010-4.png"]},

/* 11111111111111....... Caps - Accessoris .........................*/
"SF-CP-5101a":{"name":"SF Spectrum-Line Caps","price":11,category: "caps","img":["Accessories/Images_Caps/SF-CP-5101-1.jpg","Accessories/Images_Caps/SF-CP-5101-2.jpg","Accessories/Images_Caps/SF-CP-5101-3.jpg","Accessories/Images_Caps/SF-CP-5101-4.jpg","Accessories/Images_Caps/SF-CP-5101-5.jpg"]},
"SF-CP-5201a":{"name":"SF Pulse-Mesh Caps","price":11,category: "caps","img":["Accessories/Images_Caps/SF-CP-5201-1.jpg","Accessories/Images_Caps/SF-CP-5201-2.jpg","Accessories/Images_Caps/SF-CP-5201-3.jpg","Accessories/Images_Caps/SF-CP-5201-4.jpg","Accessories/Images_Caps/SF-CP-5201-5.jpg"]}, 
"SF-CP-5301a":{"name":"SF Style-Line Caps","price":11,category: "caps","img":["Accessories/Images_Caps/SF-CP-5301-1.png","Accessories/Images_Caps/SF-CP-5301-2.png","Accessories/Images_Caps/SF-CP-5301-3.png","Accessories/Images_Caps/SF-CP-5301-4.png"]},        
"SF-CP-5401a":{"name":"SF Cool-Vibe Caps","price":11,category: "caps","img":["Accessories/Images_Caps/SF-CP-5401-1.png","Accessories/Images_Caps/SF-CP-5401-2.png","Accessories/Images_Caps/SF-CP-5401-3.png"]},        
"SF-CP-5501a":{"name":"SF Summer-Sweat Caps","price":11,category: "caps","img":["Accessories/Images_Caps/SF-CP-5501-1.png","Accessories/Images_Caps/SF-CP-5501-2.png","Accessories/Images_Caps/SF-CP-5501-3.png"]}        
};
   /* ======================================
   CATEGORY MAPPING (NEW UNIVERSAL SYSTEM)
   THIS IS WHAT POWERS MEN.HTML → product.html
====================================== */

const CATEGORIES = {

  /* FOOTBALL */
  football_kits_men: ["SF-SJM-S001a","SF-SJM-S002a","SF-SJM-S003a","SF-SJM-S004a","SF-SJM-S005a",
                     "SF-SJM-S006a","SF-SJM-S007a","SF-SJM-S008a","SF-SJM-S009a","SF-SJM-S010a","SF-SJM-S011a"],
  
  football_hoodies_men: ["SF-SJM-S005a"],

  football_jackets_men: [
   "SF-SJM-S005a"
  ],
   football_kits_women: ["SF-SJF-S001a","SF-SJF-S002a","SF-SJF-S003a","SF-SJF-S004a","SF-SJF-S005a",
                     "SF-SJF-S006a","SF-SJF-S007a","SF-SJF-S008a","SF-SJF-S009a","SF-SJF-S010a"],

  

  football_hoodies_women: [
    "SF-SJM-S005a"
  ],

  football_jackets_women: [
    "SF-SJM-S005a"
  ],
   football_kits_juniors: ["SF-SJK-S101a","SF-SJK-S002a","SF-SJK-S003a","SF-SJK-S104a","SF-SJK-S005a","SF-SJK-S105a",
                          "SF-SJK-S001a","SF-SJK-S102a","SF-SJK-S103a","SF-SJK-S004a","SF-SJK-S006a","SF-SJK-S106a"],


  football_hoodies_juniors: [
    "SF-SJM-S005a"
  ],

  football_jackets_juniors: [
    "SF-SJM-S005a"
  ],


  /* BASKETBALL (future ready placeholders) */
  basketball_kits_men: ["SF-BJM-S001a","SF-BJM-S002a","SF-BJM-S003a","SF-BJM-S004a","SF-BJM-S005a","SF-BJM-S006a","SF-BJM-S007a","SF-BJM-S008a",
   "SF-BJM-S009a","SF-BJM-S010a","SF-BJM-S011a","SF-BJM-S012a","SF-BJM-S013a","SF-BJM-S014a","SF-BJM-S015a","SF-BJM-S016a"
  ],

  basketball_hoodies_men: [
    "SF-SJM-S005a"
  ],
   basketball_kits_women: ["SF-BJF-S001a","SF-BJF-S002a","SF-BJF-S003a","SF-BJF-S004a","SF-BJF-S005a","SF-BJF-S006a","SF-BJF-S007a","SF-BJF-S008a",
   "SF-BJF-S009a","SF-BJF-S010a","SF-BJF-S011a","SF-BJF-S012a"],

  basketball_hoodies_women: [
    "SF-SJM-S005a"
  ],
   basketball_kits_juniors: [
   "SF-SJM-S005a"
  ],

  basketball_hoodies_juniors: [
    "SF-SJM-S005a"
  ],


  /* HANDBALL */
  handball_kits_men: [
    "SF-SJM-S005a"
  ],
   handball_kits_women: [
   "SF-SJM-S005a"
  ],
   handball_kits_juniors: [
    "SF-SJM-S005a"
  ],


  /* TRAINING */
  training_tops_men: [
    "SF-SJM-S005a"
  ],


   training_tops_women: [
    "SF-SJM-S005a"
  ],


training_tops_juniors: [
    "SF-SJM-S005a"
  ],


   /*  Tracksuits */
   tracksuits_training_men: ["SF-CTS-M036a","SF-CTS-M037a","SF-CTS-M038a","SF-CTS-M039a","SF-CTS-M053a","SF-CTS-M040a","SF-CTS-M041a",
                            "SF-CTS-M042a","SF-CTS-M043a","SF-CTS-M044a","SF-CTS-M046a","SF-CTS-M047a","SF-CTS-M048a","SF-CTS-M049a",
                            "SF-CTS-M050a","SF-CTS-M052a","SF-CTS-M054a","SF-CTS-M045a","SF-CTS-M051a"],

   tracksuits_classic_men: ["SF-HTS-M241a","SF-HTS-M242a","SF-HTS-M243a","SF-HTS-M244a",
                             "SF-HTS-M245a","SF-HTS-M246a","SF-HTS-M247a","SF-HTS-M248a"],
   
   tracksuits_training_women: ["SF-CTS-F120a","SF-CTS-F121a","SF-CTS-F122a","SF-CTS-F123a","SF-CTS-F124a","SF-CTS-F125a","SF-CTS-F126a",
                           "SF-CTS-F127a","SF-CTS-F128a","SF-CTS-F129a","SF-CTS-F130a","SF-CTS-F131a","SF-CTS-F132a",
                               "SF-CTS-F133a", "SF-CTS-F134a","SF-CTS-F135a","SF-CTS-F136a",
                           "SF-ZTS-F210a","SF-ZTS-F211a","SF-ZTS-F212a","SF-ZTS-F213a","SF-ZTS-F214a","SF-ZTS-F215a",
                               "SF-ZTS-F216a","SF-ZTS-F217a","SF-ZTS-F218a"],
   
   tracksuits_classic_women: ["SF-HTS-F110a","SF-HTS-F111a","SF-HTS-F112a","SF-HTS-F113a","SF-HTS-F114a","SF-HTS-F115a",
                              "SF-HTS-F261a","SF-HTS-F262a","SF-HTS-F263a","SF-HTS-F264a"],

   tracksuits_travelling_women: ["SF-TTS-F471a","SF-TTS-F472a","SF-TTS-F473a","SF-TTS-F474a","SF-TTS-F475a"],

  /* LIFESTYLE */
    lifestyle_polos_men: ["SF-BPM-M180a","SF-BPM-M181a","SF-BPM-M182a","SF-BPM-M183a","SF-BPM-M184a",
  "SF-BPM-M185a","SF-BPM-M186a","SF-BPM-M187a","SF-BPM-M188a"],

   
  lifestyle_hoodies_men: [
    "SF-SJM-S005a"
  ],

  lifestyle_jackets_men: ["SF-PJ-M851a","SF-PJ-M852a","SF-PJ-M853a","SF-PJ-M854a","SF-PJ-M855a"
  ],
   lifestyle_polos_women: ["SF-BPF-111a","SF-BPF-112a","SF-BPF-113a","SF-BPF-114a","SF-BPF-115a",
  "SF-BPF-116a","SF-BPF-117a","SF-BPF-118a","SF-BPF-119a","SF-BPF-120a"],
   
   lifestyle_hoodies_women: [
    "SF-SJM-S005a"
  ],

  lifestyle_jackets_women: ["SF-PJ-F201a","SF-PJ-F202a","SF-PJ-F203a","SF-PJ-F204a","SF-PJ-F205a",
                            "SF-PJ-F301a","SF-PJ-F302a","SF-PJ-F303a","SF-PJ-F304a"],
   
   lifestyle_hoodies_juniors: [
    "SF-SJM-S005a"
  ],

  lifestyle_jackets_juniors: [
    "SF-SJM-S005a"
  ],


   /* $$$$$$$$$$$$$$$$$$$$$$$$$$$$  Accessories $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
   /* 111111111111111  Bags $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
      bags: ["SF-BP-0001a","SF-BP-1001a","SF-BP-2001a","SF-BP-3001a","SF-BP-4001a","SF-BP-5001a","SF-BP-6001a","SF-BP-7001a","SF-BP-8001a",
            "SF-BP-9001a","SF-BP-1010a"],
    /* 22222222222222222222  Caps $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
      caps: ["SF-CP-5301a","SF-CP-5101a","SF-CP-5201a","SF-CP-5401a","SF-CP-5501a"],      

    /* 33333333333333  Socks  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
      socks: ["SF-CP-5101a"], 
};


/* ======================================
   HELPER FUNCTION (OPTIONAL BUT POWERFUL)
====================================== */

function getProductsByCategory(cat){

  if(!CATEGORIES[cat]) return [];

  return CATEGORIES[cat].map(id => ({
    id,
    ...PRODUCTS[id]
  }));
}
