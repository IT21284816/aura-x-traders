const vehicleData = {
  Toyota: [
    {
    name: "TOYOTA YARIS CROSS Z",
    img: "https://d31xyjind44oxc.cloudfront.net/wp-content/uploads/2024/07/yaris-cross-overview.jpg.webp",
    desc:
      "The Toyota Yaris Cross Z is a stylish and versatile compact SUV that blends the practicality of a crossover with the efficiency of a compact car. Featuring a sleek design, advanced safety features, and hybrid powertrain options, it delivers excellent fuel economy. With a spacious interior and modern tech, it's perfect for city and off-road adventures.",
    price: "$0",
  },
  {
    name: "TOYOTA YARIS X",
    img: "https://newjbadal.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/11/31100308/Toyota-Yaris-Hybrid-X-Jbadal-1.jpg",
    desc:
      "The Toyota Yaris X is a compact, efficient hatchback offering a balance of performance and fuel economy. With a sleek design, advanced safety features, and a comfortable interior, it's perfect for urban driving.",
    price: "$0",
  },
  {
    name: "TOYOTA RAIZE Z GRADE",
    img: "https://gsat.jp/wp-content/uploads/2020/08/TOYOTA-RAIZE-Z-GRADE-2020.jpeg",
    desc:
      "The Toyota Raize Z Grade is a compact SUV that combines modern design with practical features. It offers a powerful engine, advanced safety systems, and a well-equipped interior, making it ideal for urban and light off-road driving. Its stylish exterior and efficient performance make it a popular choice for city dwellers.",
    price: "$0",
  },
  {
    name: "TOYOTA RAIZE Z HYBRID",
    img: "https://global.toyota/pages/news/images/2019/11/05/1100/001.jpg",
    desc:
      "The Toyota Raize Z Hybrid is a compact SUV with a fuel-efficient hybrid powertrain, offering an eco-friendly driving experience without compromising on performance. It features a stylish design, advanced safety technologies, and a spacious, tech-packed interior. Perfect for city driving, it provides a smooth ride with impressive fuel economy and reduced emissions.",
    price: "$0",
  },
  {
    name: "TOYOTA RAIZE X GRADE",
    img: "https://www.carzworld.com.sg/cdn/shop/products/Raize-3_large_2x.jpg?v=1669951509",
    desc:
      "The Toyota Raize X Grade is a practical, budget-friendly compact SUV offering efficient performance and a comfortable ride. It features a modern exterior, ample cabin space, essential safety features, and user-friendly technology, making it ideal for everyday urban driving.",
    price: "$25,000",
  },
  {
    name: "TOYOTA YARIS CROSS GR SPORT",
    img: "https://editorial.pxcrush.net/carsales/general/editorial/2023-toyota-yaris-cross-gr-sport-01-bed4.jpg?width=1024&height=682",
    desc:
      "The Toyota Yaris Cross GR Sport is a performance-focused compact SUV with sporty styling, sport-tuned suspension, and advanced features. It offers enhanced driving dynamics, a stylish exterior, and modern tech for urban adventures.",
    price: "$0",
  },
  ],//

  Honda: [
    {
      name: "HONDA VEZEL Z GRADE 2025",
      img: "https://amstradings.lk/wp-content/uploads/2025/03/honda_vezel_ehev_z_2024-3840x2160-1-1024x576.jpg",
      desc:
        "The 2025 Honda Vezel Z Grade features a 1.5 L e:HEV hybrid engine, 7-speed CVT, LED lights, leather-fabric seats, Honda Sensing safety suite, adaptive cruise, reverse camera, and alloy wheels.",
      price: "$0",
    },
    {
      name: "HONDA VEZEL RS 2025",
      img: "https://static.carfromjapan.com/car_112def1a-f2b4-4622-8d10-31f3e4ebad6d_640_0",
      desc:
        "The 2025 Honda Vezel RS features a 1.5 L e:HEV hybrid engine (i-VTEC + electric), 2WD or 4WD, e-CVT transmission, LED lights, 18″ alloy wheels, Honda Sensing safety suite, and sporty RS styling.",
      price: "$0",
    },
    {
      name: "HONDA CITY RS 2022",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJIoME7fsPwQp3z83LZdGSW6f7pGYEKN80kjm-FURoeofeg9wvZ0o3VP9EDZAygfrzHzoHjFWCcBanRfmdzwnaXni9WfFJh3RxCEPJ9pm30-t2Scuz_Q_-93iBxFKQi8vhfb-3F8091iGL6P7iODrzYTqPWK6yzOi_fZhGlZU9VpMmVEuozDxbUz4BYw/s1024/2022_honda_city_rs_01.jpg",
      desc:
        "The 2022 Honda City RS features a 1.5L hybrid engine, e-CVT transmission, sporty RS styling, Honda Sensing safety suite, LED lighting, spacious cabin, advanced infotainment, and excellent fuel efficiency.",
      price: "$0",
    },
     {
      name: "HONDA CITY RS 2025",
      img: "https://i.ytimg.com/vi/RIJWAUXVfmA/maxresdefault.jpg",
      desc:
        "The 2025 Honda City RS packs a 1.0-liter VTEC turbo engine delivering 122 PS, CVT transmission, sporty RS styling, 16″ alloy wheels, LED lights, Apple CarPlay/Android Auto, and Honda Sensing safety.",
      price: "$0",
    },
  ],

  Suzuki: [
    {
      name: "SUZUKI ALTO HYBRID",
      img: "https://picture1.goo-net.com/7001300069/30250119/J/70013000693025011900100.jpg",
      desc: "The 2023 Suzuki Alto Hybrid is a compact and efficient city car, featuring a 1.0L hybrid engine that delivers impressive fuel economy (30-35 km/l). With a sleek design, advanced safety features, and modern infotainment options, it's perfect for budget-conscious drivers seeking a reliable, eco-friendly option.",
      price: "$0",
    },
    {
      name: "Suzuki Wagon R FX 2024",
      img: "https://d36dyyw8x5qpnf.cloudfront.net/photos_new/2024-11-02/suzuki-wagon-r-fx-mt-95968Terracotta%20Pink%20Metallic.jpg", 
      desc:
        "The Suzuki Wagon R FX 2025 is a compact and practical hatchback, offering a blend of efficiency and comfort. With its modern design, the car features a fuel-efficient engine, spacious interior, and advanced safety features. Ideal for city driving, it provides a smooth ride and easy maneuverability.",
      price: "$0",
    },
    {
      name: "Suzuki Wagon R FX 2023",
      img: "https://www.automobile-catalog.com/img/pictonorzw/suzuki/2022-suzuki-wagon-r-fx-4.jpg", 
      desc:
        "The Suzuki Wagon R FX 2025 is a compact and practical hatchback, offering a blend of efficiency and comfort. With its modern design, the car features a fuel-efficient engine, spacious interior, and advanced safety features. Ideal for city driving, it provides a smooth ride and easy maneuverability.",
      price: "$0",
    },
    
    {
      name: "SUZUKI EVERY PC",
      img: "https://cache2.pakwheels.com/system/car_generation_pictures/2935/original/Suzuki-Every-11th-Gen.jpg?1444115399",
      desc:
        "The Suzuki Every PC is a compact, practical Japanese microvan designed for efficient urban transport. It offers a spacious cabin, flexible cargo capacity, and excellent fuel economy. With its reliable engine, sliding doors, and easy maneuverability, the Every PC is ideal for small businesses, family use, and daily commuting.",
      price: "$0",
    },
    // … add 9 more entries here
  ],

  Nissan: [
    {
      name: "NISSAN ROOX HIGHWAY STAR X 2023",
      img: "https://picture1.goo-net.com/070/0700510/J/0700510A20250215G00203.jpg",
      desc:
        "The 2023 Nissan Roox Highway Star X is a 660 cc kei MPV with CVT, sliding doors, 20.8 km/L fuel economy, Intelligent Around-View Monitor, LED lights, and compact urban practicality.",
      price: "$0",
    },
    {
      name: "NISSAN DAYZ HIGHWAY STAR 2023",
      img: "https://global.nissannews.com/releases/release-fc1499a2382c4bfa3a3592916009232b/images/e10da7f375fded136d732c67bae7ece1f27d81dc",
      desc:
        "The 2023 Nissan Dayz Highway Star packs a 659 cc 3-cyl engine, CVT transmission, 20+ km/L fuel efficiency, 2WD/4WD options, alloy wheels, LED lighting, and compact, efficient urban design.",
      price: "$0",
    },
    {
      name: "NISSAN ALMERA VL",
      img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/th/vehicles/VLP/almera-my23/new/spec/vl-spec.jpg",
      desc:
        "The 2025 Nissan Almera VL packs a 1.0L turbocharged 3-cyl engine (100 PS / 152 Nm), X-Tronic CVT, leather interior, 8 airbags, LED lights, Apple CarPlay, and large 482 L boot.",
      price: "$0",
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
      price: "$0",
    },
    {
      name: "DIHATSU MOVE L",
      img: "https://images.kobemotor.com/images/v76460-ai002.jpg",
      desc:
        "The Daihatsu Move L is a compact kei car featuring a fuel-efficient engine, spacious tall-boy interior, practical urban maneuverability, reliable performance, and essential comfort features suitable for daily city driving.",
      price: "$0",
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
