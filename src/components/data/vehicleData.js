const vehicleData = {
  Toyota: [
    {
    name: "Toyota Corolla Axio",
    img: "https://global.toyota/pages/news/images/2015/03/30/1330/002_2.jpg",
    desc:
      "The Corolla Axio offers a compact, reliable four-door sedan built for everyday use. With efficient petrol engines, comfortable seating for five and refined handling, it makes a smart choice for urban commuters and small families alike.",
    price: "$7,800",
  },
  {
    name: "Toyota Land Cruiser Prado",
    img: "https://global.toyota/pages/news/images/2024/04/18/1330/20240418_01_ogp.jpg",
    desc:
      "A rugged yet refined luxury SUV with serious off-road capability. It combines full-time four-wheel drive, a spacious cabin and high ground clearance for challenging terrains.",
    price: "$34,500",
  },
  {
    name: "Toyota Supra",
    img: "https://di-uploads-pod11.dealerinspire.com/germaintoyotaofcolumbus/uploads/2025/07/Toyota-GR-Supra-Exterior.webp",
    desc:
      "The Toyota Supra is a performance coupe that blends Japanese design with German engineering. Turbocharged power and agile handling make it a thrilling sports car.",
    price: "$52,000",
  },
  {
    name: "Toyota Aqua (Prius C)",
    img: "https://i.ytimg.com/vi/QlV-9uMgJ3A/maxresdefault.jpg",
    desc:
      "A compact hybrid hatchback delivering outstanding fuel efficiency. Perfect for city driving with easy maneuverability and eco-friendly performance.",
    price: "$9,400",
  },
  {
    name: "Toyota Alphard",
    img: "https://global.toyota/pages/news/images/2023/06/21/1330/002.jpg",
    desc:
      "The Alphard is a luxury minivan offering first-class comfort, a spacious interior, and advanced safety. Popular among business and VIP transport fleets.",
    price: "$25,000",
  },
  {
    name: "Toyota Vitz",
    img: "https://blog.carjunction.com/wp-content/uploads/2016/11/Toyota-vitz-japanese.png",
    desc:
      "A reliable compact hatchback loved for its efficiency, smooth ride, and low maintenance cost. Ideal for new drivers or city use.",
    price: "$6,800",
  },
  {
    name: "Toyota Camry",
    img: "https://www.buyatoyota.com/sharpr/vcr/adobe/dynamicmedia/deliver/urn:aaid:aem:c80ca7a6-85db-41c0-ae3c-2d7cfa11f207/image.png?",
    desc:
      "A midsize sedan that defines comfort and reliability. Its refined cabin, efficient engines, and sleek styling make it a top choice for professionals.",
    price: "$19,500",
  },
  {
    name: "Toyota Harrier",
    img: "https://cdni.autocarindia.com/ExtraImages/20200622053226_harrier-gr.jpg",
    desc:
      "A stylish crossover blending premium comfort and hybrid efficiency. The Harrier delivers refined design and smooth driving dynamics.",
    price: "$27,300",
  },
  {
    name: "Toyota Crown",
    img: "https://mystrongad.com/toyota/2025/crown/2025-toyota-crown-white.webp",
    desc:
      "A flagship sedan combining elegance with innovation. Offers powerful hybrid options, premium interior materials, and smooth highway cruising.",
    price: "$31,200",
  },
  {
    name: "Toyota Hilux",
    img: "https://images.overdrive.in/wp-content/uploads/2024/02/2024-Toyota-Hilux-1.jpg",
    desc:
      "A durable pickup truck built for hard work and adventure. Trusted worldwide for its toughness, reliability, and off-road ability.",
    price: "$28,000",
  },
  {
    name: "Toyota HiAce",
    img: "https://d2s8i866417m9.cloudfront.net/photo/29509968/photo/thumb-e1edaf7238f7c273e72bb84a12fb2b9e.jpg",
    desc:
      "A versatile van designed for transport and business use. Offers flexible seating and cargo options, efficient diesel and petrol engines.",
    price: "$18,700",
  },
  {
    name: "Toyota RAV4",
    img: "https://global.toyota/pages/news/images/2019/04/10/1330_rav4/001.jpg",
    desc:
      "The RAV4 compact SUV combines rugged styling, advanced safety, and hybrid efficiency. Great for families with an adventurous spirit.",
    price: "$24,600",
  },
  {
    name: "Toyota CH-R",
    img: "https://global.toyota/pages/news/images/2016/09/28/1330_C-HR/20160928_01_ogp.jpg",
    desc:
      "A bold and sporty compact crossover that turns heads. Offers responsive handling, premium tech, and hybrid efficiency.",
    price: "$16,900",
  },
  {
    name: "Toyota Passo",
    img: "https://automobilio.info/auto/Toyota-Passo-II.jpg",
    desc:
      "A small hatchback with big personality. Easy to drive, easy to park, and perfect for urban lifestyles.",
    price: "$5,900",
  },
  {
    name: "Toyota Noah",
    img: "https://i.ytimg.com/vi/0G7ougKUXDE/maxresdefault.jpg",
    desc:
      "A comfortable 7-seater minivan offering practicality and style. Popular for family trips and long drives.",
    price: "$22,500",
  },
  {
    name: "Toyota Estima (Previa)",
    img: "https://paultan.org/image/2021/12/Toyota-Estima-Hybrid-630x354.jpeg",
    desc:
      "A versatile MPV known for reliability and interior comfort. Suitable for large families and travel enthusiasts.",
    price: "$14,800",
  },
  {
    name: "Toyota Sienta",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/2022_Toyota_Sienta_Z_1.5_5BA-MXPC10G_%2820220823%29.jpg/1200px-2022_Toyota_Sienta_Z_1.5_5BA-MXPC10G_%2820220823%29.jpg",
    desc:
      "A compact 7-seater with sliding doors and hybrid technology. Great choice for city families who need space without bulk.",
    price: "$11,200",
  },
  {
    name: "Toyota Mark X",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Toyota_MARK_X_250S_%28DBA-GRX130-AETSH%29_%28cropped%29.jpg/1200px-Toyota_MARK_X_250S_%28DBA-GRX130-AETSH%29_%28cropped%29.jpg",
    desc:
      "A sporty rear-wheel-drive sedan offering smooth acceleration and elegant styling. Loved by enthusiasts for its driving feel.",
    price: "$15,600",
  },
  {
    name: "Toyota Probox",
    img: "https://cdn.motor1.com/images/mgl/JO86mQ/s1/toyota-probox-gx-front.jpg",
    desc:
      "A practical, no-nonsense station wagon ideal for business or cargo. Known for durability and low running costs.",
    price: "$7,200",
  },
  {
    name: "Toyota Century",
    img: "https://i.ytimg.com/vi/28zXc4YTHOk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCqkFFpnUTtCXcWqMySOh3LY9PiZA",
    desc:
      "The ultimate symbol of Japanese luxury. Handmade craftsmanship, V8 hybrid engine, and serene ride comfort make it Toyota’s crown jewel.",
    price: "$120,000",
  },
  ],//

  Honda: [
    {
      name: "Honda Civic",
      img: "https://cdn.motor1.com/images/mgl/oo0x2/s1/2022-honda-civic-sedan.jpg",
      desc:
        "The Honda Civic blends sporty design with everyday practicality. Its reliable drivetrain, comfortable interior and advanced driver assists make it a top pick for global importers. The 2022 generation introduces refined styling and improved ride comfort.",
      price: "$11,200",
    },
    {
      name: "Honda CR-V",
      img: "https://cdn.motor1.com/images/mgl/Zv0Wb/s1/2023-honda-cr-v.jpg",
      desc:
        "This Honda CR-V is a spacious compact SUV offering versatility, comfort and proven reliability. With Honda’s reputation behind it, the model appeals to families and import buyers wanting a well-rounded package from Japan’s finest.",
      price: "$18,500",
    },
    {
      name: "Honda Fit (Jazz)",
      img: "https://cdn.motor1.com/images/mgl/VooVg/s1/honda-fit-2020.jpg",
      desc:
        "The Honda Fit (also marketed as Jazz) is a clever, compact hatchback with flexible `Magic Seat` utility and excellent fuel economy. Import-wise, it fits urban markets while offering Honda’s engineering and long-term value.",
      price: "$6,500",
    },
    // … add 9 more entries here
  ],

  Suzuki: [
    {
      name: "Suzuki Swift Sport",
      img: "https://www.team-bhp.com/sites/default/files/styles/large/public/suzuki-swift-sport.jpg",
      desc:
        "The Suzuki Swift Sport is a fun, lightweight hot-hatch with sharp handling and distinctive styling. It’s ideal for import buyers seeking spirited driving, compact dimensions and Japanese engineering in a nimble package.",
      price: "$8,100",
    },
    {
      name: "Suzuki Jimny",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/78/Suzuki_Jimny_JPN_LHD_front.jpg",
      desc:
        "The Suzuki Jimny is a compact off-road SUV with ladder-frame chassis, short wheel-base and iconic styling. Its rugged nature and niche appeal make it a unique import opportunity from Japan’s domestic market.",
      price: "$15,300",
    },
    {
      name: "Suzuki Alto",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Suzuki_Alto_Japan_front.jpg",
      desc:
        "The Suzuki Alto is a micro-hatch perfect for city-driving and tight spaces. With low running costs, efficient engine and practical packaging, it makes a solid choice in import markets where compact size is valued.",
      price: "$5,400",
    },
    // … add 9 more entries here
  ],

  Nissan: [
    {
      name: "Nissan X-Trail",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Nissan_X-Trail_T32_front.jpg",
      desc:
        "The Nissan X-Trail (also known as Rogue in some markets) offers a comfortable, mid-sized SUV with advanced safety systems and solid practicality. As a Japanese import, it gives access to value and variants not widely available overseas.",
      price: "$17,800",
    },
    {
      name: "Nissan GT-R",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nissan_GT-R_R35_front.jpg",
      desc:
        "The Nissan GT-R is a legendary sports car built for extreme performance, twin-turbo power and precise all-wheel drive. Importing the JDM version provides unique specification and genuine value for enthusiasts.",
      price: "$95,000",
    },
    {
      name: "Nissan Fairlady Z",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Nissan_Fairlady_Z_400Z_front.jpg",
      desc:
        "The Nissan Fairlady Z (400Z) continues the Z legacy with retro styling, modern performance and enthusiast appeal. As a JDM import, it offers a fresh take on Nissan’s iconic sports coupe line with global potential.",
      price: "$54,000",
    },
    // … add 9 more entries here
  ],

  Mazda: [
    {
      name: "Mazda MX-5 Miata",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Mazda_MX-5_ND_front.jpg",
      desc:
        "The Mazda MX-5 Miata is a lightweight convertible sports car that offers fun-to-drive dynamics, minimalist design and exceptional handling. A desirable import from Japan for driving enthusiasts and collectors alike.",
      price: "$22,000",
    },
    {
      name: "Mazda CX-5",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/2017_Mazda_CX-5_front.jpg",
      desc:
        "The Mazda CX-5 is a premium compact SUV blending elegance, strong performance and high build quality. Japanese imports often offer premium features at competitive prices in world markets.",
      price: "$19,500",
    },
    {
      name: "Mazda3 Hatchback",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/36/2019_Mazda_3_front.jpg",
      desc:
        "The Mazda3 Hatchback offers stylish design, refined interior and spirited performance for everyday driving. As an import, it appeals to those seeking Japanese craftsmanship and value in a compact package.",
      price: "$14,300",
    },
    // … add 9 more entries here
  ],

  Lexus: [
    {
      name: "Lexus LS 500",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/63/2018_Lexus_LS_500_front.jpg",
      desc:
        "The Lexus LS 500 is a flagship luxury sedan delivering quiet refinement, powerful twin-turbo V6 and a richly appointed cabin. A high-end Japanese import choice for executive transport or luxury fleets.",
      price: "$88,000",
    },
    {
      name: "Lexus NX",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/34/2022_Lexus_NX_350_front.jpg",
      desc:
        "The Lexus NX is a premium compact crossover combining sharp design, advanced tech and a refined ride. Imported from Japan it offers sophisticated luxury with smaller SUV practicality.",
      price: "$36,500",
    },
    {
      name: "Lexus RX",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/57/2020_Lexus_RX_350_front.jpg",
      desc:
        "The Lexus RX is a mid-size luxury SUV offering smooth ride, upscale interior and proven reliability. A smart import option for those wanting Japanese luxury SUV credentials at good value.",
      price: "$45,000",
    },
    // … add 9 more entries here
  ],

  Daihatsu: [
    {
      name: "Daihatsu Mira e:S",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Daihatsu_Mira_eS_front.jpg",
      desc:
        "The Daihatsu Mira e:S is a kei-car designed for ultra-efficient urban use, featuring minimalist design, excellent fuel economy and compact size. Importing from Japan brings unique value in niche markets.",
      price: "$4,500",
    },
    {
      name: "Daihatsu Tanto",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Daihatsu_Tanto_front.jpg",
      desc:
        "The Daihatsu Tanto is a tall-box kei-minivan offering surprising interior space, sliding doors and versatile packaging in a compact footprint—ideal for city-based import markets.",
      price: "$5,200",
    },
    {
      name: "Daihatsu Copen",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Daihatsu_Copen_front.jpg",
      desc:
        "The Daihatsu Copen is a stylish, small convertible with Japanese flair, lightweight chassis and fun-to-drive character—perfect for niche import buyers seeking personality at low cost.",
      price: "$9,300",
    },
    // … add 9 more entries here
  ],

  Subaru: [
    {
      name: "Subaru Impreza WRX",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Subaru_WRX_STI_front.jpg",
      desc:
        "The Subaru Impreza WRX (STI variant) pairs Subaru’s renowned all-wheel-drive system with turbocharged boxer power and rally-inspired suspension. A top choice for import enthusiasts seeking performance heritage.",
      price: "$28,900",
    },
    {
      name: "Subaru Forester",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/2021_Subaru_Forester_front.jpg",
      desc:
        "The Subaru Forester is a compact SUV favored for its robust build, symmetrical AWD and practical interior. Import value lies in its dependable performance in all weather conditions.",
      price: "$22,500",
    },
    {
      name: "Subaru BRZ",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subaru_BRZ_front.jpg",
      desc:
        "The Subaru BRZ is a lightweight, rear-wheel-drive sports coupe co-developed with Toyota that emphasizes balance, driver engagement and pure fun, making it a standout import choice.",
      price: "$26,000",
    },
    // … add 9 more entries here
  ],
};

export default vehicleData;
