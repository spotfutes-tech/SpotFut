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
  "SF-SJM-S001a": {"name": "Soccer Elite Pro Fusion Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S001_1.png","Soccer_Hero/Men_Images/SF-SJM-S001_2.png","Soccer_Hero/Men_Images/SF-SJM-S001_3.png","Soccer_Hero/Men_Images/SF-SJM-S001_4.jpg"]},
  "SF-SJM-S004a": {"name": "Soccer Hexa Pulse Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S004_1.jpg","Soccer_Hero/Men_Images/SF-SJM-S004_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S004_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S004_4.jpg"]},
  "SF-SJM-S003a": {"name": "Soccer Urban Strike Gradient Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S003_1.jpg","Soccer_Hero/Men_Images/SF-SJM-S003_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S003_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S003_4.jpg"]},
  "SF-SJM-S005a": {"name": "Soccer Aurum Pro Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S005_1.png","Soccer_Hero/Men_Images/SF-SJM-S005_2.png","Soccer_Hero/Men_Images/SF-SJM-S005_3.png","Soccer_Hero/Men_Images/SF-SJM-S005_4.jpg"]},
  "SF-SJM-S007a": {"name": "Soccer Aqua Storm Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S007_1.png","Soccer_Hero/Men_Images/SF-SJM-S007_2.png","Soccer_Hero/Men_Images/SF-SJM-S007_3.png","Soccer_Hero/Men_Images/SF-SJM-S007_4.jpg"]},
  "SF-SJM-S008a": {"name": "Soccer Crimson Bolt Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S008_1.jpg","Soccer_Hero/Men_Images/SF-SJM-S008_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S008_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S008_4.jpg"]},
  "SF-SJM-S002a": {"name": "Soccer Eclipse Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S002_1.png","Soccer_Hero/Men_Images/SF-SJM-S002_2.png","Soccer_Hero/Men_Images/SF-SJM-S002_3.png","Soccer_Hero/Men_Images/SF-SJM-S002_4.jpg"]},
  "SF-SJM-S006a": {"name": "Soccer Red Velocity Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S006_1.jpeg","Soccer_Hero/Men_Images/SF-SJM-S006_2.jpeg","Soccer_Hero/Men_Images/SF-SJM-S006_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S006_4.jpg"]},
  "SF-SJM-S009a": {"name": "Soccer Regal Stripe Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S009_1.jpeg","Soccer_Hero/Men_Images/SF-SJM-S009_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S009_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S009_4.jpg"]},
  "SF-SJM-S010a": {"name": "Soccer Neon Strike Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S010_1.jpeg","Soccer_Hero/Men_Images/SF-SJM-S010_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S010_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S010_4.jpg"]},
  "SF-SJM-S011a": {"name": "Soccer Midnight Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S011_1.jpeg","Soccer_Hero/Men_Images/SF-SJM-S011_2.jpg","Soccer_Hero/Men_Images/SF-SJM-S011_3.jpg","Soccer_Hero/Men_Images/SF-SJM-S011_4.jpg"]},

/* 11111111111111....... Women Football Kits .........................*/
  "SF-SJF-S001a": {"name": "Soccer Blush Strike Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S001_1.png", "Soccer_Hero/Women_Images/SF-SJF-S001_2.png", "Soccer_Hero/Women_Images/SF-SJF-S001_3.png", "Soccer_Hero/Women_Images/SF-SJF-S001_4.jpg"]},
  "SF-SJF-S002a": {"name": "Soccer Phantom Fade Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S002_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S002_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S002_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S002_4.jpg"]},
  "SF-SJF-S003a": {"name": "Soccer Gold-Leaf Kinetic Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S003_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S003_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S003_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S003_4.jpg"]},
  "SF-SJF-S004a": {"name": "Soccer Storm Fit Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S004_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S004_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S004_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S004_4.jpg"]},
  "SF-SJF-S005a": {"name": "Soccer Molten Slate Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S005_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S005_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S005_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S005_4.jpg"]},
  "SF-SJF-S006a": {"name": "Soccer Naval Vanguard Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S006_1.png", "Soccer_Hero/Women_Images/SF-SJF-S006_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S006_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S006_4.jpg"]},
  "SF-SJF-S007a": {"name": "Soccer Monarc Gold Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S007_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S007_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S007_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S007_4.jpg"]},
  "SF-SJF-S008a": {"name": "Soccer Static Strike Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S008_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S008_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S008_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S008_4.jpg"]},
  "SF-SJF-S009a": {"name": "Soccer Glacier Strike Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S009_1.jpg", "Soccer_Hero/Women_Images/SF-SJF-S009_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S009_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S009_4.jpg"]},
  "SF-SJF-S010a": {"name": "Soccer Prism Pulse Edition", "price": 11, "img": ["Soccer_Hero/Women_Images/SF-SJF-S010_1.png", "Soccer_Hero/Women_Images/SF-SJF-S010_2.jpg", "Soccer_Hero/Women_Images/SF-SJF-S010_3.jpg", "Soccer_Hero/Women_Images/SF-SJF-S010_4.jpg"]},

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
"SF-SJK-S106a":{"name":"Soccer Junior Solar Drift Edition","price":11,"img":["Soccer_Hero/Junior_Images/SF-SJK-S106_1.jpg","Soccer_Hero/Junior_Images/SF-SJK-S106_2.jpg","Soccer_Hero/Junior_Images/SF-SJK-S106_3.jpg","Soccer_Hero/Junior_Images/SF-SJK-S106_4.jpg"]}


};
   /* ======================================
   CATEGORY MAPPING (NEW UNIVERSAL SYSTEM)
   THIS IS WHAT POWERS MEN.HTML → product.html
====================================== */

const CATEGORIES = {

  /* FOOTBALL */
  football_kits_men: ["SF-SJM-S001a","SF-SJM-S002a","SF-SJM-S003a","SF-SJM-S004a","SF-SJM-S005a",
                     "SF-SJM-S006a","SF-SJM-S007a","SF-SJM-S008a","SF-SJM-S009a","SF-SJM-S010a","SF-SJM-S011a"],
  football_tracksuits_men: ["SF-SJM-S005a"],
  football_hoodies_men: ["SF-SJM-S005a"],

  football_jackets_men: [
   "SF-SJM-S005a"
  ],
   football_kits_women: ["SF-SJF-S001a","SF-SJF-S002a","SF-SJF-S003a","SF-SJF-S004a","SF-SJF-S005a",
                     "SF-SJF-S006a","SF-SJF-S007a","SF-SJF-S008a","SF-SJF-S009a","SF-SJF-S010a"],

  football_tracksuits_women: [
    "SF-SJM-S005a"
  ],

  football_hoodies_women: [
    "SF-SJM-S005a"
  ],

  football_jackets_women: [
    "SF-SJM-S005a"
  ],
   football_kits_juniors: ["SF-SJK-S001a","SF-SJK-S002a""SF-SJK-S003a","SF-SJK-S004a","SF-SJK-S005a","SF-SJK-S006a",
                          "SF-SJK-S101a","SF-SJK-S102a""SF-SJK-S103a","SF-SJK-S104a","SF-SJK-S105a","SF-SJK-S106a"],

  football_tracksuits_juniors: [
    "SF-SJM-S005a"
  ],

  football_hoodies_juniors: [
    "SF-SJM-S005a"
  ],

  football_jackets_juniors: [
    "SF-SJM-S005a"
  ],


  /* BASKETBALL (future ready placeholders) */
  basketball_kits_men: [
    "SF-SJM-S005a"
  ],

  basketball_hoodies_men: [
    "SF-SJM-S005a"
  ],
   basketball_kits_women: [
    "SF-SJM-S005a"
  ],

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

  training_tracksuits_men: [
    "SF-SJM-S005a"
  ],
   training_tops_women: [
    "SF-SJM-S005a"
  ],

  training_tracksuits_women: [
    "SF-SJM-S005a"
  ],
training_tops_juniors: [
    "SF-SJM-S005a"
  ],

  training_tracksuits_juniors: [
    "SF-SJM-S005a"
  ],

  /* LIFESTYLE */
  lifestyle_hoodies_men: [
    "SF-SJM-S005a"
  ],

  lifestyle_jackets_men: [
    "SF-SJM-S005a"
  ],
   lifestyle_hoodies_women: [
    "SF-SJM-S005a"
  ],

  lifestyle_jackets_women: [
    "SF-SJM-S005a"
  ],
   lifestyle_hoodies_juniors: [
    "SF-SJM-S005a"
  ],

  lifestyle_jackets_juniors: [
    "SF-SJM-S005a"
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
