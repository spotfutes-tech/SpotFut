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

soccer_trainingwears_women: "Elite Fashion. Built for the street fashion. \n\n Material : 100% Polyester",
soccer_trainingwears_men: "Elite Fashion. Built for the street fashion. \n\n Material : 100% Polyester",
soccer_trainingwears_juniors: "Elite Fashion. Built for the street fashion. \n\n Material : 100% Polyester",

   
mesh_women_men: "Lightweight, breathable mesh training vest for maximum comfort and performance on the field. \n\n Material : moisture-wicking polyester",
mesh_juniors: "Lightweight, breathable mesh training vest for maximum comfort and performance on the field. \n\n Material : moisture-wicking polyester",


tracks_casual_women: "Breathable. Bold. Built for the move. \n\n Material : Cotton Fleece",

urbanhoodies_juniors: "Streetwear Fashion. \n\n Material : Cotton Fleece"

   
};

// Global fallback
const DEFAULT_SIZES = ["3XS","2XS","XS","S","M","L","XL","2XL","3XL"];

// Category-based sizes
const CATEGORY_SIZES = {
  soccer_kits_men: ["3XS","2XS","XS","S","M","L","XL","2XL","3XL"],
  classic_tracksets_men: ["XS","S","M","L","XL","2XL"],
   puffers_men: ["XS","S","M","L","XL","2XL"],
   puffers_women: ["XS","S","M","L","XL","2XL"],
   classic_tracksets_women: ["XS","S","M","L","XL","2XL","3XL"],
   mesh_women_men: ["S","M","L","XL","2XL"],
   mesh_juniors: ["3XS","2XS","XS","S"],
   urbanhoodies_juniors: ["3XS","2XS","XS","S"],
   bags: ["Standard"],
   caps: ["S","M","L"],
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
         /* 11111111111111....... Men Football Basic Kits .........................*/
"SF-SJM-B901a":{"name":"Soccer Hexa Pulse Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B901_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B901_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B901_3.jpg"]},
"SF-SJM-B902a":{"name":"Soccer Titan Strike Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B902_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B902_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B902_3.jpg"]},
"SF-SJM-B903a":{"name":"Soccer Vortex Elite Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B903_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B903_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B903_3.jpg"]},
"SF-SJM-B904a":{"name":"Soccer Phantom Speed Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B904_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B904_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B904_3.jpg"]},
"SF-SJM-B905a":{"name":"Soccer Inferno Control Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B905_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B905_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B905_3.jpg"]},
"SF-SJM-B906a":{"name":"Soccer Storm Breaker Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B906_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B906_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B906_3.jpg"]},
"SF-SJM-B907a":{"name":"Soccer Apex Finisher Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B907_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B907_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B907_3.jpg"]},
"SF-SJM-B908a":{"name":"Soccer Quantum Play Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B908_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B908_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B908_3.jpg"]},
"SF-SJM-B909a":{"name":"Soccer Neon Strike Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B909_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B909_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B909_3.jpg"]},
"SF-SJM-B910a":{"name":"Soccer Gravity Flow Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B910_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B910_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B910_3.jpg"]},
"SF-SJM-B911a":{"name":"Soccer Ultra Fusion Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B911_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B911_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B911_3.jpg"]},

 "SF-SJM-B801a":{"name":"Soccer Aero Strike Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B801_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B801_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B801_3.jpg"]},
"SF-SJM-B802a":{"name":"Soccer Iron Pulse Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B802_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B802_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B802_3.jpg"]},
"SF-SJM-B803a":{"name":"Soccer Blaze Runner Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B803_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B803_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B803_3.jpg"]},
"SF-SJM-B804a":{"name":"Soccer Night Fury Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B804_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B804_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B804_3.jpg"]},
"SF-SJM-B805a":{"name":"Soccer Thunder Kick Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B805_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B805_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B805_3.jpg"]},
"SF-SJM-B806a":{"name":"Soccer Phantom Rush Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B806_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B806_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B806_3.jpg"]},
"SF-SJM-B807a":{"name":"Soccer Solar Edge Edition","price":11,"category":"soccer_kits_men","img":["Soccer_Hero/Men_Images/SF-SJM-B807_1.jpg","Soccer_Hero/Men_Images/SF-SJM-B807_2.jpg","Soccer_Hero/Men_Images/SF-SJM-B807_3.jpg"]},  
      /* 11111111111111....... Men Football Sublimated Kits .........................*/

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

   /* 11111111111111....... Men Mehs Vests .........................*/
  "SF-MWU-685a": {"name": "SF Vest","price": 06,category: "mesh_women_men","img": ["Men/Images_Mesh/SF-MWU-685_1.png","Men/Images_Mesh/SF-MWU-685_2.png"]},
"SF-MWU-686a": {"name": "SF Vest","price": 06,category: "mesh_women_men","img": ["Men/Images_Mesh/SF-MWU-686_1.png","Men/Images_Mesh/SF-MWU-686_2.png"]},
"SF-MWU-687a": {"name": "SF Vest","price": 06,category: "mesh_women_men","img": ["Men/Images_Mesh/SF-MWU-687_1.png","Men/Images_Mesh/SF-MWU-687_2.png"]},
 
   /* 11111111111111....... Men Soccer Training Sets .........................*/
  "SF-STD-601a":{"name":"SF Training Half-Zip M601","price":31,"category":"soccer_trainingwears_men","img":["Men/Images_TrainingSets/SF-STD-M601_1.jpeg","Men/Images_TrainingSets/SF-STD-M601_2.jpeg","Men/Images_TrainingSets/SF-STD-M601_3.jpeg"]},
"SF-STD-602a":{"name":"SF Training Half-Zip M602","price":31,"category":"soccer_trainingwears_men","img":["Men/Images_TrainingSets/SF-STD-M602_1.jpeg","Men/Images_TrainingSets/SF-STD-M602_2.jpeg","Men/Images_TrainingSets/SF-STD-M602_3.jpeg"]},
"SF-STD-603a":{"name":"SF Training Half-Zip M603","price":31,"category":"soccer_trainingwears_men","img":["Men/Images_TrainingSets/SF-STD-M603_1.jpeg","Men/Images_TrainingSets/SF-STD-M603_2.jpeg","Men/Images_TrainingSets/SF-STD-M603_3.jpeg"]},
"SF-STD-604a":{"name":"SF Training Half-Zip M604","price":31,"category":"soccer_trainingwears_men","img":["Men/Images_TrainingSets/SF-STD-M604_1.jpeg","Men/Images_TrainingSets/SF-STD-M604_2.jpeg","Men/Images_TrainingSets/SF-STD-M604_3.jpeg"]},
"SF-STD-605a":{"name":"SF Training Half-Zip M605","price":31,"category":"soccer_trainingwears_men","img":["Men/Images_TrainingSets/SF-STD-M605_1.jpeg","Men/Images_TrainingSets/SF-STD-M605_2.jpeg","Men/Images_TrainingSets/SF-STD-M605_3.jpeg"]},
"SF-STD-606a":{"name":"SF Training Half-Zip M606","price":31,"category":"soccer_trainingwears_men","img":["Men/Images_TrainingSets/SF-STD-M606_1.jpeg","Men/Images_TrainingSets/SF-STD-M606_2.jpeg","Men/Images_TrainingSets/SF-STD-M606_3.jpeg"]},
"SF-STD-607a":{"name":"SF Training Half-Zip M607","price":31,"category":"soccer_trainingwears_men","img":["Men/Images_TrainingSets/SF-STD-M607_1.jpeg","Men/Images_TrainingSets/SF-STD-M607_2.jpeg","Men/Images_TrainingSets/SF-STD-M607_3.jpeg"]},
"SF-STD-608a":{"name":"SF Training Half-Zip M608","price":31,"category":"soccer_trainingwears_men","img":["Men/Images_TrainingSets/SF-STD-M608_1.jpeg","Men/Images_TrainingSets/SF-STD-M608_2.jpeg","Men/Images_TrainingSets/SF-STD-M608_3.jpeg"]},

   
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


     /* 11111111111111....... Men Tracksets travel .........................*/
"SF-TTS-M550a": {"name": "Spot M550 Trackset","price": 31,"img": ["Men/Images_Trackset_Travel/SF-TTS-M550_1.png","Men/Images_Trackset_Travel/SF-TTS-M550_2.png","Men/Images_Trackset_Travel/SF-TTS-M550_3.png"]},
"SF-TTS-M551a":{"name":"Spot M551 Trackset","price":32,"img":["Men/Images_Trackset_Travel/SF-TTS-M551_1.png","Men/Images_Trackset_Travel/SF-TTS-M551_2.png","Men/Images_Trackset_Travel/SF-TTS-M551_3.png"]},
"SF-TTS-M552a":{"name":"Spot M552 Trackset","price":33,"img":["Men/Images_Trackset_Travel/SF-TTS-M552_1.png","Men/Images_Trackset_Travel/SF-TTS-M552_2.png","Men/Images_Trackset_Travel/SF-TTS-M552_3.png"]},
"SF-TTS-M553a":{"name":"Spot M553 Trackset","price":34,"img":["Men/Images_Trackset_Travel/SF-TTS-M553_1.png","Men/Images_Trackset_Travel/SF-TTS-M553_2.png","Men/Images_Trackset_Travel/SF-TTS-M553_3.png"]},
   
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
"SF-PJ-M852a": {"name": "Spot MJ852 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M852_1.jpg","Men/Imagers_Puffers/SF-PJ-M852_2.jpg","Men/Imagers_Puffers/SF-PJ-M852_3.jpg"]},
"SF-PJ-M853a": {"name": "Spot MJ853 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M853_1.jpg","Men/Imagers_Puffers/SF-PJ-M853_2.jpg","Men/Imagers_Puffers/SF-PJ-M853_3.jpg"]},
"SF-PJ-M854a": {"name": "Spot MJ854 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M854_1.jpg","Men/Imagers_Puffers/SF-PJ-M854_2.jpg","Men/Imagers_Puffers/SF-PJ-M854_3.jpg"]},
"SF-PJ-M855a": {"name": "Spot MJ855 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M855_1.jpg","Men/Imagers_Puffers/SF-PJ-M855_2.jpg","Men/Imagers_Puffers/SF-PJ-M855_3.jpg"]},

"SF-PJ-M911a": {"name": "Spot MJ855 Puffer","price": 31, "category": "puffers_men","img": ["Men/Imagers_Puffers/SF-PJ-M911_1.jpg","Men/Imagers_Puffers/SF-PJ-M911_2.jpg","Men/Imagers_Puffers/SF-PJ-M911_3.jpg"]},



 /* 11111111111111....... Men Urban Hoodies .........................*/
"SF-UHM-S001a":{"name":"SF Training Tops S001","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S001_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S001_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S001_3.jpg"]},
"SF-UHM-S001a":{"name":"SF Training Tops S001","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S001_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S001_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S001_3.jpg"]},
"SF-UHM-S002a":{"name":"SF Training Tops S002","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S002_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S002_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S002_3.jpg"]},
"SF-UHM-S003a":{"name":"SF Training Tops S003","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S003_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S003_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S003_3.jpg"]},
"SF-UHM-S004a":{"name":"SF Training Tops S004","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S004_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S004_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S004_3.jpg"]},
"SF-UHM-S005a":{"name":"SF Training Tops S005","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S005_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S005_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S005_3.jpg"]},
"SF-UHM-S006a":{"name":"SF Training Tops S006","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S006_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S006_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S006_3.jpg"]},
"SF-UHM-S007a":{"name":"SF Training Tops S007","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S007_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S007_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S007_3.jpg"]},
"SF-UHM-S008a":{"name":"SF Training Tops S008","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S008_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S008_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S008_3.jpg"]},
"SF-UHM-S009a":{"name":"SF Training Tops S009","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S009_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S009_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S009_3.jpg"]},
"SF-UHM-S010a":{"name":"SF Training Tops S010","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S010_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S010_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S010_3.jpg"]},
"SF-UHM-S011a":{"name":"SF Training Tops S011","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S011_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S011_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S011_3.jpg"]},

"SF-UHM-S101a":{"name":"SF Training Tops S101","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S101_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S101_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S101_3.jpg"]},
"SF-UHM-S102a":{"name":"SF Training Tops S102","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S102_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S102_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S102_3.jpg"]},
"SF-UHM-S103a":{"name":"SF Training Tops S103","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S103_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S103_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S103_3.jpg"]},
"SF-UHM-S104a":{"name":"SF Training Tops S104","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S104_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S104_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S104_3.jpg"]},
"SF-UHM-S105a":{"name":"SF Training Tops S105","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S105_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S105_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S105_3.jpg"]},
"SF-UHM-S106a":{"name":"SF Training Tops S106","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S106_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S106_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S106_3.jpg"]},
"SF-UHM-S107a":{"name":"SF Training Tops S107","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S107_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S107_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S107_3.jpg"]},
"SF-UHM-S108a":{"name":"SF Training Tops S108","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S108_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S108_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S108_3.jpg"]},
"SF-UHM-S109a":{"name":"SF Training Tops S109","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S109_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S109_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S109_3.jpg"]},

"SF-UHM-S200a":{"name":"SF Training Tops S200","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S200_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S200_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S200_3.jpg"]},
"SF-UHM-S201a":{"name":"SF Training Tops S201","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S201_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S201_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S201_3.jpg"]},
"SF-UHM-S202a":{"name":"SF Training Tops S202","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S202_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S202_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S202_3.jpg"]},
"SF-UHM-S203a":{"name":"SF Training Tops S203","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S203_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S203_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S203_3.jpg"]},
"SF-UHM-S204a":{"name":"SF Training Tops S204","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S204_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S204_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S204_3.jpg"]},
"SF-UHM-S205a":{"name":"SF Training Tops S205","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S205_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S205_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S205_3.jpg"]},
"SF-UHM-S206a":{"name":"SF Training Tops S206","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S206_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S206_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S206_3.jpg"]},
"SF-UHM-S207a":{"name":"SF Training Tops S207","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S207_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S207_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S207_3.jpg"]},
"SF-UHM-S208a":{"name":"SF Training Tops S208","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S208_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S208_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S208_3.jpg"]},
"SF-UHM-S209a":{"name":"SF Training Tops S209","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S209_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S209_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S209_3.jpg"]},

"SF-UHM-S300a":{"name":"SF Training Tops S300","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S300_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S300_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S300_3.jpg"]},
"SF-UHM-S301a":{"name":"SF Training Tops S301","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S301_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S301_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S301_3.jpg"]},
"SF-UHM-S302a":{"name":"SF Training Tops S302","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S302_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S302_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S302_3.jpg"]},
"SF-UHM-S303a":{"name":"SF Training Tops S303","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S303_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S303_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S303_3.jpg"]},
"SF-UHM-S304a":{"name":"SF Training Tops S304","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S304_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S304_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S304_3.jpg"]},
"SF-UHM-S305a":{"name":"SF Training Tops S305","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S305_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S305_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S305_3.jpg"]},
"SF-UHM-S306a":{"name":"SF Training Tops S306","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S306_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S306_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S306_3.jpg"]},
"SF-UHM-S307a":{"name":"SF Training Tops S307","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S307_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S307_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S307_3.jpg"]},
"SF-UHM-S308a":{"name":"SF Training Tops S308","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S308_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S308_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S308_3.jpg"]},
"SF-UHM-S309a":{"name":"SF Training Tops S309","price":31,"category":"soccer_trainingwears_women","img":["Men/Images_UrbanHoodies/SF-UHM-S309_1.jpg","Men/Images_UrbanHoodies/SF-UHM-S309_2.jpg","Men/Images_UrbanHoodies/SF-UHM-S309_3.jpg"]},



   
   
   /* 11111111111111....... Women Football Kits .........................*/

 /* 11111111111111....... Women Football Basic Kits .........................*/
"SF-SJF-B101a":{"name":"Soccer Basic Edition","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B101_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B101_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B101_3.jpg"]},
"SF-SJF-B102a":{"name":"Soccer Swift Motion Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B102_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B102_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B102_3.jpg"]},
"SF-SJF-B103a":{"name":"Soccer Elite Grace Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B103_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B103_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B103_3.jpg"]},
"SF-SJF-B104a":{"name":"Soccer Power Curve Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B104_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B104_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B104_3.jpg"]},
"SF-SJF-B105a":{"name":"Soccer Dynamic Flow Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B105_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B105_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B105_3.jpg"]},
"SF-SJF-B106a":{"name":"Soccer Precision Touch Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B106_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B106_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B106_3.jpg"]},
"SF-SJF-B107a":{"name":"Soccer Velocity Queen Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B107_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B107_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B107_3.jpg"]},
"SF-SJF-B108a":{"name":"Soccer Strike Diva Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B108_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B108_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B108_3.jpg"]},
"SF-SJF-B109a":{"name":"Soccer Champion Edge Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B109_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B109_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B109_3.jpg"]},
"SF-SJF-B110a":{"name":"Soccer Ultimate Style Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B110_1.jpg","Soccer_Hero/Women_Images/SF-SJF-B110_2.jpg","Soccer_Hero/Women_Images/SF-SJF-B110_3.jpg"]},

"SF-SJF-B201a":{"name":"Soccer Prime Motion Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B201_1.png","Soccer_Hero/Women_Images/SF-SJF-B201_2.png","Soccer_Hero/Women_Images/SF-SJF-B201_3.png"]},
"SF-SJF-B202a":{"name":"Soccer Nova Strike Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B202_1.png","Soccer_Hero/Women_Images/SF-SJF-B202_2.png","Soccer_Hero/Women_Images/SF-SJF-B202_3.png"]},
"SF-SJF-B203a":{"name":"Soccer Stellar Grace Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B203_1.png","Soccer_Hero/Women_Images/SF-SJF-B203_2.png","Soccer_Hero/Women_Images/SF-SJF-B203_3.png"]},
"SF-SJF-B204a":{"name":"Soccer Fusion Flow Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B204_1.png","Soccer_Hero/Women_Images/SF-SJF-B204_2.png","Soccer_Hero/Women_Images/SF-SJF-B204_3.png"]},
"SF-SJF-B205a":{"name":"Soccer Power Bloom Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B205_1.png","Soccer_Hero/Women_Images/SF-SJF-B205_2.png","Soccer_Hero/Women_Images/SF-SJF-B205_3.png"]},
"SF-SJF-B206a":{"name":"Soccer Swift Edge Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B206_1.png","Soccer_Hero/Women_Images/SF-SJF-B206_2.png","Soccer_Hero/Women_Images/SF-SJF-B206_3.png"]},
"SF-SJF-B207a":{"name":"Soccer Elite Rhythm Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B207_1.png","Soccer_Hero/Women_Images/SF-SJF-B207_2.png","Soccer_Hero/Women_Images/SF-SJF-B207_3.png"]},
"SF-SJF-B208a":{"name":"Soccer Turbo Grace Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B208_1.png","Soccer_Hero/Women_Images/SF-SJF-B208_2.png","Soccer_Hero/Women_Images/SF-SJF-B208_3.png"]},
"SF-SJF-B209a":{"name":"Soccer Victory Pulse Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B209_1.png","Soccer_Hero/Women_Images/SF-SJF-B209_2.png","Soccer_Hero/Women_Images/SF-SJF-B209_3.png"]},
"SF-SJF-B210a":{"name":"Soccer Supreme Style Kit","price":11,"category":"soccer_kits_women","img":["Soccer_Hero/Women_Images/SF-SJF-B210_1.png","Soccer_Hero/Women_Images/SF-SJF-B210_2.png","Soccer_Hero/Women_Images/SF-SJF-B210_3.png"]},

   
    /* 11111111111111....... Women Football Sublimated Kits .........................*/
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
"SF-SJF-S011a": {"name": "Soccer Titan Noir Edition", "price": 11,  category: "soccer_kits_women", "img": ["Soccer_Hero/Women_Images/SF-SJF-S011_1.png", "Soccer_Hero/Women_Images/SF-SJF-S011_2.png", "Soccer_Hero/Women_Images/SF-SJF-S011_3.png"]},


    /* 11111111111111....... Women Mehs Vests .........................*/
  "SF-MWU-682a": {"name": "SF Vest","price": 06,category: "mesh_women_men","img": ["Women/Images_Mesh/SF-MWU-682_1.png","Women/Images_Mesh/SF-MWU-682_2.png"]},
"SF-MWU-683a": {"name": "SF Vest","price": 06,category: "mesh_women_men","img": ["Women/Images_Mesh/SF-MWU-683_1.png","Women/Images_Mesh/SF-MWU-683_2.png"]},
"SF-MWU-684a": {"name": "SF Vest","price": 06,category: "mesh_women_men","img": ["Women/Images_Mesh/SF-MWU-684_1.png","Women/Images_Mesh/SF-MWU-684_2.png"]},

    /* 11111111111111....... Women Soccer Training Sets .........................*/
"SF-STD-F121a":{"name":"SF Training Half-Zip F121","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_TrainingSets/SF-STD-F121_1.jpeg","Women/Images_TrainingSets/SF-STD-F121_2.jpeg","Women/Images_TrainingSets/SF-STD-F121_3.jpeg"]},
"SF-STD-F122a":{"name":"SF Training Half-Zip F122","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_TrainingSets/SF-STD-F122_1.jpeg","Women/Images_TrainingSets/SF-STD-F122_2.jpeg","Women/Images_TrainingSets/SF-STD-F122_3.jpeg"]},
"SF-STD-F123a":{"name":"SF Training Half-Zip F123","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_TrainingSets/SF-STD-F123_1.jpeg","Women/Images_TrainingSets/SF-STD-F123_2.jpeg","Women/Images_TrainingSets/SF-STD-F123_3.jpeg"]},
"SF-STD-F124a":{"name":"SF Training Half-Zip F124","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_TrainingSets/SF-STD-F124_1.jpeg","Women/Images_TrainingSets/SF-STD-F124_2.jpeg","Women/Images_TrainingSets/SF-STD-F124_3.jpeg"]},
"SF-STD-F125a":{"name":"SF Training Half-Zip F125","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_TrainingSets/SF-STD-F125_1.jpeg","Women/Images_TrainingSets/SF-STD-F125_2.jpeg","Women/Images_TrainingSets/SF-STD-F125_3.jpeg"]},
"SF-STD-F126a":{"name":"SF Training Half-Zip F126","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_TrainingSets/SF-STD-F126_1.jpeg","Women/Images_TrainingSets/SF-STD-F126_2.jpeg","Women/Images_TrainingSets/SF-STD-F126_3.jpeg"]},
"SF-STD-F127a":{"name":"SF Training Half-Zip F127","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_TrainingSets/SF-STD-F127_1.jpeg","Women/Images_TrainingSets/SF-STD-F127_2.jpeg","Women/Images_TrainingSets/SF-STD-F127_3.jpeg"]},
"SF-STD-F128a":{"name":"SF Training Half-Zip F128","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_TrainingSets/SF-STD-F128_1.jpeg","Women/Images_TrainingSets/SF-STD-F128_2.jpeg","Women/Images_TrainingSets/SF-STD-F128_3.jpeg"]},



 /* 11111111111111....... Women Training Tops .........................*/
"SF_FTT_L112a":{"name":"SF Training Tops L112","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF_FTT_L112_1.jpg","Women/Images_Training_Tops/SF_FTT_L112_2.jpg","Women/Images_Training_Tops/SF_FTT_L112_3.jpg"]},
"SF_FTT_L113a":{"name":"SF Training Tops L113","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF_FTT_L113_1.jpg","Women/Images_Training_Tops/SF_FTT_L113_2.jpg","Women/Images_Training_Tops/SF_FTT_L113_3.jpg"]},
"SF_FTT_L114a":{"name":"SF Training Tops L114","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF_FTT_L114_1.jpg","Women/Images_Training_Tops/SF_FTT_L114_2.jpg","Women/Images_Training_Tops/SF_FTT_L114_3.jpg"]},
"SF_FTT_L115a":{"name":"SF Training Tops L115","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF_FTT_L115_1.jpg","Women/Images_Training_Tops/SF_FTT_L115_2.jpg","Women/Images_Training_Tops/SF_FTT_L115_3.jpg"]},
"SF_FTT_L116a":{"name":"SF Training Tops L116","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF_FTT_L116_1.jpg","Women/Images_Training_Tops/SF_FTT_L116_2.jpg","Women/Images_Training_Tops/SF_FTT_L116_3.jpg"]},
"SF_FTT_L117a":{"name":"SF Training Tops L117","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF_FTT_L117_1.png","Women/Images_Training_Tops/SF_FTT_L117_2.png","Women/Images_Training_Tops/SF_FTT_L117_3.png"]},
"SF_FTT_L118a":{"name":"SF Training Tops L118","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF_FTT_L118_1.jpg","Women/Images_Training_Tops/SF_FTT_L118_2.jpg","Women/Images_Training_Tops/SF_FTT_L118_3.jpg"]},
"SF-GCF-S101a":{"name":"SF Training Tops S101","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF-GCF-S101_1.png","Women/Images_Training_Tops/SF-GCF-S101_2.png","Women/Images_Training_Tops/SF-GCF-S101_3.png"]},
"SF-GCF-S102a":{"name":"SF Training Tops S102","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF-GCF-S102_1.jpg","Women/Images_Training_Tops/SF-GCF-S102_2.jpg","Women/Images_Training_Tops/SF-GCF-S102_3.jpg"]},
"SF-GCF-S103a":{"name":"SF Training Tops S103","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF-GCF-S103_1.jpg","Women/Images_Training_Tops/SF-GCF-S103_2.jpg","Women/Images_Training_Tops/SF-GCF-S103_3.jpg"]},
"SF-GCF-S104a":{"name":"SF Training Tops S104","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF-GCF-S104_1.jpg","Women/Images_Training_Tops/SF-GCF-S104_2.jpg","Women/Images_Training_Tops/SF-GCF-S104_3.jpg"]},
"SF-GCF-S105a":{"name":"SF Training Tops S105","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF-GCF-S105_1.jpg","Women/Images_Training_Tops/SF-GCF-S105_2.jpg","Women/Images_Training_Tops/SF-GCF-S105_3.jpg"]},
"SF-GCF-S106a":{"name":"SF Training Tops S106","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF-GCF-S106_1.jpg","Women/Images_Training_Tops/SF-GCF-S106_2.jpg","Women/Images_Training_Tops/SF-GCF-S106_3.jpg"]},
"SF-GCF-S107a":{"name":"SF Training Tops S107","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_Training_Tops/SF-GCF-S107_1.jpg","Women/Images_Training_Tops/SF-GCF-S107_2.jpg","Women/Images_Training_Tops/SF-GCF-S107_3.jpg"]},

 /* 11111111111111....... Women Urban Hoodies .........................*/
"SF-UHF-S100a":{"name":"SF Training Tops S100","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S100_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S100_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S100_3.jpg"]},
"SF-UHF-S101a":{"name":"SF Training Tops S101","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S101_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S101_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S101_3.jpg"]},
"SF-UHF-S102a":{"name":"SF Training Tops S102","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S102_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S102_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S102_3.jpg"]},
"SF-UHF-S103a":{"name":"SF Training Tops S103","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S103_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S103_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S103_3.jpg"]},
"SF-UHF-S104a":{"name":"SF Training Tops S104","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S104_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S104_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S104_3.jpg"]},
"SF-UHF-S105a":{"name":"SF Training Tops S105","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S105_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S105_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S105_3.jpg"]},

"SF-UHF-S200a":{"name":"SF Training Tops S200","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S200_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S200_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S200_3.jpg"]},
"SF-UHF-S201a":{"name":"SF Training Tops S201","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S201_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S201_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S201_3.jpg"]},
"SF-UHF-S202a":{"name":"SF Training Tops S202","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S202_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S202_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S202_3.jpg"]},
"SF-UHF-S203a":{"name":"SF Training Tops S203","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S203_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S203_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S203_3.jpg"]},
"SF-UHF-S204a":{"name":"SF Training Tops S204","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S204_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S204_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S204_3.jpg"]},
"SF-UHF-S205a":{"name":"SF Training Tops S205","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S205_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S205_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S205_3.jpg"]},

"SF-UHF-S300a":{"name":"SF Training Tops S300","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S300_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S300_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S300_3.jpg"]},
"SF-UHF-S301a":{"name":"SF Training Tops S301","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S301_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S301_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S301_3.jpg"]},
"SF-UHF-S302a":{"name":"SF Training Tops S302","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S302_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S302_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S302_3.jpg"]},
"SF-UHF-S303a":{"name":"SF Training Tops S303","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S303_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S303_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S303_3.jpg"]},
"SF-UHF-S304a":{"name":"SF Training Tops S304","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S304_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S304_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S304_3.jpg"]},
"SF-UHF-S305a":{"name":"SF Training Tops S305","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S305_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S305_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S305_3.jpg"]},

"SF-UHF-S400a":{"name":"SF Training Tops S400","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S400_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S400_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S400_3.jpg"]},
"SF-UHF-S401a":{"name":"SF Training Tops S401","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S401_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S401_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S401_3.jpg"]},
"SF-UHF-S402a":{"name":"SF Training Tops S402","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S402_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S402_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S402_3.jpg"]},
"SF-UHF-S403a":{"name":"SF Training Tops S403","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S403_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S403_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S403_3.jpg"]},
"SF-UHF-S404a":{"name":"SF Training Tops S404","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S404_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S404_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S404_3.jpg"]},
"SF-UHF-S405a":{"name":"SF Training Tops S405","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S405_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S405_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S405_3.jpg"]},
"SF-UHF-S406a":{"name":"SF Training Tops S406","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S406_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S406_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S406_3.jpg"]},

"SF-UHF-S500a":{"name":"SF Training Tops S500","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S500_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S500_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S500_3.jpg"]},
"SF-UHF-S501a":{"name":"SF Training Tops S501","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S501_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S501_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S501_3.jpg"]},
"SF-UHF-S502a":{"name":"SF Training Tops S502","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S502_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S502_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S502_3.jpg"]},
"SF-UHF-S503a":{"name":"SF Training Tops S503","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S503_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S503_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S503_3.jpg"]},
"SF-UHF-S504a":{"name":"SF Training Tops S504","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S504_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S504_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S504_3.jpg"]},
"SF-UHF-S505a":{"name":"SF Training Tops S505","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S505_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S505_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S505_3.jpg"]},
"SF-UHF-S506a":{"name":"SF Training Tops S506","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S506_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S506_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S506_3.jpg"]},
"SF-UHF-S507a":{"name":"SF Training Tops S507","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S507_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S507_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S507_3.jpg"]},

"SF-UHF-S600a":{"name":"SF Training Tops S600","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S600_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S600_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S600_3.jpg"]},
"SF-UHF-S601a":{"name":"SF Training Tops S601","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S601_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S601_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S601_3.jpg"]},
"SF-UHF-S602a":{"name":"SF Training Tops S602","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S602_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S602_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S602_3.jpg"]},
"SF-UHF-S603a":{"name":"SF Training Tops S603","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S603_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S603_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S603_3.jpg"]},
"SF-UHF-S604a":{"name":"SF Training Tops S604","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S604_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S604_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S604_3.jpg"]},
"SF-UHF-S605a":{"name":"SF Training Tops S605","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S605_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S605_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S605_3.jpg"]},
"SF-UHF-S606a":{"name":"SF Training Tops S606","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S606_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S606_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S606_3.jpg"]},
"SF-UHF-S607a":{"name":"SF Training Tops S607","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S607_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S607_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S607_3.jpg"]},

"SF-UHF-S700a":{"name":"SF Training Tops S700","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S700_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S700_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S700_3.jpg"]},
"SF-UHF-S701a":{"name":"SF Training Tops S701","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S701_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S701_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S701_3.jpg"]},
"SF-UHF-S702a":{"name":"SF Training Tops S702","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S702_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S702_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S702_3.jpg"]},
"SF-UHF-S703a":{"name":"SF Training Tops S703","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S703_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S703_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S703_3.jpg"]},
"SF-UHF-S704a":{"name":"SF Training Tops S704","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S704_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S704_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S704_3.jpg"]},
"SF-UHF-S705a":{"name":"SF Training Tops S705","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S705_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S705_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S705_3.jpg"]},
"SF-UHF-S706a":{"name":"SF Training Tops S706","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S706_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S706_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S706_3.jpg"]},
"SF-UHF-S707a":{"name":"SF Training Tops S707","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S707_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S707_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S707_3.jpg"]},
"SF-UHF-S708a":{"name":"SF Training Tops S708","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S708_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S708_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S708_3.jpg"]},
"SF-UHF-S709a":{"name":"SF Training Tops S709","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S709_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S709_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S709_3.jpg"]},
"SF-UHF-S710a":{"name":"SF Training Tops S710","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S710_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S710_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S710_3.jpg"]},

"SF-UHF-S800a":{"name":"SF Training Tops S800","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S800_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S800_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S800_3.jpg"]},
"SF-UHF-S801a":{"name":"SF Training Tops S801","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S801_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S801_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S801_3.jpg"]},
"SF-UHF-S802a":{"name":"SF Training Tops S802","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S802_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S802_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S802_3.jpg"]},
"SF-UHF-S803a":{"name":"SF Training Tops S803","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S803_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S803_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S803_3.jpg"]},
"SF-UHF-S804a":{"name":"SF Training Tops S804","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S804_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S804_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S804_3.jpg"]},
"SF-UHF-S805a":{"name":"SF Training Tops S805","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S805_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S805_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S805_3.jpg"]},
"SF-UHF-S806a":{"name":"SF Training Tops S806","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S806_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S806_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S806_3.jpg"]},
"SF-UHF-S807a":{"name":"SF Training Tops S807","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S807_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S807_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S807_3.jpg"]},
"SF-UHF-S808a":{"name":"SF Training Tops S808","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S808_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S808_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S808_3.jpg"]},
"SF-UHF-S809a":{"name":"SF Training Tops S809","price":31,"category":"soccer_trainingwears_women","img":["Women/Images_UrbanHoodies/SF-UHF-S809_1.jpg","Women/Images_UrbanHoodies/SF-UHF-S809_2.jpg","Women/Images_UrbanHoodies/SF-UHF-S809_3.jpg"]},

   
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
"SF-PJ-F201a": {"name": "Spot FJ201 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F201_1.png","Women/Images_Puffers/SF-PJ-F201_2.jpg","Women/Images_Puffers/SF-PJ-F201_3.jpg"]},
"SF-PJ-F202a": {"name": "Spot FJ202 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F202_1.png","Women/Images_Puffers/SF-PJ-F202_2.jpg","Women/Images_Puffers/SF-PJ-F202_3.jpg"]},
"SF-PJ-F203a": {"name": "Spot FJ203 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F203_1.png","Women/Images_Puffers/SF-PJ-F203_2.jpg","Women/Images_Puffers/SF-PJ-F203_3.jpg"]},
"SF-PJ-F204a": {"name": "Spot FJ204 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F204_1.png","Women/Images_Puffers/SF-PJ-F204_2.jpg","Women/Images_Puffers/SF-PJ-F204_3.jpg"]},
"SF-PJ-F205a": {"name": "Spot FJ205 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F205_1.png","Women/Images_Puffers/SF-PJ-F205_2.jpg","Women/Images_Puffers/SF-PJ-F205_3.jpg"]},

   "SF-PJ-F301a": {"name": "Spot FJ301 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F301_1.png","Women/Images_Puffers/SF-PJ-F301_2.png","Women/Images_Puffers/SF-PJ-F301_3.jpg"]},
"SF-PJ-F302a": {"name": "Spot FJ302 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F302_1.png","Women/Images_Puffers/SF-PJ-F302_2.jpg","Women/Images_Puffers/SF-PJ-F302_3.jpg"]},
"SF-PJ-F303a": {"name": "Spot FJ303 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F303_1.png","Women/Images_Puffers/SF-PJ-F303_2.jpg","Women/Images_Puffers/SF-PJ-F303_3.jpg"]},
"SF-PJ-F304a": {"name": "Spot FJ304 Puffer","price": 31, "category": "puffers_women","img": ["Women/Images_Puffers/SF-PJ-F304_1.png","Women/Images_Puffers/SF-PJ-F304_2.jpg","Women/Images_Puffers/SF-PJ-F304_3.jpg"]},
   
   /* 11111111111111....... Junior Football Kits .........................*/
   /* 11111111111111....... Junior Football Kits ----- Essentials .........................*/
"SF-SJK-B001a":{"name":"Soccer Junior Basic Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B001_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B001_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B001_3.jpg"]},
"SF-SJK-B002a":{"name":"Soccer Junior Classic Training Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B002_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B002_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B002_3.jpg"]},
"SF-SJK-B003a":{"name":"Soccer Junior Pro Striker Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B003_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B003_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B003_3.jpg"]},
"SF-SJK-B004a":{"name":"Soccer Junior Elite Match Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B004_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B004_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B004_3.jpg"]},
"SF-SJK-B005a":{"name":"Soccer Junior Speed Play Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B005_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B005_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B005_3.jpg"]},
"SF-SJK-B006a":{"name":"Soccer Junior Power Kick Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B006_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B006_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B006_3.jpg"]},
"SF-SJK-B007a":{"name":"Soccer Junior Goal Master Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B007_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B007_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B007_3.jpg"]},
"SF-SJK-B008a":{"name":"Soccer Junior Champions League Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B008_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B008_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B008_3.jpg"]},

"SF-SJK-B050a":{"name":"Soccer Junior Starter Control Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B050_1.png","Soccer_Hero/Junior_Images/SF_SJK_B050_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B050_3.jpg"]},
"SF-SJK-B051a":{"name":"Soccer Junior Precision Strike Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B051_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B051_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B051_3.jpg"]},
"SF-SJK-B052a":{"name":"Soccer Junior Speed Dribble Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B052_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B052_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B052_3.jpg"]},
"SF-SJK-B053a":{"name":"Soccer Junior Power Finish Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B053_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B053_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B053_3.jpg"]},
"SF-SJK-B054a":{"name":"Soccer Junior Elite Defender Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B054_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B054_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B054_3.jpg"]},
"SF-SJK-B055a":{"name":"Soccer Junior Pro Vision Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B055_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B055_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B055_3.jpg"]},
"SF-SJK-B056a":{"name":"Soccer Junior Rapid Attack Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B056_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B056_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B056_3.jpg"]},
"SF-SJK-B057a":{"name":"Soccer Junior Championship Flow Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B057_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B057_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B057_3.jpg"]},
"SF-SJK-B058a":{"name":"Soccer Junior Elite Playmaker Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF_SJK_B058_1.jpg","Soccer_Hero/Junior_Images/SF_SJK_B058_2.jpg","Soccer_Hero/Junior_Images/SF_SJK_B058_3.jpg"]},

   
"SF-SJK-B101a":{"name":"Soccer Junior Elite Striker Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B101_1.png","Soccer_Hero/Junior_Images/SF-SJK-B101_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B101_3.jpg"]},
"SF-SJK-B102a":{"name":"Soccer Junior Turbo Kick Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B102_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B102_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B102_3.jpg"]},
"SF-SJK-B103a":{"name":"Soccer Junior Pro Control Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B103_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B103_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B103_3.jpg"]},
"SF-SJK-B104a":{"name":"Soccer Junior Speed Attack Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B104_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B104_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B104_3.jpg"]},
"SF-SJK-B105a":{"name":"Soccer Junior Precision Play Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B105_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B105_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B105_3.jpg"]},
"SF-SJK-B106a":{"name":"Soccer Junior Power Shot Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B106_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B106_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B106_3.jpg"]},
"SF-SJK-B107a":{"name":"Soccer Junior Rapid Dribble Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B107_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B107_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B107_3.jpg"]},
"SF-SJK-B108a":{"name":"Soccer Junior Champion Strike Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B108_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B108_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B108_3.jpg"]},
"SF-SJK-B109a":{"name":"Soccer Junior Elite Vision Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B109_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B109_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B109_3.jpg"]},
"SF-SJK-B110a":{"name":"Soccer Junior Master Play Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B110_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B110_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B110_3.jpg"]},
"SF-SJK-B111a":{"name":"Soccer Junior Final Goal Kit","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-B111_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-B111_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-B111_3.jpg"]},
   /* 11111111111111....... Junior Football Kits ----- Sublimated .........................*/
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


      /* 11111111111111....... Junior Basketball Kits .........................*/
"SF-BJK-S001a":{"name":"Basketball Junior Strike Pro Edition","price":11,"img":["BasketBall/Juniors_Kits/SF-BJK-S001_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S001_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S001_3.jpg"]},
"SF-BJK-S002a":{"name":"Basketball Junior Thunder Elite Kit","price":12,"img":["BasketBall/Juniors_Kits/SF-BJK-S002_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S002_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S002_3.jpg"]},
"SF-BJK-S003a":{"name":"Basketball Junior Blaze Performance Kit","price":13,"img":["BasketBall/Juniors_Kits/SF-BJK-S003_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S003_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S003_3.jpg"]},
"SF-BJK-S004a":{"name":"Basketball Junior Court Kings Kit","price":14,"img":["BasketBall/Juniors_Kits/SF-BJK-S004_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S004_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S004_3.jpg"]},
"SF-BJK-S005a":{"name":"Basketball Junior Slam Dunk Pro Kit","price":15,"img":["BasketBall/Juniors_Kits/SF-BJK-S005_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S005_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S005_3.jpg"]},
"SF-BJK-S006a":{"name":"Basketball Junior Fast Break Champions Kit","price":16,"img":["BasketBall/Juniors_Kits/SF-BJK-S006_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S006_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S006_3.jpg"]},

"SF-BJK-S101a":{"name":"Basketball Junior Apex Warriors Kit","price":17,"img":["BasketBall/Juniors_Kits/SF-BJK-S101_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S101_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S101_3.jpg"]},
"SF-BJK-S102a":{"name":"Basketball Junior Velocity Hoops Kit","price":18,"img":["BasketBall/Juniors_Kits/SF-BJK-S102_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S102_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S102_3.jpg"]},
"SF-BJK-S103a":{"name":"Basketball Junior Power Drive Kit","price":19,"img":["BasketBall/Juniors_Kits/SF-BJK-S103_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S103_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S103_3.jpg"]},
"SF-BJK-S105a":{"name":"Basketball Junior Rising Stars Kit","price":21,"img":["BasketBall/Juniors_Kits/SF-BJK-S105_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S105_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S105_3.jpg"]},
"SF-BJK-S106a":{"name":"Basketball Junior Elite Dribblers Kit","price":22,"img":["BasketBall/Juniors_Kits/SF-BJK-S106_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S106_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S106_3.jpg"]},
"SF-BJK-S107a":{"name":"Basketball Junior Dynamic Dunkers Kit","price":23,"img":["BasketBall/Juniors_Kits/SF-BJK-S107_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S107_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S107_3.jpg"]},
"SF-BJK-S108a":{"name":"Basketball Junior All-Star Hustle Kit","price":24,"img":["BasketBall/Juniors_Kits/SF-BJK-S108_1.jpg","BasketBall/Juniors_Kits/SF-BJK-S108_2.jpg","BasketBall/Juniors_Kits/SF-BJK-S108_3.jpg"]},



   
    /* 11111111111111....... Junior Mesh Vests .........................*/
 "SF-MWU-679a": {"name": "SF Vest","price": 6,"category": "mesh_juniors","img": ["Juniors/Images_Mesh/SF-MWU-679_1.png","Juniors/Images_Mesh/SF-MWU-679_2.png"]},
"SF-MWU-680a": {"name": "SF Vest","price": 6,"category": "mesh_juniors","img": ["Juniors/Images_Mesh/SF-MWU-680_1.png","Juniors/Images_Mesh/SF-MWU-680_2.png"]},
"SF-MWU-681a": {"name": "SF Vest","price": 6,"category": "mesh_juniors","img": ["Juniors/Images_Mesh/SF-MWU-681_1.png","Juniors/Images_Mesh/SF-MWU-681_2.png"]},

    /* 11111111111111.......Junior Soccer Training Sets .........................*/
"SF-STD-J371a":{"name":"SF Training Half-Zip J371","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J371_1.jpg","Juniors/Images_TrainingSets/SF-STD-J371_2.jpg","Juniors/Images_TrainingSets/SF-STD-J371_3.jpg"]},
"SF-STD-J372a":{"name":"SF Training Half-Zip J372","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J372_1.jpg","Juniors/Images_TrainingSets/SF-STD-J372_2.jpg","Juniors/Images_TrainingSets/SF-STD-J372_3.jpg"]},
"SF-STD-J373a":{"name":"SF Training Half-Zip J373","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J373_1.jpg","Juniors/Images_TrainingSets/SF-STD-J373_2.jpg","Juniors/Images_TrainingSets/SF-STD-J373_3.jpg"]},
"SF-STD-J374a":{"name":"SF Training Half-Zip J374","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J374_1.jpg","Juniors/Images_TrainingSets/SF-STD-J374_2.jpg","Juniors/Images_TrainingSets/SF-STD-J374_3.jpg"]},
"SF-STD-J375a":{"name":"SF Training Half-Zip J375","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J375_1.jpg","Juniors/Images_TrainingSets/SF-STD-J375_2.jpg","Juniors/Images_TrainingSets/SF-STD-J375_3.jpg"]},
"SF-STD-J376a":{"name":"SF Training Half-Zip J376","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J376_1.jpg","Juniors/Images_TrainingSets/SF-STD-J376_2.jpg","Juniors/Images_TrainingSets/SF-STD-J376_3.jpg"]},
"SF-STD-J377a":{"name":"SF Training Half-Zip J377","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J377_1.jpg","Juniors/Images_TrainingSets/SF-STD-J377_2.jpg","Juniors/Images_TrainingSets/SF-STD-J377_3.jpg"]},
"SF-STD-J378a":{"name":"SF Training Half-Zip J378","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J378_1.jpg","Juniors/Images_TrainingSets/SF-STD-J378_2.jpg","Juniors/Images_TrainingSets/SF-STD-J378_3.jpg"]},
"SF-STD-J379a":{"name":"SF Training Half-Zip J379","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J379_1.jpg","Juniors/Images_TrainingSets/SF-STD-J379_2.jpg","Juniors/Images_TrainingSets/SF-STD-J379_3.jpg"]},
"SF-STD-J380a":{"name":"SF Training Half-Zip J380","price":31,"category":"soccer_trainingwears_juniors","img":["Juniors/Images_TrainingSets/SF-STD-J380_1.jpg","Juniors/Images_TrainingSets/SF-STD-J380_2.jpg","Juniors/Images_TrainingSets/SF-STD-J380_3.jpg"]},


   /* 11111111111111.......Junior urban hoodies lifestyle .........................*/
"SF-UHK-S001a":{"name":"Urban Hoodie UHK001","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S001_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S001_2.png"]},
"SF-UHK-S002a":{"name":"Urban Hoodie UHK002","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S002_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S002_2.png"]},
"SF-UHK-S003a":{"name":"Urban Hoodie UHK003","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S003_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S003_2.png"]},
"SF-UHK-S004a":{"name":"Urban Hoodie UHK004","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S004_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S004_2.png"]},
"SF-UHK-S005a":{"name":"Urban Hoodie UHK005","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S005_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S005_2.png"]},
"SF-UHK-S006a":{"name":"Urban Hoodie UHK006","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S006_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S006_2.png"]},
"SF-UHK-S007a":{"name":"Urban Hoodie UHK007","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S007_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S007_2.png"]},
"SF-UHK-S008a":{"name":"Urban Hoodie UHK008","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S008_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S008_2.png"]},
"SF-UHK-S009a":{"name":"Urban Hoodie UHK009","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S009_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S009_2.png"]},
"SF-UHK-S010a":{"name":"Urban Hoodie UHK010","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S010_1.png","Juniors/Images_UrbanHoodies/SF-UHK-S010_2.png"]},
"SF-UHK-S011a":{"name":"Urban Hoodie UHK011","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S011_1.jpg"]},
"SF-UHK-S012a":{"name":"Urban Hoodie UHK012","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S012_1.jpg"]},
"SF-UHK-S013a":{"name":"Urban Hoodie UHK013","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S013_1.jpg"]},
"SF-UHK-S014a":{"name":"Urban Hoodie UHK014","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S014_1.jpg"]},
"SF-UHK-S015a":{"name":"Urban Hoodie UHK015","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S015_1.jpg"]},
"SF-UHK-S016a":{"name":"Urban Hoodie UHK016","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S016_1.png"]},
"SF-UHK-S017a":{"name":"Urban Hoodie UHK017","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S017_1.jpg"]},
"SF-UHK-S018a":{"name":"Urban Hoodie UHK018","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S018_1.jpg"]},
"SF-UHK-S019a":{"name":"Urban Hoodie UHK019","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S019_1.jpg"]},
"SF-UHK-S020a":{"name":"Urban Hoodie UHK020","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S020_1.jpg"]},

"SF-UHK-S021a":{"name":"Urban Hoodie UHK021","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S021_1.jpg"]},
"SF-UHK-S022a":{"name":"Urban Hoodie UHK022","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S022_1.jpg"]},
"SF-UHK-S023a":{"name":"Urban Hoodie UHK023","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S023_1.jpg"]},
"SF-UHK-S024a":{"name":"Urban Hoodie UHK024","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S024_1.jpg"]},
"SF-UHK-S025a":{"name":"Urban Hoodie UHK025","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S025_1.png"]},
"SF-UHK-S026a":{"name":"Urban Hoodie UHK026","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S026_1.png"]},
"SF-UHK-S027a":{"name":"Urban Hoodie UHK027","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S027_1.jpg"]},
"SF-UHK-S028a":{"name":"Urban Hoodie UHK028","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S028_1.jpg"]},
"SF-UHK-S029a":{"name":"Urban Hoodie UHK029","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S029_1.jpg"]},
"SF-UHK-S030a":{"name":"Urban Hoodie UHK030","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S030_1.jpg"]},

"SF-UHK-S031a":{"name":"Urban Hoodie UHK031","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S031_1.jpg"]},
"SF-UHK-S032a":{"name":"Urban Hoodie UHK032","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S032_1.jpg"]},
"SF-UHK-S033a":{"name":"Urban Hoodie UHK033","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S033_1.jpg"]},
"SF-UHK-S034a":{"name":"Urban Hoodie UHK034","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S034_1.jpg"]},
"SF-UHK-S035a":{"name":"Urban Hoodie UHK035","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S035_1.jpg"]},
"SF-UHK-S036a":{"name":"Urban Hoodie UHK036","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S036_1.jpg"]},
"SF-UHK-S037a":{"name":"Urban Hoodie UHK037","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S037_1.jpg"]},
"SF-UHK-S038a":{"name":"Urban Hoodie UHK038","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S038_1.png"]},
"SF-UHK-S039a":{"name":"Urban Hoodie UHK039","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S039_1.jpg"]},
"SF-UHK-S040a":{"name":"Urban Hoodie UHK040","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S040_1.jpg"]},

"SF-UHK-S041a":{"name":"Urban Hoodie UHK041","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S041_1.jpg"]},
"SF-UHK-S042a":{"name":"Urban Hoodie UHK042","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S042_1.jpg"]},
"SF-UHK-S043a":{"name":"Urban Hoodie UHK043","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S043_1.jpg"]},
"SF-UHK-S044a":{"name":"Urban Hoodie UHK044","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S044_1.jpg"]},
"SF-UHK-S045a":{"name":"Urban Hoodie UHK045","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S045_1.jpg"]},
"SF-UHK-S046a":{"name":"Urban Hoodie UHK046","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S046_1.jpg"]},
"SF-UHK-S047a":{"name":"Urban Hoodie UHK047","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S047_1.jpg"]},
"SF-UHK-S048a":{"name":"Urban Hoodie UHK048","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S048_1.jpg"]},
"SF-UHK-S049a":{"name":"Urban Hoodie UHK049","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S049_1.jpg"]},
"SF-UHK-S050a":{"name":"Urban Hoodie UHK050","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S050_1.jpg"]},

"SF-UHK-S051a":{"name":"Urban Hoodie UHK051","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S051_1.jpg"]},
"SF-UHK-S052a":{"name":"Urban Hoodie UHK052","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S052_1.jpg"]},
"SF-UHK-S053a":{"name":"Urban Hoodie UHK053","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S053_1.png"]},
"SF-UHK-S054a":{"name":"Urban Hoodie UHK054","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S054_1.png"]},
"SF-UHK-S055a":{"name":"Urban Hoodie UHK055","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S055_1.jpg"]},
"SF-UHK-S056a":{"name":"Urban Hoodie UHK056","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S056_1.jpg"]},
"SF-UHK-S057a":{"name":"Urban Hoodie UHK057","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S057_1.jpg"]},
"SF-UHK-S058a":{"name":"Urban Hoodie UHK058","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S058_1.jpg"]},
"SF-UHK-S059a":{"name":"Urban Hoodie UHK059","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S059_1.jpg"]},
"SF-UHK-S060a":{"name":"Urban Hoodie UHK060","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S060_1.jpg"]},

"SF-UHK-S061a":{"name":"Urban Hoodie UHK061","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S061_1.jpg"]},
"SF-UHK-S062a":{"name":"Urban Hoodie UHK062","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S062_1.jpg"]},
"SF-UHK-S063a":{"name":"Urban Hoodie UHK063","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S063_1.jpg"]},
"SF-UHK-S064a":{"name":"Urban Hoodie UHK064","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S064_1.jpg"]},

 "SF-UHK-S101a":{"name":"Urban Hoodie UHK101","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S101_1.jpg"]},
  "SF-UHK-S102a":{"name":"Urban Hoodie UHK102","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S102_1.jpg"]},
"SF-UHK-S103a":{"name":"Urban Hoodie UHK103","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S103_1.png"]},
"SF-UHK-S104a":{"name":"Urban Hoodie UHK104","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S104_1.png"]},
"SF-UHK-S105a":{"name":"Urban Hoodie UHK105","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S105_1.png"]},
"SF-UHK-S106a":{"name":"Urban Hoodie UHK106","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S106_1.png"]},

"SF-UHK-S201a":{"name":"Urban Hoodie UHK201","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S201_1.jpg"]},
"SF-UHK-S202a":{"name":"Urban Hoodie UHK202","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S202_1.jpg"]},
"SF-UHK-S203a":{"name":"Urban Hoodie UHK203","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S203_1.jpg"]},
"SF-UHK-S204a":{"name":"Urban Hoodie UHK204","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S204_1.jpg"]},
"SF-UHK-S205a":{"name":"Urban Hoodie UHK205","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S205_1.jpg"]},
"SF-UHK-S206a":{"name":"Urban Hoodie UHK206","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S206_1.jpg"]},
"SF-UHK-S207a":{"name":"Urban Hoodie UHK207","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S207_1.jpg"]},
"SF-UHK-S208a":{"name":"Urban Hoodie UHK208","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S208_1.jpg"]},
"SF-UHK-S209a":{"name":"Urban Hoodie UHK209","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S209_1.png"]},

"SF-UHK-S301a":{"name":"Urban Hoodie UHK301","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S301_1.png"]},
"SF-UHK-S302a":{"name":"Urban Hoodie UHK302","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S302_1.png"]},
"SF-UHK-S303a":{"name":"Urban Hoodie UHK303","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S303_1.png"]},
"SF-UHK-S304a":{"name":"Urban Hoodie UHK304","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S304_1.png"]},
"SF-UHK-S305a":{"name":"Urban Hoodie UHK305","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S305_1.png"]},

"SF-UHK-S401a":{"name":"Urban Hoodie UHK401","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S401_1.png"]},
"SF-UHK-S402a":{"name":"Urban Hoodie UHK402","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S402_1.png"]},
"SF-UHK-S403a":{"name":"Urban Hoodie UHK403","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S403_1.png"]},
"SF-UHK-S404a":{"name":"Urban Hoodie UHK404","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S404_1.png"]},
"SF-UHK-S405a":{"name":"Urban Hoodie UHK405","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S405_1.png"]},
"SF-UHK-S406a":{"name":"Urban Hoodie UHK406","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S406_1.png"]},
"SF-UHK-S407a":{"name":"Urban Hoodie UHK407","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S407_1.png"]},
"SF-UHK-S408a":{"name":"Urban Hoodie UHK408","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S408_1.png"]},

"SF-UHK-S501a":{"name":"Urban Hoodie UHK501","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S501_1.jpg"]},
"SF-UHK-S502a":{"name":"Urban Hoodie UHK502","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S502_1.jpg"]},
"SF-UHK-S503a":{"name":"Urban Hoodie UHK503","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S503_1.jpg"]},
"SF-UHK-S504a":{"name":"Urban Hoodie UHK504","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S504_1.jpg"]},
"SF-UHK-S505a":{"name":"Urban Hoodie UHK505","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S505_1.jpg"]},
"SF-UHK-S506a":{"name":"Urban Hoodie UHK506","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S506_1.jpg"]},
"SF-UHK-S507a":{"name":"Urban Hoodie UHK507","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S507_1.jpg"]},
"SF-UHK-S508a":{"name":"Urban Hoodie UHK508","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S508_1.jpg"]},
"SF-UHK-S509a":{"name":"Urban Hoodie UHK509","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S509_1.jpg"]},
"SF-UHK-S510a":{"name":"Urban Hoodie UHK510","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S510_1.jpg"]},
"SF-UHK-S601a":{"name":"Urban Hoodie UHK601","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S601_1.jpg"]},
"SF-UHK-S602a":{"name":"Urban Hoodie UHK602","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S602_1.jpg"]},
"SF-UHK-S603a":{"name":"Urban Hoodie UHK603","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S603_1.jpg"]},
"SF-UHK-S604a":{"name":"Urban Hoodie UHK604","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S604_1.jpg"]},
"SF-UHK-S605a":{"name":"Urban Hoodie UHK605","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S605_1.jpg"]},
"SF-UHK-S606a":{"name":"Urban Hoodie UHK606","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S606_1.jpg"]},
"SF-UHK-S607a":{"name":"Urban Hoodie UHK607","price":31,"category":"urbanhoodies_juniors","img":["Juniors/Images_UrbanHoodies/SF-UHK-S607_1.jpg"]},
   
   
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
"SF-SSU-S001a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S001_1.jpeg"]},
"SF-SSU-S002a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S002_1.jpeg"]},
"SF-SSU-S003a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S003_1.jpeg"]},
"SF-SSU-S004a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S004_1.jpeg"]},
"SF-SSU-S005a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S005_1.jpeg"]},
"SF-SSU-S006a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S006_1.jpeg"]},
"SF-SSU-S007a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S007_1.jpeg"]},
"SF-SSU-S008a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S008_1.jpeg"]},
"SF-SSU-S009a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S009_1.jpeg"]},
"SF-SSU-S010a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S010_1.jpeg"]},
"SF-SSU-S011a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S011_1.jpeg"]},
"SF-SSU-S012a":{"name":"SF Essential Socks","price":11,"category":"socks","img":["Accessories/Images_Socks/SF-SSU-S012_1.jpeg"]},
   
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
football_kits_basic_men: ["SF-SJM-B901a","SF-SJM-B902a","SF-SJM-B903a","SF-SJM-B904a","SF-SJM-B905a","SF-SJM-B906a","SF-SJM-B907a","SF-SJM-B908a","SF-SJM-B909a","SF-SJM-B910a","SF-SJM-B911a",
"SF-SJM-B801a","SF-SJM-B802a","SF-SJM-B803a","SF-SJM-B804a","SF-SJM-B805a","SF-SJM-B806a","SF-SJM-B807a"],
                      
  football_hoodies_men: ["SF-SJM-S005a"],

  football_mesh_men: ["SF-MWU-685a","SF-MWU-686a","SF-MWU-687a"],
   football_trainingwear_men: [
  "SF-STD-601a","SF-STD-602a","SF-STD-603a","SF-STD-604a",
  "SF-STD-605a","SF-STD-606a","SF-STD-607a","SF-STD-608a" ,"SF-STD-609a" ,"SF-STD-610a"],
   football_kits_women: ["SF-SJF-S001a","SF-SJF-S011a","SF-SJF-S003a","SF-SJF-S004a","SF-SJF-S005a",
                     "SF-SJF-S006a","SF-SJF-S007a","SF-SJF-S008a","SF-SJF-S009a","SF-SJF-S010a","SF-SJF-S002a"],

  football_kits_basic_women: [
  "SF-SJF-B101a","SF-SJF-B102a","SF-SJF-B103a","SF-SJF-B104a","SF-SJF-B105a","SF-SJF-B106a","SF-SJF-B107a","SF-SJF-B108a","SF-SJF-B109a","SF-SJF-B110a",
  "SF-SJF-B201a","SF-SJF-B202a","SF-SJF-B203a","SF-SJF-B204a","SF-SJF-B205a","SF-SJF-B206a","SF-SJF-B207a","SF-SJF-B208a","SF-SJF-B209a","SF-SJF-B210a"
],

     football_mesh_women: ["SF-MWU-682a","SF-MWU-683a","SF-MWU-684a"]
   ,

 football_trainingwear_women: [
  "SF-STD-F121a","SF-STD-F122a","SF-STD-F123a","SF-STD-F124a",
  "SF-STD-F125a","SF-STD-F126a","SF-STD-F127a","SF-STD-F128a"],

   
   football_kits_juniors: ["SF-SJK-S101a","SF-SJK-S002a","SF-SJK-S003a","SF-SJK-S104a","SF-SJK-S005a","SF-SJK-S105a",
                          "SF-SJK-S001a","SF-SJK-S102a","SF-SJK-S103a","SF-SJK-S004a","SF-SJK-S006a","SF-SJK-S106a"],

   football_kits_basic_juniors: [ "SF-SJK-B001a","SF-SJK-B002a","SF-SJK-B003a","SF-SJK-B004a","SF-SJK-B005a","SF-SJK-B006a","SF-SJK-B007a","SF-SJK-B008a",
   "SF-SJK-B101a","SF-SJK-B102a","SF-SJK-B103a",
  "SF-SJK-B104a","SF-SJK-B105a","SF-SJK-B106a","SF-SJK-B107a","SF-SJK-B108a","SF-SJK-B109a","SF-SJK-B110a","SF-SJK-B111a",
   "SF-SJK-B050a","SF-SJK-B051a","SF-SJK-B052a","SF-SJK-B053a","SF-SJK-B054a","SF-SJK-B055a","SF-SJK-B056a","SF-SJK-B057a","SF-SJK-B058a"],
                           
   football_mesh_juniors: ["SF-MWU-679a","SF-MWU-680a","SF-MWU-681a"],


 football_trainingwear_juniors: [
  "SF-STD-J371a","SF-STD-J372a","SF-STD-J373a","SF-STD-J374a","SF-STD-J375a",
  "SF-STD-J376a","SF-STD-J377a","SF-STD-J378a","SF-STD-J379a","SF-STD-J380a"],




  /* BASKETBALL (future ready placeholders) */
  basketball_kits_men: ["SF-BJM-S001a","SF-BJM-S002a","SF-BJM-S003a","SF-BJM-S004a","SF-BJM-S005a","SF-BJM-S006a","SF-BJM-S007a","SF-BJM-S008a",
   "SF-BJM-S009a","SF-BJM-S010a","SF-BJM-S011a","SF-BJM-S012a","SF-BJM-S013a","SF-BJM-S014a","SF-BJM-S015a","SF-BJM-S016a"
  ],
   basketball_mesh_men: ["SF-MWU-685a","SF-MWU-686a","SF-MWU-687a"],

  basketball_hoodies_men: [
    "SF-SJM-S005a"
  ],
   
   basketball_kits_women: ["SF-BJF-S001a","SF-BJF-S002a","SF-BJF-S003a","SF-BJF-S004a","SF-BJF-S005a","SF-BJF-S006a","SF-BJF-S007a","SF-BJF-S008a",
   "SF-BJF-S009a","SF-BJF-S010a","SF-BJF-S011a","SF-BJF-S012a"],

  basketball_hoodies_women: [
    "SF-SJM-S005a"
  ],
   basketball_mesh_women: ["SF-MWU-682a","SF-MWU-683a","SF-MWU-684a"],

   basketball_kits_juniors: ["SF-BJK-S001a","SF-BJK-S002a","SF-BJK-S003a","SF-BJK-S004a","SF-BJK-S005a","SF-BJK-S006a",
                             "SF-BJK-S101a","SF-BJK-S102a","SF-BJK-S103a","SF-BJK-S105a","SF-BJK-S106a","SF-BJK-S107a","SF-BJK-S108a"],


   
   basketball_mesh_juniors: ["SF-MWU-679a","SF-MWU-680a","SF-MWU-681a"],

  basketball_hoodies_juniors: [
    "SF-SJM-S005a"
  ],


  /* HANDBALL */
  handball_kits_men: ["SF-BJM-S012a","SF-BJM-S010a","SF-BJM-S006a","SF-BJM-S009a","SF-BJM-S001a","SF-BJM-S003a","SF-BJM-S007a","SF-BJM-S008a",
   "SF-BJM-S002a","SF-BJM-S016a","SF-BJM-S013a","SF-BJM-S015a"],
   handball_mesh_men: ["SF-MWU-685a","SF-MWU-686a","SF-MWU-687a"],
   handball_kits_women: ["SF-BJF-S012a","SF-BJF-S011a","SF-BJF-S009a","SF-BJF-S007a","SF-BJF-S005a","SF-BJF-S010a","SF-BJF-S008a","SF-BJF-S006a",
   "SF-BJF-S009a","SF-BJF-S002a","SF-BJF-S001a","SF-BJF-S003a"],
   handball_mesh_women: ["SF-MWU-682a","SF-MWU-683a","SF-MWU-684a"],
   handball_kits_juniors: ["SF-BJK-S006a","SF-BJK-S004a","SF-BJK-S102a","SF-BJK-S104a",
                             "SF-BJK-S101a","SF-BJK-S002a","SF-BJK-S003a"],
     handball_mesh_juniors: ["SF-MWU-679a","SF-MWU-680a","SF-MWU-681a"],



  /* TRAINING */
  training_tops_men: [
    "SF-SJM-S005a"
  ],


   training_tops_women: ["SF_FTT_L112a","SF_FTT_L113a","SF_FTT_L114a","SF_FTT_L115a","SF_FTT_L116a","SF_FTT_L117a","SF_FTT_L118a",
                         "SF-GCF-S101a","SF-GCF-S102a","SF-GCF-S103a","SF-GCF-S104a","SF-GCF-S105a","SF-GCF-S106a","SF-GCF-S107a"],


training_tops_juniors: [
    "SF-SJM-S005a"
  ],


   /*  Tracksuits */
   tracksuits_training_men: ["SF-CTS-M036a","SF-CTS-M037a","SF-CTS-M038a","SF-CTS-M039a","SF-CTS-M053a","SF-CTS-M040a","SF-CTS-M041a",
                            "SF-CTS-M042a","SF-CTS-M043a","SF-CTS-M044a","SF-CTS-M046a","SF-CTS-M047a","SF-CTS-M048a","SF-CTS-M049a",
                            "SF-CTS-M050a","SF-CTS-M052a","SF-CTS-M054a","SF-CTS-M045a","SF-CTS-M051a"],

   tracksuits_classic_men: ["SF-HTS-M241a","SF-HTS-M242a","SF-HTS-M243a","SF-HTS-M244a",
                             "SF-HTS-M245a","SF-HTS-M246a","SF-HTS-M247a","SF-HTS-M248a"],

    tracksuits_travelling_men: ["SF-TTS-M550a","SF-TTS-M551a","SF-TTS-M552a","SF-TTS-M553a"],
   
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

   
  lifestyle_hoodies_men: ["SF-UHM-S001a","SF-UHM-S002a","SF-UHM-S005a",
"SF-UHM-S006a","SF-UHM-S007a","SF-UHM-S008a","SF-UHM-S009a","SF-UHM-S010a","SF-UHM-S011a","SF-UHM-S101a","SF-UHM-S102a","SF-UHM-S103a","SF-UHM-S104a","SF-UHM-S105a",
"SF-UHM-S106a","SF-UHM-S107a","SF-UHM-S108a","SF-UHM-S109a","SF-UHM-S200a","SF-UHM-S201a","SF-UHM-S202a","SF-UHM-S203a","SF-UHM-S204a",
"SF-UHM-S205a","SF-UHM-S206a","SF-UHM-S207a","SF-UHM-S208a","SF-UHM-S209a","SF-UHM-S300a","SF-UHM-S301a","SF-UHM-S302a","SF-UHM-S303a","SF-UHM-S304a","SF-UHM-S305a","SF-UHM-S306a","SF-UHM-S307a","SF-UHM-S308a","SF-UHM-S309a"],

  lifestyle_jackets_men: ["SF-PJ-M851a","SF-PJ-M852a","SF-PJ-M853a","SF-PJ-M854a","SF-PJ-M855a",
                          "SF-PJ-M911a"
  ],
   lifestyle_polos_women: ["SF-BPF-111a","SF-BPF-112a","SF-BPF-113a","SF-BPF-114a","SF-BPF-115a",
  "SF-BPF-116a","SF-BPF-117a","SF-BPF-118a","SF-BPF-119a","SF-BPF-120a"],
   
   lifestyle_hoodies_women: ["SF-UHF-S101a","SF-UHF-S204a","SF-UHF-S302a","SF-UHF-S405a","SF-UHF-S507a",
  "SF-UHF-S600a","SF-UHF-S709a","SF-UHF-S803a","SF-UHF-S104a","SF-UHF-S201a",
  "SF-UHF-S305a","SF-UHF-S402a","SF-UHF-S505a","SF-UHF-S607a","SF-UHF-S710a",
  "SF-UHF-S808a","SF-UHF-S100a","SF-UHF-S203a","SF-UHF-S304a","SF-UHF-S706a"],

  lifestyle_jackets_women: ["SF-PJ-F201a","SF-PJ-F202a","SF-PJ-F203a","SF-PJ-F204a","SF-PJ-F205a",
                            "SF-PJ-F301a","SF-PJ-F302a","SF-PJ-F303a","SF-PJ-F304a"],
   
   lifestyle_hoodies_juniors: [
 "SF-UHK-S001a","SF-UHK-S101a","SF-UHK-S010a","SF-UHK-S201a","SF-UHK-S004a",
  "SF-UHK-S103a","SF-UHK-S018a","SF-UHK-S301a","SF-UHK-S007a","SF-UHK-S105a",
  "SF-UHK-S022a","SF-UHK-S401a","SF-UHK-S012a","SF-UHK-S203a","SF-UHK-S027a",
  "SF-UHK-S503a","SF-UHK-S015a","SF-UHK-S106a","SF-UHK-S033a","SF-UHK-S607a",
  "SF-UHK-S036a","SF-UHK-S102a","SF-UHK-S042a","SF-UHK-S205a","SF-UHK-S039a",
  "SF-UHK-S303a","SF-UHK-S045a","SF-UHK-S104a","SF-UHK-S050a","SF-UHK-S205a"],
   
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
     "socks": ["SF-SSU-S001a","SF-SSU-S002a","SF-SSU-S003a","SF-SSU-S004a","SF-SSU-S005a","SF-SSU-S006a",
               "SF-SSU-S007a","SF-SSU-S008a","SF-SSU-S009a","SF-SSU-S010a","SF-SSU-S011a","SF-SSU-S012a"], 
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
