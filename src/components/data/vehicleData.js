import wagonrfx from "../../images/vehicles/Suzuki/wagon R FX.jpeg"
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
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80",
      desc:
        "The Honda Civic blends sporty design with everyday practicality. Its reliable drivetrain, comfortable interior and advanced driver assists make it a top pick for global importers. The 2022 generation introduces refined styling and improved ride comfort.",
      price: "$11,200",
    },
    {
      name: "Honda CR-V",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Honda_CR-V_e-HEV_Elegance_AWD_%28VI%29_%E2%80%93_f_14072024.jpg/1200px-Honda_CR-V_e-HEV_Elegance_AWD_%28VI%29_%E2%80%93_f_14072024.jpg",
      desc:
        "This Honda CR-V is a spacious compact SUV offering versatility, comfort and proven reliability. With Honda’s reputation behind it, the model appeals to families and import buyers wanting a well-rounded package from Japan’s finest.",
      price: "$18,500",
    },
    {
      name: "Honda Fit (Jazz)",
      img: "https://hips.hearstapps.com/hmg-prod/images/2020-honda-fit-mmp-1-1574789897.jpg?crop=1.00xw:0.750xh;0,0.137xh&resize=1200:*",
      desc:
        "The Honda Fit (also marketed as Jazz) is a clever, compact hatchback with flexible `Magic Seat` utility and excellent fuel economy. Import-wise, it fits urban markets while offering Honda’s engineering and long-term value.",
      price: "$6,500",
    },
    // … add 9 more entries here
  ],

  Suzuki: [
    {
      name: "Suzuki Swift Sport",
      img: "https://autodesignmagazine.com/wp-content/uploads/2017/07/2017072501_suzuki_swift.jpg",
      desc:
        "The Suzuki Swift Sport is a fun, lightweight hot-hatch with sharp handling and distinctive styling. It’s ideal for import buyers seeking spirited driving, compact dimensions and Japanese engineering in a nimble package.",
      price: "$8,100",
    },
    {
      name: "Suzuki Wagon R FX 2025",
      img: wagonrfx, 
      desc:
        "The Suzuki Wagon R FX 2025 is a compact and practical hatchback, offering a blend of efficiency and comfort. With its modern design, the car features a fuel-efficient engine, spacious interior, and advanced safety features. Ideal for city driving, it provides a smooth ride and easy maneuverability.",
      price: "$15,300",
    },
    {
      name: "Suzuki Alto",
      img: "https://imgcdn.zigwheels.lk/large/gallery/color/37/818/suzuki-alto-color-797265.jpg",
      desc:
        "The Suzuki Alto is a micro-hatch perfect for city-driving and tight spaces. With low running costs, efficient engine and practical packaging, it makes a solid choice in import markets where compact size is valued.",
      price: "$5,400",
    },
    // … add 9 more entries here
  ],

  Nissan: [
    {
      name: "Nissan X-Trail",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/X-Trail/3372/1749716960354/front-left-side-47.jpg",
      desc:
        "The Nissan X-Trail (also known as Rogue in some markets) offers a comfortable, mid-sized SUV with advanced safety systems and solid practicality. As a Japanese import, it gives access to value and variants not widely available overseas.",
      price: "$17,800",
    },
    {
      name: "Nissan GT-R",
      img: "https://media.ed.edmunds-media.com/nissan/gt-r/2024/oem/2024_nissan_gt-r_coupe_nismo_fq_oem_1_600.jpg",
      desc:
        "The Nissan GT-R is a legendary sports car built for extreme performance, twin-turbo power and precise all-wheel drive. Importing the JDM version provides unique specification and genuine value for enthusiasts.",
      price: "$95,000",
    },
    {
      name: "Nissan Fairlady Z",
      img: "https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/a59755fbc0aba2c23885998b10c6860b03c91a43",
      desc:
        "The Nissan Fairlady Z (400Z) continues the Z legacy with retro styling, modern performance and enthusiast appeal. As a JDM import, it offers a fresh take on Nissan’s iconic sports coupe line with global potential.",
      price: "$54,000",
    },
    // … add 9 more entries here
  ],

  Mazda: [
    {
      name: "Mazda MX-5 Miata",
      img: "https://www.usnews.com/object/image/00000192-f84f-d6b4-aff3-fd7fbd0e0001/25-mazda-miata-ext1.jpg?update-time=1730742994781&size=responsiveGallery&format=webp",
      desc:
        "The Mazda MX-5 Miata is a lightweight convertible sports car that offers fun-to-drive dynamics, minimalist design and exceptional handling. A desirable import from Japan for driving enthusiasts and collectors alike.",
      price: "$22,000",
    },
    {
      name: "Mazda CX-5",
      img: "https://i1.wp.com/www.washingtoninformer.com/wp-content/uploads/2015/03/2015-Mazda-CX-5.jpg?ssl=1",
      desc:
        "The Mazda CX-5 is a premium compact SUV blending elegance, strong performance and high build quality. Japanese imports often offer premium features at competitive prices in world markets.",
      price: "$19,500",
    },
    {
      name: "Mazda3 Hatchback",
      img: "https://mazda.com.my/media/4zidmhfz/m3-herobanner-2022.jpg",
      desc:
        "The Mazda3 Hatchback offers stylish design, refined interior and spirited performance for everyday driving. As an import, it appeals to those seeking Japanese craftsmanship and value in a compact package.",
      price: "$14,300",
    },
    // … add 9 more entries here
  ],

  Lexus: [
    {
      name: "Lexus LS 500",
      img: "https://hips.hearstapps.com/hmg-prod/images/2025-lexus-ls-500-f-sport-awd-101-67e30ab19aa60.jpg?crop=0.635xw:0.476xh;0.274xw,0.404xh&resize=1200:*",
      desc:
        "The Lexus LS 500 is a flagship luxury sedan delivering quiet refinement, powerful twin-turbo V6 and a richly appointed cabin. A high-end Japanese import choice for executive transport or luxury fleets.",
      price: "$88,000",
    },
    {
      name: "Lexus NX",
      img: "https://media.ed.edmunds-media.com/lexus/nx/2026/oem/2026_lexus_nx_4dr-suv_350-f-sport-handling_fq_oem_1_1600.jpg",
      desc:
        "The Lexus NX is a premium compact crossover combining sharp design, advanced tech and a refined ride. Imported from Japan it offers sophisticated luxury with smaller SUV practicality.",
      price: "$36,500",
    },
    {
      name: "Lexus RX",
      img: "https://hips.hearstapps.com/hmg-prod/images/2025-lexus-rx350-premium-101-66f2dbe526c80.jpg?crop=0.730xw:0.547xh;0.0645xw,0.389xh&resize=1200:*",
      desc:
        "The Lexus RX is a mid-size luxury SUV offering smooth ride, upscale interior and proven reliability. A smart import option for those wanting Japanese luxury SUV credentials at good value.",
      price: "$45,000",
    },
    // … add 9 more entries here
  ],

  Daihatsu: [
    {
      name: "Daihatsu Mira e:S",
      img: "https://paultan.org/image/2017/05/Daihatsu-Mira-e-S-23-e1494333088838.png",
      desc:
        "The Daihatsu Mira e:S is a kei-car designed for ultra-efficient urban use, featuring minimalist design, excellent fuel economy and compact size. Importing from Japan brings unique value in niche markets.",
      price: "$4,500",
    },
    {
      name: "Daihatsu Tanto",
      img: "https://en.daihatsu-club.net/graphics/gallery/full/308-daihatsu-tanto-custom-rs-2wd-5ba-la650s-gbvz-front.jpg",
      desc:
        "The Daihatsu Tanto is a tall-box kei-minivan offering surprising interior space, sliding doors and versatile packaging in a compact footprint—ideal for city-based import markets.",
      price: "$5,200",
    },
    {
      name: "Daihatsu Copen",
      img: "https://www.modifiedrides.net/medias/images/liberty-walks-widebody-daihatsu-copen-gr-sport-1-.webp",
      desc:
        "The Daihatsu Copen is a stylish, small convertible with Japanese flair, lightweight chassis and fun-to-drive character—perfect for niche import buyers seeking personality at low cost.",
      price: "$9,300",
    },
    // … add 9 more entries here
  ],

  Subaru: [
    {
      name: "Subaru Impreza WRX",
      img: "https://static0.topspeedimages.com/wordpress/wp-content/uploads/jpg/201706/2018-subaru-wrx-sti-drive.jpg?w=1600&h=900&fit=crop",
      desc:
        "The Subaru Impreza WRX (STI variant) pairs Subaru’s renowned all-wheel-drive system with turbocharged boxer power and rally-inspired suspension. A top choice for import enthusiasts seeking performance heritage.",
      price: "$28,900",
    },
    {
      name: "Subaru Forester",
      img: "https://hips.hearstapps.com/hmg-prod/images/2025-subaru-forester-sport-front-three-quarters-2-654ab04740826.jpg?crop=0.639xw:0.480xh;0.123xw,0.324xh&resize=1200:*",
      desc:
        "The Subaru Forester is a compact SUV favored for its robust build, symmetrical AWD and practical interior. Import value lies in its dependable performance in all weather conditions.",
      price: "$22,500",
    },
    {
      name: "Subaru BRZ",
      img: "https://cdn.motor1.com/images/mgl/88mQ2/s3/2022-subaru-brz-exterior-front-quarter.jpg",
      desc:
        "The Subaru BRZ is a lightweight, rear-wheel-drive sports coupe co-developed with Toyota that emphasizes balance, driver engagement and pure fun, making it a standout import choice.",
      price: "$26,000",
    },
    // … add 9 more entries here
  ],
};

export default vehicleData;
