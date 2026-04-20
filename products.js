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
  "SF-SJM-S001": { name: "Soccer Elite Pro Fusion Edition", price: 11 },
  "SF-SJM-S004": { name: "Soccer Hexa Pulse Edition", price: 11 },
  "SF-SJM-S003": { name: "Soccer Urban Strike Gradient Edition", price: 11 },
  "SF-SJM-S005": { name: "Aurum Pro Edition", price: 11 },
  "SF-SJM-S007": { name: "Aqua Storm Edition", price: 11 },
  "SF-SJM-S008": { name: "Crimson Bolt Edition", price: 11 },

  /* Female Kits */
  "SF-SJF-S001": { name: "Soccer Blush Strike Edition", price: 11 },
  "SF-SJF-S002": { name: "Soccer Phantom Fade Edition", price: 11 },
  "SF-SJF-S004": { name: "Soccer Storm Fit Edition", price: 11 },

  /* Junior Kits */
  "SF-SJK-S001": { name: "Soccer Junior Strike Pro Edition", price: 11 },
  "SF-SJK-S003": { name: "Soccer Junior Fire Start Edition", price: 11 },
  "SF-SJK-S004": { name: "Soccer Junior Velocity Flame Edition", price: 11 },

};


/* ======================================
   CATEGORY MAPPING (NEW UNIVERSAL SYSTEM)
   THIS IS WHAT POWERS MEN.HTML → product.html
====================================== */

const CATEGORIES = {

  /* FOOTBALL */
  football_kits: [
    "SF-SJM-S001",
    "SF-SJM-S004",
    "SF-SJM-S003"
  ],

  football_tracksuits: [
    "SF-SJM-S005",
    "SF-SJM-S007"
  ],

  football_hoodies: [
    "SF-UHM-S001",
    "SF-UHM-S002",
    "SF-UHM-S003"
  ],

  football_jackets: [
    "varsity-black",
    "varsity-green",
    "varsity-blue"
  ],


  /* BASKETBALL (future ready placeholders) */
  basketball_kits: [
    "SF-SJM-S001",
    "SF-SJM-S004"
  ],

  basketball_hoodies: [
    "SF-UHM-S001",
    "SF-UHM-S002"
  ],


  /* HANDBALL */
  handball_kits: [
    "SF-SJM-S003",
    "SF-SJM-S005"
  ],


  /* TRAINING */
  training_tops: [
    "SF-UHM-S001"
  ],

  training_tracksuits: [
    "SF-SJM-S007"
  ],


  /* LIFESTYLE */
  lifestyle_hoodies: [
    "SF-UHM-S002",
    "SF-UHM-S003"
  ],

  lifestyle_jackets: [
    "varsity-solar",
    "varsity-sky"
  ]

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
