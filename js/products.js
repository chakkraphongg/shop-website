/**
 * ====================================================================
 * AURA / SELLER HERO STORE - STORE CONFIG & PRODUCTS
 * ====================================================================
 * ร้านค้า: ขายทุกอย่าง (ศูนย์รวมฮีโร่สุดแรร์)
 * ข้อมูลสินค้าถูกสร้างจาก Game Database C:\gojo\bin\Data\Weapons\Storeicons
 */

const DEFAULT_STORE_CONFIG = {
  storeName: "ขายทุกอย่าง",
  tagline: "ศูนย์รวมตัวละครฮีโร่และไอเทมสุดแรร์ ราคาถูกที่สุด จัดส่งไว 24 ชม.",
  subTagline: "คัดสรรตัวละครฮีโร่ยอดนิยม ลงขาย 20.- ลดพิเศษ 15.- สั่งซื้อผ่านเพจ Facebook dekroyzz",
  facebookPageUrl: "https://www.facebook.com/dekroyzz/",
  facebookUrl: "https://www.facebook.com/dekroyzz/",
  phone: "089-999-8888",
  email: "support@khayeverything.store",
  address: "ระบบจัดส่งโค้ดและตัวละครอัตโนมัติผ่านช่องทางแชท Facebook เพจ dekroyzz ภายใน 5 นาที",
  businessHours: "เปิดจำหน่ายตลอด 24 ชั่วโมง",
  features: [
    {
      icon: "⚡",
      title: "จัดส่งไวใน 5 นาที",
      desc: "ทักแชทสั่งซื้อผ่านเพจ Facebook โอนเงินปุ๊บ รับโค้ด/ตัวละครไปลุยในเกมได้ทันที"
    },
    {
      icon: "👑",
      title: "ฮีโร่ของแท้ 100%",
      desc: "ดึงตรงจากฐานข้อมูลเกม ตัวละครแท้ ใช้งานได้ถาวร ปลอดภัย ไม่โดนแบน"
    },
    {
      icon: "🔥",
      title: "โปรโมชั่น 15 บาท",
      desc: "ปกติ 20 บาท จัดโปรโมชั่นลดเหลือเพียง 15 บาทในตัวละครยอดนิยม คุ้มค่าที่สุด"
    },
    {
      icon: "🛡️",
      title: "ดูแลตลอด 24 ชม.",
      desc: "หากมีข้อสงสัยหรือติดขัด แอดมินพร้อมดูแลทางเพจ dekroyzz ตลอดเวลา"
    }
  ]
};

const CATEGORIES = [
  { id: "all", name: "ฮีโร่ทั้งหมด" },
  { id: "anime", name: "✨ อนิเมะ & แฟนตาซี" },
  { id: "speed", name: "⚡ สายสปีด วิ่งไว 35+" },
  { id: "tank", name: "🛡️ สายถึก เกราะหนา" },
  { id: "regen", name: "💖 สายรีเจน เลือดเด้ง" },
  { id: "classic", name: "🎖️ ฮีโร่คลาสสิก" }
];

const DEFAULT_PRODUCTS = [
  {
    "id": 819118,
    "name": "LuffyNika",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/LuffyNika.png",
    "gallery": [
      "images/heroes/LuffyNika.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ LuffyNika ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#819118",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 6794046,
    "name": "2WPMariachithin",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/2WPMariachithin.png",
    "gallery": [
      "images/heroes/2WPMariachithin.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2WPMariachithin ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#6794046",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 881118,
    "name": "MFJackSKLBlack",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/MFJackSKLBlack.png",
    "gallery": [
      "images/heroes/MFJackSKLBlack.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFJackSKLBlack ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#881118",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 68400,
    "name": "MFSynthsGBlack",
    "category": "regen",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/MFSynthsGBlack.png",
    "gallery": [
      "images/heroes/MFSynthsGBlack.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFSynthsGBlack ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#68400",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 369012,
    "name": "2000SPIDERMAN",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/2000SPIDERMAN.png",
    "gallery": [
      "images/heroes/2000SPIDERMAN.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000SPIDERMAN ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#369012",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 416907,
    "name": "2000MastTeddy",
    "category": "regen",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/2000MastTeddy.png",
    "gallery": [
      "images/heroes/2000MastTeddy.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000MastTeddy ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#416907",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 699475,
    "name": "GenosSupremeB",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/GenosSupremeB.png",
    "gallery": [
      "images/heroes/GenosSupremeB.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ GenosSupremeB ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#699475",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 5010,
    "name": "Tuuuuu",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/Tuuuuu.png",
    "gallery": [
      "images/heroes/Tuuuuu.png"
    ],
    "shortDesc": "⚡ วิ่ง 45.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Tuuuuu ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 45.0% เกราะหนา 15.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 45,
      "deff": 15,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#5010",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "45.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 225400,
    "name": "MFWoflMyBlack",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/MFWoflMyBlack.png",
    "gallery": [
      "images/heroes/MFWoflMyBlack.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFWoflMyBlack ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#225400",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 6972756,
    "name": "Black_Mask_Broken",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Black_Mask_Broken.png",
    "gallery": [
      "images/heroes/Black_Mask_Broken.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Black_Mask_Broken ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#6972756",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 23993,
    "name": "TPKoekus",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPKoekus.png",
    "gallery": [
      "images/heroes/TPKoekus.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPKoekus ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#23993",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 156560,
    "name": "MFFIL_Hoodie",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFFIL_Hoodie.png",
    "gallery": [
      "images/heroes/MFFIL_Hoodie.png"
    ],
    "shortDesc": "⚡ วิ่ง 28.0% | 🛡️ เกราะ 6.0% | 💖 รีเจน 9.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFFIL_Hoodie ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 28.0% เกราะหนา 6.0% ฟื้นฟูเลือด 9.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 28,
      "deff": 6,
      "regen": 9
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#156560",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "28.0%",
      "พลังป้องกัน (Def)": "6.0%",
      "การฟื้นฟูเลือด (Regen)": "9.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 519931,
    "name": "2000sasukeB",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/2000sasukeB.png",
    "gallery": [
      "images/heroes/2000sasukeB.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000sasukeB ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#519931",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 633118,
    "name": "RimuruBK",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/RimuruBK.png",
    "gallery": [
      "images/heroes/RimuruBK.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ RimuruBK ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#633118",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 520448,
    "name": "PHPrimo",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/PHPrimo.png",
    "gallery": [
      "images/heroes/PHPrimo.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ PHPrimo ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#520448",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 666199,
    "name": "B2B_Itkaku",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_Itkaku.png",
    "gallery": [
      "images/heroes/B2B_Itkaku.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2B_Itkaku ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#666199",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 98412554,
    "name": "TPEndoAAD",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/TPEndoAAD.png",
    "gallery": [
      "images/heroes/TPEndoAAD.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPEndoAAD ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#98412554",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 369011,
    "name": "2000Doflamingo",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": true,
    "image": "images/heroes/2000Doflamingo.png",
    "gallery": [
      "images/heroes/2000Doflamingo.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000Doflamingo ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#369011",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 611631,
    "name": "Fischer",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Fischer.png",
    "gallery": [
      "images/heroes/Fischer.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Fischer ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#611631",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 710018,
    "name": "MFUtaFilmRed",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/MFUtaFilmRed.png",
    "gallery": [
      "images/heroes/MFUtaFilmRed.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFUtaFilmRed ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#710018",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 7045623,
    "name": "2000ISEKAIMemories",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/2000ISEKAIMemories.png",
    "gallery": [
      "images/heroes/2000ISEKAIMemories.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000ISEKAIMemories ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#7045623",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 45679855,
    "name": "HonneDell",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/HonneDell.png",
    "gallery": [
      "images/heroes/HonneDell.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ HonneDell ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#45679855",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 561560,
    "name": "Monaki",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/Monaki.png",
    "gallery": [
      "images/heroes/Monaki.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Monaki ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#561560",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 175866,
    "name": "MFMikotoSuoh",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFMikotoSuoh.png",
    "gallery": [
      "images/heroes/MFMikotoSuoh.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 9.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFMikotoSuoh ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 7.0% ฟื้นฟูเลือด 9.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 7,
      "regen": 9
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#175866",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "9.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 120183,
    "name": "PHKillua",
    "category": "regen",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/PHKillua.png",
    "gallery": [
      "images/heroes/PHKillua.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ PHKillua ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#120183",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 5170756,
    "name": "3411_Katakuri",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/3411_Katakuri.png",
    "gallery": [
      "images/heroes/3411_Katakuri.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_Katakuri ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#5170756",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 916618,
    "name": "TPGenosGB",
    "category": "anime",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPGenosGB.png",
    "gallery": [
      "images/heroes/TPGenosGB.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPGenosGB ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#916618",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 2927476,
    "name": "LenTron",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/LenTron.png",
    "gallery": [
      "images/heroes/LenTron.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ LenTron ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#2927476",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 244195,
    "name": "MFWCBishounenBlack",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/MFWCBishounenBlack.png",
    "gallery": [
      "images/heroes/MFWCBishounenBlack.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFWCBishounenBlack ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#244195",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 51270756,
    "name": "SasukeSuitXm",
    "category": "anime",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/SasukeSuitXm.png",
    "gallery": [
      "images/heroes/SasukeSuitXm.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ SasukeSuitXm ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#51270756",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20195410,
    "name": "2000KanekikenAK",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/2000KanekikenAK.png",
    "gallery": [
      "images/heroes/2000KanekikenAK.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000KanekikenAK ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20195410",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 2310666,
    "name": "HakuLongW",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/HakuLongW.png",
    "gallery": [
      "images/heroes/HakuLongW.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ HakuLongW ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#2310666",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 7276827,
    "name": "3411_IchigoHL",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/3411_IchigoHL.png",
    "gallery": [
      "images/heroes/3411_IchigoHL.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_IchigoHL ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#7276827",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 663311,
    "name": "MFEndo3D44BW",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEndo3D44BW.png",
    "gallery": [
      "images/heroes/MFEndo3D44BW.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEndo3D44BW ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#663311",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 2607791,
    "name": "ChamXDark",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/ChamXDark.png",
    "gallery": [
      "images/heroes/ChamXDark.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ ChamXDark ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#2607791",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 40109547,
    "name": "byakuran",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/byakuran.png",
    "gallery": [
      "images/heroes/byakuran.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ byakuran ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#40109547",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 87580,
    "name": "MFSwimLukaNSS",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/MFSwimLukaNSS.png",
    "gallery": [
      "images/heroes/MFSwimLukaNSS.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFSwimLukaNSS ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#87580",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 7405662,
    "name": "1WPMariachithin",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/1WPMariachithin.png",
    "gallery": [
      "images/heroes/1WPMariachithin.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 1WPMariachithin ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#7405662",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 7910666,
    "name": "TPEndoEgg",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPEndoEgg.png",
    "gallery": [
      "images/heroes/TPEndoEgg.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPEndoEgg ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#7910666",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 56688,
    "name": "MRK_Ghostbusters",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MRK_Ghostbusters.png",
    "gallery": [
      "images/heroes/MRK_Ghostbusters.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MRK_Ghostbusters ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#56688",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 4780010,
    "name": "FatalFrameG",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/FatalFrameG.png",
    "gallery": [
      "images/heroes/FatalFrameG.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 25.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ FatalFrameG ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 9.0% ฟื้นฟูเลือด 25.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 9,
      "regen": 25
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#4780010",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "25.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 600810,
    "name": "miu",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/miu.png",
    "gallery": [
      "images/heroes/miu.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ miu ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#600810",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 84541,
    "name": "PHNamis",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/PHNamis.png",
    "gallery": [
      "images/heroes/PHNamis.png"
    ],
    "shortDesc": "⚡ วิ่ง 28.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 3.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ PHNamis ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 28.0% เกราะหนา 7.0% ฟื้นฟูเลือด 3.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 28,
      "deff": 7,
      "regen": 3
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#84541",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "28.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "3.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 51108,
    "name": "b2b_doflamingo1",
    "category": "anime",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/b2b_doflamingo1.png",
    "gallery": [
      "images/heroes/b2b_doflamingo1.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ b2b_doflamingo1 ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#51108",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300243,
    "name": "MariachiThin",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/MariachiThin.png",
    "gallery": [
      "images/heroes/MariachiThin.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MariachiThin ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300243",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300242,
    "name": "BanLifeguard",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/BanLifeguard.png",
    "gallery": [
      "images/heroes/BanLifeguard.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ BanLifeguard ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300242",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300241,
    "name": "TPEndoRB",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPEndoRB.png",
    "gallery": [
      "images/heroes/TPEndoRB.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPEndoRB ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300241",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300240,
    "name": "TPEndoPIG",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPEndoPIG.png",
    "gallery": [
      "images/heroes/TPEndoPIG.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPEndoPIG ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300240",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300239,
    "name": "TPEndoPB",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/TPEndoPB.png",
    "gallery": [
      "images/heroes/TPEndoPB.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPEndoPB ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300239",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300238,
    "name": "gundam",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/gundam.png",
    "gallery": [
      "images/heroes/gundam.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ gundam ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300238",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300237,
    "name": "Ples_Tibenoch",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Ples_Tibenoch.png",
    "gallery": [
      "images/heroes/Ples_Tibenoch.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Ples_Tibenoch ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300237",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300236,
    "name": "KiteBlackWhite",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/KiteBlackWhite.png",
    "gallery": [
      "images/heroes/KiteBlackWhite.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ KiteBlackWhite ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300236",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300235,
    "name": "2000Diablo",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/2000Diablo.png",
    "gallery": [
      "images/heroes/2000Diablo.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000Diablo ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300235",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300234,
    "name": "RavenLuciaFull",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/RavenLuciaFull.png",
    "gallery": [
      "images/heroes/RavenLuciaFull.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ RavenLuciaFull ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300234",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300233,
    "name": "3411_Masao",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/3411_Masao.png",
    "gallery": [
      "images/heroes/3411_Masao.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_Masao ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300233",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300232,
    "name": "Haku BikiniWhite",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/sm66Z.png",
    "gallery": [
      "images/heroes/sm66Z.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Haku BikiniWhite ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300232",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300231,
    "name": "PHAin",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/PHAin.png",
    "gallery": [
      "images/heroes/PHAin.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ PHAin ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300231",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300230,
    "name": "GojoBlackV",
    "category": "anime",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/GojoBlackV.png",
    "gallery": [
      "images/heroes/GojoBlackV.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ GojoBlackV ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300230",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300229,
    "name": "Haku BikiniRed",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/3411_HakuBKN.png",
    "gallery": [
      "images/heroes/3411_HakuBKN.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Haku BikiniRed ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300229",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300228,
    "name": "TPKakashiSuit",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPKakashiSuit.png",
    "gallery": [
      "images/heroes/TPKakashiSuit.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPKakashiSuit ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300228",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300227,
    "name": "Foxtifa",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/Foxtifa.png",
    "gallery": [
      "images/heroes/Foxtifa.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 5.0% | 💖 รีเจน 5.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Foxtifa ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 5.0% ฟื้นฟูเลือด 5.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 5,
      "regen": 5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300227",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "5.0%",
      "การฟื้นฟูเลือด (Regen)": "5.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300226,
    "name": "saitamaxhodem",
    "category": "anime",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/saitamaxhodem.png",
    "gallery": [
      "images/heroes/saitamaxhodem.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ saitamaxhodem ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300226",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 300225,
    "name": "PHGraySwimYellow",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/PHGraySwimYellow.png",
    "gallery": [
      "images/heroes/PHGraySwimYellow.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ PHGraySwimYellow ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#300225",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20996,
    "name": "CreepsMcPastaB",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/CreepsMcPastaB.png",
    "gallery": [
      "images/heroes/CreepsMcPastaB.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ CreepsMcPastaB ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20996",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 310225,
    "name": "Kanekibape",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/Kanekibape.png",
    "gallery": [
      "images/heroes/Kanekibape.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 8.0% | 💖 รีเจน 10.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Kanekibape ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 8.0% ฟื้นฟูเลือด 10.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 8,
      "regen": 10
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#310225",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "8.0%",
      "การฟื้นฟูเลือด (Regen)": "10.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20997,
    "name": "PHDragonWest",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/PHDragonWest.png",
    "gallery": [
      "images/heroes/PHDragonWest.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ PHDragonWest ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20997",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20998,
    "name": "Enzo Gentleman",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_EnzoGentleman.png",
    "gallery": [
      "images/heroes/B2B_EnzoGentleman.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Enzo Gentleman ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20998",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20999,
    "name": "NEW_HERO",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Aokiji.png",
    "gallery": [
      "images/heroes/Aokiji.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ NEW_HERO ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20999",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 84702595,
    "name": "TPXMind",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/TPXMind.png",
    "gallery": [
      "images/heroes/TPXMind.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPXMind ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#84702595",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 59595,
    "name": "MFEchostealthT",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEchostealthT.png",
    "gallery": [
      "images/heroes/MFEchostealthT.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEchostealthT ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#59595",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 699479,
    "name": "TicciTobyBlack",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TicciTobyBlack.png",
    "gallery": [
      "images/heroes/TicciTobyBlack.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TicciTobyBlack ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#699479",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 661984,
    "name": "KAYA",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/KAYA.png",
    "gallery": [
      "images/heroes/KAYA.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ KAYA ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#661984",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 579409,
    "name": "TPUryuER",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/TPUryuER.png",
    "gallery": [
      "images/heroes/TPUryuER.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPUryuER ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#579409",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 21596,
    "name": "MFBPTRGB",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFRobot.png",
    "gallery": [
      "images/heroes/MFRobot.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFBPTRGB ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#21596",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 633211,
    "name": "MFGojoFortnite",
    "category": "anime",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFGojoFortnite.png",
    "gallery": [
      "images/heroes/MFGojoFortnite.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFGojoFortnite ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#633211",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 2090756,
    "name": "vthero",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/vthero.png",
    "gallery": [
      "images/heroes/vthero.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 20.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ vthero ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 20.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 20,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#2090756",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "20.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 903602,
    "name": "Samuraiki",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/Samuraiki.png",
    "gallery": [
      "images/heroes/Samuraiki.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Samuraiki ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#903602",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 491208897,
    "name": "TPSktPu",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPSktPu.png",
    "gallery": [
      "images/heroes/TPSktPu.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPSktPu ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#491208897",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 77800,
    "name": "3411_TatsuyaShiba",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/3411_TatsuyaShiba.png",
    "gallery": [
      "images/heroes/3411_TatsuyaShiba.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_TatsuyaShiba ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#77800",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 2347095,
    "name": "TPfzeroBK",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPfzeroBK.png",
    "gallery": [
      "images/heroes/TPfzeroBK.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPfzeroBK ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#2347095",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 2347195,
    "name": "MakimaCman",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/MakimaCman.png",
    "gallery": [
      "images/heroes/MakimaCman.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MakimaCman ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#2347195",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 950112,
    "name": "2000GojoAK",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/2000GojoAK.png",
    "gallery": [
      "images/heroes/2000GojoAK.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000GojoAK ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#950112",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 966012,
    "name": "MFEndoGITach",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEndoGITach.png",
    "gallery": [
      "images/heroes/MFEndoGITach.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEndoGITach ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#966012",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 8924206,
    "name": "InuYasha",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/InuYasha.png",
    "gallery": [
      "images/heroes/InuYasha.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ InuYasha ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#8924206",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 44407,
    "name": "TPAlienBR",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/TPAlienBR.png",
    "gallery": [
      "images/heroes/TPAlienBR.png"
    ],
    "shortDesc": "⚡ วิ่ง 28.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPAlienBR ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 28.0% เกราะหนา 7.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 28,
      "deff": 7,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#44407",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "28.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 311580,
    "name": "MFGojoWhiteBlack",
    "category": "anime",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFGojoWhiteBlack.png",
    "gallery": [
      "images/heroes/MFGojoWhiteBlack.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFGojoWhiteBlack ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#311580",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 632559,
    "name": "Subung",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Subung.png",
    "gallery": [
      "images/heroes/Subung.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Subung ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#632559",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 471205,
    "name": "Camu_NK",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Camu_NK.png",
    "gallery": [
      "images/heroes/Camu_NK.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 8.0% | 💖 รีเจน 12.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Camu_NK ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 8.0% ฟื้นฟูเลือด 12.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 8,
      "regen": 12
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#471205",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "8.0%",
      "การฟื้นฟูเลือด (Regen)": "12.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 1219625,
    "name": "NeaOflabMoo",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/NeaOflabMoo.png",
    "gallery": [
      "images/heroes/NeaOflabMoo.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ NeaOflabMoo ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#1219625",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 1219624,
    "name": "law",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/law.png",
    "gallery": [
      "images/heroes/law.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ law ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#1219624",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 558011,
    "name": "Alice",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Alice.png",
    "gallery": [
      "images/heroes/Alice.png"
    ],
    "shortDesc": "⚡ วิ่ง 28.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Alice ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 28.0% เกราะหนา 7.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 28,
      "deff": 7,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#558011",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "28.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 57021666,
    "name": "3411_FreddyKrueger",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/3411_FreddyKrueger.png",
    "gallery": [
      "images/heroes/3411_FreddyKrueger.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_FreddyKrueger ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#57021666",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 517956602,
    "name": "2000KurogiriXBit",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/2000KurogiriXBit.png",
    "gallery": [
      "images/heroes/2000KurogiriXBit.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000KurogiriXBit ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#517956602",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 898955,
    "name": "MFEndoMMDPink",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEndoMMDPink.png",
    "gallery": [
      "images/heroes/MFEndoMMDPink.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEndoMMDPink ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#898955",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 585555,
    "name": "ZombiesOPB",
    "category": "anime",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/ZombiesOPB.png",
    "gallery": [
      "images/heroes/ZombiesOPB.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ ZombiesOPB ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#585555",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 945002,
    "name": "ZenRyu",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/ZenRyu.png",
    "gallery": [
      "images/heroes/ZenRyu.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 25.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ ZenRyu ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 9.0% ฟื้นฟูเลือด 25.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 9,
      "regen": 25
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#945002",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "25.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 918022,
    "name": "t800",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/t800.png",
    "gallery": [
      "images/heroes/t800.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ t800 ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#918022",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 3319118,
    "name": "B2B_Doflamingo",
    "category": "anime",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_Doflamingo.png",
    "gallery": [
      "images/heroes/B2B_Doflamingo.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2B_Doflamingo ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#3319118",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 9504025,
    "name": "Crow",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Crow.png",
    "gallery": [
      "images/heroes/Crow.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Crow ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#9504025",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 9504026,
    "name": "Theef",
    "category": "speed",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Theef.png",
    "gallery": [
      "images/heroes/Theef.png"
    ],
    "shortDesc": "⚡ วิ่ง 37.0% | 🛡️ เกราะ 11.0% | 💖 รีเจน 6.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Theef ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 37.0% เกราะหนา 11.0% ฟื้นฟูเลือด 6.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 37,
      "deff": 11,
      "regen": 6
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#9504026",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "37.0%",
      "พลังป้องกัน (Def)": "11.0%",
      "การฟื้นฟูเลือด (Regen)": "6.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 66331,
    "name": "MFEndoMMDGrey",
    "category": "regen",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/MFEndoMMDGrey.png",
    "gallery": [
      "images/heroes/MFEndoMMDGrey.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEndoMMDGrey ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#66331",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 678004,
    "name": "MediaY",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFCrow.png",
    "gallery": [
      "images/heroes/MFCrow.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MediaY ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#678004",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 475812,
    "name": "MFRaidenDESPArmor",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFRaidenDESPArmor.png",
    "gallery": [
      "images/heroes/MFRaidenDESPArmor.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 8.0% | 💖 รีเจน 12.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFRaidenDESPArmor ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 8.0% ฟื้นฟูเลือด 12.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 8,
      "regen": 12
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#475812",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "8.0%",
      "การฟื้นฟูเลือด (Regen)": "12.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 64510085,
    "name": "Sojiro",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Sojiro.png",
    "gallery": [
      "images/heroes/Sojiro.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Sojiro ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#64510085",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 5970452,
    "name": "EvangelionBNR",
    "category": "regen",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/EvangelionBNR.png",
    "gallery": [
      "images/heroes/EvangelionBNR.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ EvangelionBNR ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#5970452",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 402222,
    "name": "2000EchostealthBK",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/2000EchostealthBK.png",
    "gallery": [
      "images/heroes/2000EchostealthBK.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 10.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000EchostealthBK ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 10.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 10
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#402222",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "10.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 412222,
    "name": "LuffyKurama",
    "category": "anime",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/LuffyKurama.png",
    "gallery": [
      "images/heroes/LuffyKurama.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ LuffyKurama ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#412222",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 111458,
    "name": "Koekus",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Koekus.png",
    "gallery": [
      "images/heroes/Koekus.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Koekus ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#111458",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 2319122,
    "name": "ZenBlackMMD",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/ZenBlackMMD.png",
    "gallery": [
      "images/heroes/ZenBlackMMD.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ ZenBlackMMD ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#2319122",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 591011,
    "name": "MFEvangelionDB",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEvangelionDB.png",
    "gallery": [
      "images/heroes/MFEvangelionDB.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEvangelionDB ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#591011",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 630911,
    "name": "NIKE_Gojo",
    "category": "anime",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/NIKE_Gojo.png",
    "gallery": [
      "images/heroes/NIKE_Gojo.png"
    ],
    "shortDesc": "⚡ วิ่ง 45.0% | 🛡️ เกราะ 20.0% | 💖 รีเจน 25.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ NIKE_Gojo ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 45.0% เกราะหนา 20.0% ฟื้นฟูเลือด 25.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 45,
      "deff": 20,
      "regen": 25
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#630911",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "45.0%",
      "พลังป้องกัน (Def)": "20.0%",
      "การฟื้นฟูเลือด (Regen)": "25.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 391018,
    "name": "MFEvangelionDR",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEvangelionDR.png",
    "gallery": [
      "images/heroes/MFEvangelionDR.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEvangelionDR ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#391018",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 9937,
    "name": "Color_Black420",
    "category": "regen",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/Color_Black420.png",
    "gallery": [
      "images/heroes/Color_Black420.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Color_Black420 ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#09937",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 27198,
    "name": "MFEndoBlackNew",
    "category": "tank",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEndoBlackNew.png",
    "gallery": [
      "images/heroes/MFEndoBlackNew.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 18.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEndoBlackNew ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 13.0% ฟื้นฟูเลือด 18.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 13,
      "regen": 18
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#27198",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "18.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 91018,
    "name": "MFEvangelionDG",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEvangelionDG.png",
    "gallery": [
      "images/heroes/MFEvangelionDG.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEvangelionDG ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#91018",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 503118,
    "name": "MFShanks89New",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFShanks89New.png",
    "gallery": [
      "images/heroes/MFShanks89New.png"
    ],
    "shortDesc": "⚡ วิ่ง 150.0% | 🛡️ เกราะ 150.0% | 💖 รีเจน 150.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFShanks89New ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 150.0% เกราะหนา 150.0% ฟื้นฟูเลือด 150.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 150,
      "deff": 150,
      "regen": 150
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#503118",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "150.0%",
      "พลังป้องกัน (Def)": "150.0%",
      "การฟื้นฟูเลือด (Regen)": "150.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 776990,
    "name": "BleachSG",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/BleachSG.png",
    "gallery": [
      "images/heroes/BleachSG.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ BleachSG ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#776990",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 65013322,
    "name": "LuciaAlphaCR",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/LuciaAlphaCR.png",
    "gallery": [
      "images/heroes/LuciaAlphaCR.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ LuciaAlphaCR ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#65013322",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 119577,
    "name": "MFEvangelionUnitWhite",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFEvangelionUnitWhite.png",
    "gallery": [
      "images/heroes/MFEvangelionUnitWhite.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFEvangelionUnitWhite ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#119577",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 100407,
    "name": "Skeleton",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Skeleton.png",
    "gallery": [
      "images/heroes/Skeleton.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Skeleton ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#100407",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 599907471,
    "name": "B2BKanekiNK",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/B2BKanekiNK.png",
    "gallery": [
      "images/heroes/B2BKanekiNK.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2BKanekiNK ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#599907471",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 7775956,
    "name": "bleach",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/bleach.png",
    "gallery": [
      "images/heroes/bleach.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ bleach ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#7775956",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 870466,
    "name": "SwimMyfriend",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/SwimMyfriend.png",
    "gallery": [
      "images/heroes/SwimMyfriend.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 30.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ SwimMyfriend ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 15.0% ฟื้นฟูเลือด 30.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 15,
      "regen": 30
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#870466",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "30.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 8902314,
    "name": "SuitToshiNew",
    "category": "anime",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/SuitToshiNew.png",
    "gallery": [
      "images/heroes/SuitToshiNew.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ SuitToshiNew ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 12.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 12,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#8902314",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 7221056,
    "name": "kanekiken",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/kanekiken.png",
    "gallery": [
      "images/heroes/kanekiken.png"
    ],
    "shortDesc": "⚡ วิ่ง 45.0% | 🛡️ เกราะ 18.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ kanekiken ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 45.0% เกราะหนา 18.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 45,
      "deff": 18,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#7221056",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "45.0%",
      "พลังป้องกัน (Def)": "18.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 123456,
    "name": "B2B_Tragedian",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_Tragedian.png",
    "gallery": [
      "images/heroes/B2B_Tragedian.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2B_Tragedian ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#123456",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 5250756,
    "name": "TPSaitamaSupreme",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/TPSaitamaSupreme.png",
    "gallery": [
      "images/heroes/TPSaitamaSupreme.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPSaitamaSupreme ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#5250756",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 482595,
    "name": "B2B_AdamTaurus",
    "category": "anime",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_AdamTaurus.png",
    "gallery": [
      "images/heroes/B2B_AdamTaurus.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 3.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2B_AdamTaurus ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 7.0% ฟื้นฟูเลือด 3.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 7,
      "regen": 3
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#482595",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "3.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 1212624,
    "name": "MonkYoung",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/MonkYoung.png",
    "gallery": [
      "images/heroes/MonkYoung.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MonkYoung ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#1212624",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 60378193,
    "name": "rainnee",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/rainnee.png",
    "gallery": [
      "images/heroes/rainnee.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 20.0% | 💖 รีเจน 20.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ rainnee ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 20.0% ฟื้นฟูเลือด 20.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 20,
      "regen": 20
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#60378193",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "20.0%",
      "การฟื้นฟูเลือด (Regen)": "20.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20174,
    "name": "Ex Military",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/RegularGuy.png",
    "gallery": [
      "images/heroes/RegularGuy.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Ex Military ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20174",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20182,
    "name": "Ex cage fighter",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/mohawkguy.png",
    "gallery": [
      "images/heroes/mohawkguy.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Ex cage fighter ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20182",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20184,
    "name": "Hunter",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/asiangirl.png",
    "gallery": [
      "images/heroes/asiangirl.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Hunter ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20184",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20189,
    "name": "Male Character",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/CharacterMale_01.png",
    "gallery": [
      "images/heroes/CharacterMale_01.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Male Character ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20189",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20193,
    "name": "Average Joe",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/CharacterMale_02.png",
    "gallery": [
      "images/heroes/CharacterMale_02.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Average Joe ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20193",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20194,
    "name": "CharacterFemale_01",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/CharacterFemale_01.png",
    "gallery": [
      "images/heroes/CharacterFemale_01.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ CharacterFemale_01 ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20194",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20195,
    "name": "CharacterFemale_02",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/CharacterFemale_02.png",
    "gallery": [
      "images/heroes/CharacterFemale_02.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ CharacterFemale_02 ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20195",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20201,
    "name": "Asian Male",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/CharacterMale_Asian.png",
    "gallery": [
      "images/heroes/CharacterMale_Asian.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Asian Male ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20201",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20202,
    "name": "CharacterMale_05",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/CharacterMale_05.png",
    "gallery": [
      "images/heroes/CharacterMale_05.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ CharacterMale_05 ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20202",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20203,
    "name": "CharacterMale_Black",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/CharacterMale_Black.png",
    "gallery": [
      "images/heroes/CharacterMale_Black.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ CharacterMale_Black ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20203",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20240,
    "name": "SurvivorMan",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/SurvivorMan.png",
    "gallery": [
      "images/heroes/SurvivorMan.png"
    ],
    "shortDesc": "⚡ วิ่ง 23.0% | 🛡️ เกราะ 5.0% | 💖 รีเจน 5.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ SurvivorMan ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 23.0% เกราะหนา 5.0% ฟื้นฟูเลือด 5.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 23,
      "deff": 5,
      "regen": 5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20240",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "23.0%",
      "พลังป้องกัน (Def)": "5.0%",
      "การฟื้นฟูเลือด (Regen)": "5.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20241,
    "name": "Harley_Quinn",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/Harley_Quinn.png",
    "gallery": [
      "images/heroes/Harley_Quinn.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Harley_Quinn ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20241",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20244,
    "name": "Char_Male_01",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Char_Male_01.png",
    "gallery": [
      "images/heroes/Char_Male_01.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Char_Male_01 ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20244",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20245,
    "name": "Jade",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Jade.png",
    "gallery": [
      "images/heroes/Jade.png"
    ],
    "shortDesc": "⚡ วิ่ง 23.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Jade ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 23.0% เกราะหนา 7.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 23,
      "deff": 7,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20245",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "23.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20222,
    "name": "Female_ST",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/female_st.png",
    "gallery": [
      "images/heroes/female_st.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Female_ST ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20222",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20223,
    "name": "Male_ST",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/male_st.png",
    "gallery": [
      "images/heroes/male_st.png"
    ],
    "shortDesc": "⚡ วิ่ง 38.0% | 🛡️ เกราะ 3.0% | 💖 รีเจน 40.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Male_ST ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 38.0% เกราะหนา 3.0% ฟื้นฟูเลือด 40.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 38,
      "deff": 3,
      "regen": 40
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20223",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "38.0%",
      "พลังป้องกัน (Def)": "3.0%",
      "การฟื้นฟูเลือด (Regen)": "40.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20224,
    "name": "Fury",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/fury.png",
    "gallery": [
      "images/heroes/fury.png"
    ],
    "shortDesc": "⚡ วิ่ง 22.0% | 🛡️ เกราะ 5.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Fury ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 22.0% เกราะหนา 5.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 22,
      "deff": 5,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20224",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "22.0%",
      "พลังป้องกัน (Def)": "5.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20212,
    "name": "Siamese",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/siamese_hero.png",
    "gallery": [
      "images/heroes/siamese_hero.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Siamese ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20212",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20225,
    "name": "Roxy",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/character_roxy.png",
    "gallery": [
      "images/heroes/character_roxy.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Roxy ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20225",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 39588,
    "name": "MFPHEEGreyBlackGB",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MFPHEEGreyBlackGB.png",
    "gallery": [
      "images/heroes/MFPHEEGreyBlackGB.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MFPHEEGreyBlackGB ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#39588",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 11152,
    "name": "devilBW",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/devilBW.png",
    "gallery": [
      "images/heroes/devilBW.png"
    ],
    "shortDesc": "⚡ วิ่ง 45.0% | 🛡️ เกราะ 20.0% | 💖 รีเจน 25.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ devilBW ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 45.0% เกราะหนา 20.0% ฟื้นฟูเลือด 25.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 45,
      "deff": 20,
      "regen": 25
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#11152",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "45.0%",
      "พลังป้องกัน (Def)": "20.0%",
      "การฟื้นฟูเลือด (Regen)": "25.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20226,
    "name": "Technician",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/gang_technician.png",
    "gallery": [
      "images/heroes/gang_technician.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Technician ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20226",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20228,
    "name": "MikuFlzKatai",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/KYD_MikuFlzKatai.png",
    "gallery": [
      "images/heroes/KYD_MikuFlzKatai.png"
    ],
    "shortDesc": "⚡ วิ่ง 22.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MikuFlzKatai ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 22.0% เกราะหนา 7.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 22,
      "deff": 7,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20228",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "22.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20229,
    "name": "Joker",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/JokerSS.png",
    "gallery": [
      "images/heroes/JokerSS.png"
    ],
    "shortDesc": "⚡ วิ่ง 30.0% | 🛡️ เกราะ 6.0% | 💖 รีเจน 4.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Joker ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 30.0% เกราะหนา 6.0% ฟื้นฟูเลือด 4.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 30,
      "deff": 6,
      "regen": 4
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20229",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "30.0%",
      "พลังป้องกัน (Def)": "6.0%",
      "การฟื้นฟูเลือด (Regen)": "4.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20230,
    "name": "Kaneki Aogiri",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/B2B_KanekiAogiri.png",
    "gallery": [
      "images/heroes/B2B_KanekiAogiri.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Kaneki Aogiri ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20230",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20232,
    "name": "Kaneki Chill",
    "category": "anime",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_KNKSM.png",
    "gallery": [
      "images/heroes/B2B_KNKSM.png"
    ],
    "shortDesc": "⚡ วิ่ง 3.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 2.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Kaneki Chill ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 3.0% เกราะหนา 0.0% ฟื้นฟูเลือด 2.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 3,
      "deff": 0,
      "regen": 2
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20232",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "3.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "2.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20233,
    "name": "miku",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/B2B_Mikutron.png",
    "gallery": [
      "images/heroes/B2B_Mikutron.png"
    ],
    "shortDesc": "⚡ วิ่ง 28.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ miku ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 28.0% เกราะหนา 7.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 28,
      "deff": 7,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20233",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "28.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20234,
    "name": "Qipao",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Qipao.png",
    "gallery": [
      "images/heroes/Qipao.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Qipao ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20234",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20252,
    "name": "United Warrior",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/UnWarrior.png",
    "gallery": [
      "images/heroes/UnWarrior.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ United Warrior ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20252",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20253,
    "name": "Alisha",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Alisha.png",
    "gallery": [
      "images/heroes/Alisha.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Alisha ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20253",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20254,
    "name": "Shadow corp",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/ShadowCorp.png",
    "gallery": [
      "images/heroes/ShadowCorp.png"
    ],
    "shortDesc": "⚡ วิ่ง 0.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 0.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Shadow corp ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 0.0% เกราะหนา 0.0% ฟื้นฟูเลือด 0.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 0,
      "deff": 0,
      "regen": 0
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20254",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "0.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "0.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20255,
    "name": "Jason",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/jason.png",
    "gallery": [
      "images/heroes/jason.png"
    ],
    "shortDesc": "⚡ วิ่ง 25.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Jason ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 25.0% เกราะหนา 7.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 25,
      "deff": 7,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20255",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "25.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20256,
    "name": "NieRXKohtle Eve",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/NieRXKohtle_Eve.png",
    "gallery": [
      "images/heroes/NieRXKohtle_Eve.png"
    ],
    "shortDesc": "⚡ วิ่ง 19.0% | 🛡️ เกราะ 0.0% | 💖 รีเจน 5.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ NieRXKohtle Eve ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 19.0% เกราะหนา 0.0% ฟื้นฟูเลือด 5.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 19,
      "deff": 0,
      "regen": 5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20256",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "19.0%",
      "พลังป้องกัน (Def)": "0.0%",
      "การฟื้นฟูเลือด (Regen)": "5.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 20257,
    "name": "Miyu",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Female_Miyu.png",
    "gallery": [
      "images/heroes/Female_Miyu.png"
    ],
    "shortDesc": "⚡ วิ่ง 24.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Miyu ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 24.0% เกราะหนา 7.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 24,
      "deff": 7,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#20257",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "24.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 7291954,
    "name": "PHBaby",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/PHBaby.png",
    "gallery": [
      "images/heroes/PHBaby.png"
    ],
    "shortDesc": "⚡ วิ่ง 45.0% | 🛡️ เกราะ 20.0% | 💖 รีเจน 35.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ PHBaby ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 45.0% เกราะหนา 20.0% ฟื้นฟูเลือด 35.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 45,
      "deff": 20,
      "regen": 35
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#7291954",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "45.0%",
      "พลังป้องกัน (Def)": "20.0%",
      "การฟื้นฟูเลือด (Regen)": "35.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555111,
    "name": "B2B_BigPooh",
    "category": "speed",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_BigPooh.png",
    "gallery": [
      "images/heroes/B2B_BigPooh.png"
    ],
    "shortDesc": "⚡ วิ่ง 35.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 6.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2B_BigPooh ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 35.0% เกราะหนา 9.0% ฟื้นฟูเลือด 6.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 35,
      "deff": 9,
      "regen": 6
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555111",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "35.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "6.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555112,
    "name": "myer",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/myer.png",
    "gallery": [
      "images/heroes/myer.png"
    ],
    "shortDesc": "⚡ วิ่ง 28.0% | 🛡️ เกราะ 5.0% | 💖 รีเจน 5.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ myer ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 28.0% เกราะหนา 5.0% ฟื้นฟูเลือด 5.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 28,
      "deff": 5,
      "regen": 5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555112",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "28.0%",
      "พลังป้องกัน (Def)": "5.0%",
      "การฟื้นฟูเลือด (Regen)": "5.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555113,
    "name": "PHLouis",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/PHLouis.png",
    "gallery": [
      "images/heroes/PHLouis.png"
    ],
    "shortDesc": "⚡ วิ่ง 31.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 4.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ PHLouis ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 31.0% เกราะหนา 9.0% ฟื้นฟูเลือด 4.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 31,
      "deff": 9,
      "regen": 4
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555113",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "31.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "4.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555115,
    "name": "2002alian",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/2002alian.png",
    "gallery": [
      "images/heroes/2002alian.png"
    ],
    "shortDesc": "⚡ วิ่ง 31.0% | 🛡️ เกราะ 8.0% | 💖 รีเจน 11.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2002alian ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 31.0% เกราะหนา 8.0% ฟื้นฟูเลือด 11.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 31,
      "deff": 8,
      "regen": 11
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555115",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "31.0%",
      "พลังป้องกัน (Def)": "8.0%",
      "การฟื้นฟูเลือด (Regen)": "11.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555116,
    "name": "brook",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/brook.png",
    "gallery": [
      "images/heroes/brook.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ brook ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555116",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555117,
    "name": "2000sasuke",
    "category": "anime",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/2000sasuke.png",
    "gallery": [
      "images/heroes/2000sasuke.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000sasuke ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555117",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555118,
    "name": "Edward_NK",
    "category": "anime",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Edward_NK.png",
    "gallery": [
      "images/heroes/Edward_NK.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Edward_NK ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555118",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555119,
    "name": "frozone3d",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/Frozone3d.png",
    "gallery": [
      "images/heroes/Frozone3d.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ frozone3d ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555119",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 9702431,
    "name": "TPEndoB0",
    "category": "tank",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPEndoB0.png",
    "gallery": [
      "images/heroes/TPEndoB0.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 18.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPEndoB0 ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 13.0% ฟื้นฟูเลือด 18.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 13,
      "regen": 18
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#9702431",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "18.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 9702432,
    "name": "ArthurMask",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/ArthurMask.png",
    "gallery": [
      "images/heroes/ArthurMask.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ ArthurMask ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#9702432",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 6220954,
    "name": "2000Raphael",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/2000Raphael.png",
    "gallery": [
      "images/heroes/2000Raphael.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 2000Raphael ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#6220954",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555120,
    "name": "plone",
    "category": "speed",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/PLone.png",
    "gallery": [
      "images/heroes/PLone.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 40.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ plone ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 15.0% ฟื้นฟูเลือด 40.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 15,
      "regen": 40
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555120",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "40.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555122,
    "name": "TPZenWHMMD",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/TPZenWHMMD.png",
    "gallery": [
      "images/heroes/TPZenWHMMD.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ TPZenWHMMD ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555122",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555123,
    "name": "EndoMMDRGB",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/EndoMMDRGB.png",
    "gallery": [
      "images/heroes/EndoMMDRGB.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 23.0% | 💖 รีเจน 40.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ EndoMMDRGB ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 23.0% ฟื้นฟูเลือด 40.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 23,
      "regen": 40
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555123",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "23.0%",
      "การฟื้นฟูเลือด (Regen)": "40.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555124,
    "name": "Yangs",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Yangs.png",
    "gallery": [
      "images/heroes/Yangs.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Yangs ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555124",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555126,
    "name": "B2B_GMG",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/B2B_GMG.png",
    "gallery": [
      "images/heroes/B2B_GMG.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2B_GMG ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555126",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555128,
    "name": "kaidanalenko",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/kaidanalenko.png",
    "gallery": [
      "images/heroes/kaidanalenko.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ kaidanalenko ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555128",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555129,
    "name": "B2B_WCBishounen",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_WCBishounen.png",
    "gallery": [
      "images/heroes/B2B_WCBishounen.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2B_WCBishounen ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555129",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555130,
    "name": "LilHalFreelance_NonNon",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/LilHalFreelance_NonNon.png",
    "gallery": [
      "images/heroes/LilHalFreelance_NonNon.png"
    ],
    "shortDesc": "⚡ วิ่ง 28.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 7.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ LilHalFreelance_NonNon ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 28.0% เกราะหนา 7.0% ฟื้นฟูเลือด 7.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 28,
      "deff": 7,
      "regen": 7
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555130",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "28.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "7.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555131,
    "name": "3411_PhantomDetective",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/3411_PhantomDetective.png",
    "gallery": [
      "images/heroes/3411_PhantomDetective.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_PhantomDetective ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555131",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555132,
    "name": "3411_Victor",
    "category": "classic",
    "tier": "S",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/3411_Victor.png",
    "gallery": [
      "images/heroes/3411_Victor.png"
    ],
    "shortDesc": "⚡ วิ่ง 30.0% | 🛡️ เกราะ 8.0% | 💖 รีเจน 9.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_Victor ระดับ S Grade สเตตัสจัดเต็ม วิ่งไว 30.0% เกราะหนา 8.0% ฟื้นฟูเลือด 9.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 30,
      "deff": 8,
      "regen": 9
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555132",
      "ระดับความแรร์": "S Tier",
      "ความเร็วการวิ่ง (Speed)": "30.0%",
      "พลังป้องกัน (Def)": "8.0%",
      "การฟื้นฟูเลือด (Regen)": "9.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555133,
    "name": "B2B_Frenzy",
    "category": "classic",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B2B_Frenzy.png",
    "gallery": [
      "images/heroes/B2B_Frenzy.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 9.0% | 💖 รีเจน 13.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B2B_Frenzy ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 9.0% ฟื้นฟูเลือด 13.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 9,
      "regen": 13
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555133",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "9.0%",
      "การฟื้นฟูเลือด (Regen)": "13.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555134,
    "name": "jokrsupr",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/jokrsupr.png",
    "gallery": [
      "images/heroes/jokrsupr.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 23.0% | 💖 รีเจน 40.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ jokrsupr ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 23.0% ฟื้นฟูเลือด 40.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 23,
      "regen": 40
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555134",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "23.0%",
      "การฟื้นฟูเลือด (Regen)": "40.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555135,
    "name": "The_Spirit",
    "category": "regen",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/The_Spirit.png",
    "gallery": [
      "images/heroes/The_Spirit.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ The_Spirit ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555135",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555136,
    "name": "gambler",
    "category": "regen",
    "tier": "SS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Gambler.png",
    "gallery": [
      "images/heroes/Gambler.png"
    ],
    "shortDesc": "⚡ วิ่ง 33.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 16.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ gambler ระดับ SS Grade สเตตัสจัดเต็ม วิ่งไว 33.0% เกราะหนา 12.0% ฟื้นฟูเลือด 16.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 33,
      "deff": 12,
      "regen": 16
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555136",
      "ระดับความแรร์": "SS Tier",
      "ความเร็วการวิ่ง (Speed)": "33.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "16.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555137,
    "name": "3411_Hashibira",
    "category": "anime",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/3411_Hashibira.png",
    "gallery": [
      "images/heroes/3411_Hashibira.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 7.0% | 💖 รีเจน 3.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_Hashibira ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 7.0% ฟื้นฟูเลือด 3.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 7,
      "regen": 3
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555137",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "7.0%",
      "การฟื้นฟูเลือด (Regen)": "3.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555138,
    "name": "B4Y_Doflamingo",
    "category": "anime",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/B4Y_Doflamingo.png",
    "gallery": [
      "images/heroes/B4Y_Doflamingo.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ B4Y_Doflamingo ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555138",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555139,
    "name": "nudeman",
    "category": "regen",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/nudeman.png",
    "gallery": [
      "images/heroes/nudeman.png"
    ],
    "shortDesc": "⚡ วิ่ง 32.0% | 🛡️ เกราะ 12.0% | 💖 รีเจน 14.5 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ nudeman ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 32.0% เกราะหนา 12.0% ฟื้นฟูเลือด 14.5 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 32,
      "deff": 12,
      "regen": 14.5
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555139",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "32.0%",
      "พลังป้องกัน (Def)": "12.0%",
      "การฟื้นฟูเลือด (Regen)": "14.5 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555140,
    "name": "Werewolf",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/Werewolf.png",
    "gallery": [
      "images/heroes/Werewolf.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 23.0% | 💖 รีเจน 40.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ Werewolf ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 23.0% ฟื้นฟูเลือด 40.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 23,
      "regen": 40
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555140",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "23.0%",
      "การฟื้นฟูเลือด (Regen)": "40.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555142,
    "name": "3411pheeTee",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/3411pheeTee.png",
    "gallery": [
      "images/heroes/3411pheeTee.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 15.0% | 💖 รีเจน 15.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411pheeTee ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 15.0% ฟื้นฟูเลือด 15.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 15,
      "regen": 15
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555142",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "15.0%",
      "การฟื้นฟูเลือด (Regen)": "15.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555143,
    "name": "MR2",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/MR2.png",
    "gallery": [
      "images/heroes/MR2.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 20.0% | 💖 รีเจน 40.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ MR2 ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 20.0% ฟื้นฟูเลือด 40.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 20,
      "regen": 40
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555143",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "20.0%",
      "การฟื้นฟูเลือด (Regen)": "40.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555144,
    "name": "skg",
    "category": "classic",
    "tier": "SSS",
    "price": 15,
    "originalPrice": 20,
    "featured": false,
    "image": "images/heroes/skg.png",
    "gallery": [
      "images/heroes/skg.png"
    ],
    "shortDesc": "⚡ วิ่ง 31.0% | 🛡️ เกราะ 8.0% | 💖 รีเจน 11.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ skg ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 31.0% เกราะหนา 8.0% ฟื้นฟูเลือด 11.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 31,
      "deff": 8,
      "regen": 11
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555144",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "31.0%",
      "พลังป้องกัน (Def)": "8.0%",
      "การฟื้นฟูเลือด (Regen)": "11.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  },
  {
    "id": 555145,
    "name": "3411_Skeleton",
    "category": "speed",
    "tier": "SSS",
    "price": 20,
    "originalPrice": null,
    "featured": false,
    "image": "images/heroes/3411_Skeleton.png",
    "gallery": [
      "images/heroes/3411_Skeleton.png"
    ],
    "shortDesc": "⚡ วิ่ง 41.0% | 🛡️ เกราะ 13.0% | 💖 รีเจน 8.0 HP/s",
    "description": "ตัวละครฮีโร่สุดแรร์ 3411_Skeleton ระดับ SSS Grade สเตตัสจัดเต็ม วิ่งไว 41.0% เกราะหนา 13.0% ฟื้นฟูเลือด 8.0 HP/s พร้อมส่งทันที ลุยได้ทุกสมรภูมิ",
    "stats": {
      "speed": 41,
      "deff": 13,
      "regen": 8
    },
    "variants": [
      {
        "name": "รูปแบบสินค้า",
        "options": [
          "ตัวละครถาวร (Permanent Key)",
          "ตัวละคร + เซ็ตสกิล"
        ]
      }
    ],
    "specs": {
      "รหัสตัวละคร": "#555145",
      "ระดับความแรร์": "SSS Tier",
      "ความเร็วการวิ่ง (Speed)": "41.0%",
      "พลังป้องกัน (Def)": "13.0%",
      "การฟื้นฟูเลือด (Regen)": "8.0 HP/วินาที",
      "การเปิดใช้งาน": "ปลดล็อกถาวรในเกมทันที"
    },
    "status": "พร้อมส่ง"
  }
];

// โหลดข้อมูลร้านค้าและสินค้า
function getActiveStoreConfig() {
  return DEFAULT_STORE_CONFIG;
}

function getActiveProducts() {
  return DEFAULT_PRODUCTS;
}

// Global active instances
var STORE_CONFIG = getActiveStoreConfig();
var PRODUCTS = getActiveProducts();
