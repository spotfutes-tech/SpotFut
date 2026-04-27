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
  "SF-SJM-S001a": {"name": "Soccer Elite Pro Fusion Edition","price": 11,"img": ["Soccer_Hero/Men_Images/SF-SJM-S001_1.png","Soccer_Hero/Men_Images/SF-SJM-S001_2.png","Soccer_Hero/Men_Images/SF-SJM-S001_3.png","Soccer_Hero/Men_Images/SF-SJM-S001_4.jpg"],
  "description": "Elite performance soccer kit designed for speed, comfort, and durability. Lightweight breathable fabric with pro-level fit.",
  "sizes": ["3XS","2XS","XS","S", "M", "L", "XL", "2XL", "3XL"]},
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

   /* 11111111111111....... Men Tracksets .........................*/
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

    /* 11111111111111....... Men Polos .........................*/
"SF-BPM-M180a": {"name": "Spot B180 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-180_1.jpg","Men/Images_Polos/SF-BPM-180_2.jpg","Men/Images_Polos/SF-BPM-180_3.jpg"]},
"SF-BPM-M181a": {"name": "Spot B181 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-181_1.jpg","Men/Images_Polos/SF-BPM-181_2.jpg","Men/Images_Polos/SF-BPM-181_3.jpg"]},
"SF-BPM-M182a": {"name": "Spot B182 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-182_1.jpg","Men/Images_Polos/SF-BPM-182_2.jpg","Men/Images_Polos/SF-BPM-182_3.jpg"]},
"SF-BPM-M183a": {"name": "Spot B183 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-183_1.jpg","Men/Images_Polos/SF-BPM-183_2.jpg","Men/Images_Polos/SF-BPM-183_3.jpg"]},
"SF-BPM-M184a": {"name": "Spot B184 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-184_1.jpg","Men/Images_Polos/SF-BPM-184_2.jpg","Men/Images_Polos/SF-BPM-184_3.jpg"]},
"SF-BPM-M185a": {"name": "Spot B185 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-185_1.jpg","Men/Images_Polos/SF-BPM-185_2.jpg","Men/Images_Polos/SF-BPM-185_3.jpg"]},
"SF-BPM-M186a": {"name": "Spot B186 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-186_1.jpg","Men/Images_Polos/SF-BPM-186_2.jpg","Men/Images_Polos/SF-BPM-186_3.jpg"]},
"SF-BPM-M187a": {"name": "Spot B187 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-187_1.jpg","Men/Images_Polos/SF-BPM-187_2.jpg","Men/Images_Polos/SF-BPM-187_3.jpg"]},
"SF-BPM-M188a": {"name": "Spot B188 Polo","price": 21,"img": ["Men/Images_Polos/SF-BPM-188_1.jpg","Men/Images_Polos/SF-BPM-188_2.jpg","Men/Images_Polos/SF-BPM-188_3.jpg"]},
   
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

 /* 11111111111111....... Women Tracksets .........................*/
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
"SF-BP-0001a":{"name":"SF Classic Backpack","price":19,"img":["Accessories/Images_Bags/SF-BP-0001-1.png","Accessories/Images_Bags/SF-BP-0001-2.png","Accessories/Images_Bags/SF-BP-0001-3.png"]},
"SF-BP-1001a":{"name":"SF Urban Edge Backpack","price":19,"img":["Accessories/Images_Bags/SF-BP-1001-1.png","Accessories/Images_Bags/SF-BP-1001-2.png","Accessories/Images_Bags/SF-BP-1001-3.png"]},
"SF-BP-2001a":{"name":"SF Camo Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-2001-1.png","Accessories/Images_Bags/SF-BP-2001-2.png"]},
"SF-BP-3001a":{"name":"SF Camo Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-3001-1.png","Accessories/Images_Bags/SF-BP-3001-2.png"]},
"SF-BP-4001a":{"name":"SF TBA Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-4001-1.png","Accessories/Images_Bags/SF-BP-4001-2.png"]},
"SF-BP-5001a":{"name":"SF TBA Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-5001-1.png","Accessories/Images_Bags/SF-BP-5001-2.png"]},
"SF-BP-6001a":{"name":"SF TBA Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-6001-1.png","Accessories/Images_Bags/SF-BP-6001-2.png"]},
"SF-BP-7001a":{"name":"SF TBA Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-7001-1.png","Accessories/Images_Bags/SF-BP-7001-2.png"]},
"SF-BP-8001a":{"name":"SF TBA Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-8001-1.png","Accessories/Images_Bags/SF-BP-8001-2.png"]},
"SF-BP-9001a":{"name":"SF TBA Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-9001-1.png","Accessories/Images_Bags/SF-BP-9001-2.png"]},
"SF-BP-1010a":{"name":"SF TBA Backpack","price":29,"img":["Accessories/Images_Bags/SF-BP-1010-1.png","Accessories/Images_Bags/SF-BP-1010-2.png","Accessories/Images_Bags/SF-BP-1010-3.png","Accessories/Images_Bags/SF-BP-1010-4.png"]},

/* 11111111111111....... Caps - Accessoris .........................*/
"SF-CP-5101a":{"name":"SF Spectrum-Line Caps","price":11,"img":["Accessories/Images_Caps/SF-CP-5101-1.jpg","Accessories/Images_Caps/SF-CP-5101-2.jpg","Accessories/Images_Caps/SF-CP-5101-3.jpg","Accessories/Images_Caps/SF-CP-5101-4.jpg","Accessories/Images_Caps/SF-CP-5101-5.jpg"]},
"SF-CP-5201a":{"name":"SF Pulse-Mesh Caps","price":11,"img":["Accessories/Images_Caps/SF-CP-5201-1.jpg","Accessories/Images_Caps/SF-CP-5201-2.jpg","Accessories/Images_Caps/SF-CP-5201-3.jpg","Accessories/Images_Caps/SF-CP-5201-4.jpg","Accessories/Images_Caps/SF-CP-5201-5.jpg"]}


};
   /* ======================================
   CATEGORY MAPPING (NEW UNIVERSAL SYSTEM)
   THIS IS WHAT POWERS MEN.HTML → product.html
====================================== */

const CATEGORIES = {

  /* FOOTBALL */
  football_kits_men: ["SF-SJM-S001a","SF-SJM-S002a","SF-SJM-S003a","SF-SJM-S004a","SF-SJM-S005a",
                     "SF-SJM-S006a","SF-SJM-S007a","SF-SJM-S008a","SF-SJM-S009a","SF-SJM-S010a","SF-SJM-S011a"],
  football_tracksuits_men: ["SF-CTS-M036a","SF-CTS-M037a","SF-CTS-M038a","SF-CTS-M039a","SF-CTS-M053a","SF-CTS-M040a","SF-CTS-M041a",
                            "SF-CTS-M042a","SF-CTS-M043a","SF-CTS-M044a","SF-CTS-M046a","SF-CTS-M047a","SF-CTS-M048a","SF-CTS-M049a",
                            "SF-CTS-M050a","SF-CTS-M052a","SF-CTS-M054a","SF-CTS-M045a","SF-CTS-M051a"],
  football_hoodies_men: ["SF-SJM-S005a"],

  football_jackets_men: [
   "SF-SJM-S005a"
  ],
   football_kits_women: ["SF-SJF-S001a","SF-SJF-S002a","SF-SJF-S003a","SF-SJF-S004a","SF-SJF-S005a",
                     "SF-SJF-S006a","SF-SJF-S007a","SF-SJF-S008a","SF-SJF-S009a","SF-SJF-S010a"],

  football_tracksuits_women: ["SF-CTS-F120a","SF-CTS-F121a","SF-CTS-F122a","SF-CTS-F123a","SF-CTS-F124a","SF-CTS-F125a","SF-CTS-F126a",
                           "SF-CTS-F127a","SF-CTS-F128a","SF-CTS-F129a","SF-CTS-F130a","SF-CTS-F131a","SF-CTS-F132a","SF-CTS-F133a",
                           "SF-CTS-F134a","SF-CTS-F135a","SF-CTS-F136a"],

  football_hoodies_women: [
    "SF-SJM-S005a"
  ],

  football_jackets_women: [
    "SF-SJM-S005a"
  ],
   football_kits_juniors: ["SF-SJK-S101a","SF-SJK-S002a","SF-SJK-S003a","SF-SJK-S104a","SF-SJK-S005a","SF-SJK-S105a",
                          "SF-SJK-S001a","SF-SJK-S102a","SF-SJK-S103a","SF-SJK-S004a","SF-SJK-S006a","SF-SJK-S106a"],

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

  training_tracksuits_men: ["SF-CTS-M036a","SF-CTS-M037a","SF-CTS-M038a","SF-CTS-M039a","SF-CTS-M053a","SF-CTS-M040a","SF-CTS-M041a",
                            "SF-CTS-M042a","SF-CTS-M043a","SF-CTS-M044a","SF-CTS-M046a","SF-CTS-M047a","SF-CTS-M048a","SF-CTS-M049a",
                            "SF-CTS-M050a","SF-CTS-M052a","SF-CTS-M054a","SF-CTS-M045a","SF-CTS-M051a"],
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
    lifestyle_polos_men: ["SF-BPM-M180a","SF-BPM-M181a","SF-BPM-M182a","SF-BPM-M183a","SF-BPM-M184a",
  "SF-BPM-M185a","SF-BPM-M186a","SF-BPM-M187a","SF-BPM-M188a"],

   
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
  ],


   /* $$$$$$$$$$$$$$$$$$$$$$$$$$$$  Accessories $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
   /* 111111111111111  Bags $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
      bags: ["SF-BP-0001a","SF-BP-1001a","SF-BP-2001a","SF-BP-3001a","SF-BP-4001a","SF-BP-5001a","SF-BP-6001a","SF-BP-7001a","SF-BP-8001a",
            "SF-BP-9001a","SF-BP-1010a"],
    /* 22222222222222222222  Caps $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
      caps: ["SF-CP-5101a","SF-CP-5201a"],      

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
