// Data produk — sesuai data yang Anda berikan
const products = [
  {
    id: "sevel-stamina",
    name: "Sevel Stamina - 20 sachet",
    category: "Minuman Sehat",
    price: 115000,
    packageContent: "20 sachet @ 20gr",
    image: "assets/images/products/sevel-stamina.webp",
    description: "Sevel Stamina adalah minuman herbal siap seduh yang membantu memelihara stamina harian secara alami. Diracik dari 15 bahan pilihan Nusantara seperti pasak bumi dan jahe merah, ia hadir sebagai solusi lembut untuk tubuh yang mudah lelah. Rasakan energi stabil tanpa efek samping — dari pagi penuh semangat hingga sore yang tetap bertenaga. Vitalitas alami, dalam secangkir hangat.",
    benefits: [
      "Bangun pagi dengan semangat, bukan keterpaksaan",
      "Menyelesaikan hari tanpa rasa kelelahan di sore hari",
      "Menjaga performa fisik & mental di tengah rutinitas padat",
      "Merawat stamina jangka panjang"
    ],
    howToUse: [
      "Seduh 1 sachet dengan 150ml air hangat",
      "Aduk hingga rata dan larut sempurna",
      "Nikmati hangat di pagi hari atau saat butuh energi",
      "Dapat dikonsumsi 1-2 kali sehari sesuai kebutuhan"
    ],
    composition: [
      "Pasak Bumi: Membantu menjaga vitalitas alami tubuh",
      "Serbuk Kopi: Memberikan stimulasi lembut tanpa bikin gelisah",
      "Jahe Merah & Kayu Angin: Menghangatkan badan, melancarkan sirkulasi darah",
      "Buah Manggis & Mengkudu: Kaya antioksidan untuk pertahanan tubuh",
      "Jintan Hitam & Daun Kelor: Nutrisi lengkap penunjang stamina harian",
      "Daun Sendok & Bunga Krisan: Membantu menjaga keseimbangan metabolisme",
      "Daun Stevia: Pemanis alami tanpa gula berlebih",
      "Gula Kelapa & Aren: Sumber energi alami yang mudah diserap tubuh",
      "Krimer & Garam Kalsium: Tekstur lembut dan kandungan mineral penunjang"
    ]
  },
    {
    id: "sevel-stamina-10",
    name: "Sevel Stamina - 10 sachet ",
    category: "Minuman Sehat",
    price: 65000,
    packageContent: "10 sachet @ 20gr",
    image: "assets/images/products/sevel-stamina-10.webp",
    description: "Sevel Stamina adalah minuman herbal siap seduh yang membantu memelihara stamina harian secara alami. Diracik dari 15 bahan pilihan Nusantara seperti pasak bumi dan jahe merah, ia hadir sebagai solusi lembut untuk tubuh yang mudah lelah. Rasakan energi stabil tanpa efek samping — dari pagi penuh semangat hingga sore yang tetap bertenaga. Vitalitas alami, dalam secangkir hangat.",
    benefits: [
      "Bangun pagi dengan semangat, bukan keterpaksaan",
      "Menyelesaikan hari tanpa rasa kelelahan di sore hari",
      "Menjaga performa fisik & mental di tengah rutinitas padat",
      "Merawat stamina jangka panjang"
    ],
    howToUse: [
      "Seduh 1 sachet dengan 150ml air hangat",
      "Aduk hingga rata dan larut sempurna",
      "Nikmati hangat di pagi hari atau saat butuh energi",
      "Dapat dikonsumsi 1-2 kali sehari sesuai kebutuhan"
    ],
    composition: [
      "Pasak Bumi: Membantu menjaga vitalitas alami tubuh",
      "Serbuk Kopi: Memberikan stimulasi lembut tanpa bikin gelisah",
      "Jahe Merah & Kayu Angin: Menghangatkan badan, melancarkan sirkulasi darah",
      "Buah Manggis & Mengkudu: Kaya antioksidan untuk pertahanan tubuh",
      "Jintan Hitam & Daun Kelor: Nutrisi lengkap penunjang stamina harian",
      "Daun Sendok & Bunga Krisan: Membantu menjaga keseimbangan metabolisme",
      "Daun Stevia: Pemanis alami tanpa gula berlebih",
      "Gula Kelapa & Aren: Sumber energi alami yang mudah diserap tubuh",
      "Krimer & Garam Kalsium: Tekstur lembut dan kandungan mineral penunjang"
    ]
  },
    {
    id: "sevel-premium",
    name: "Sevel Premium",
    category: "Minuman Sehat",
    price: 80000,
    packageContent: "10 sachet @ 21gr",
    image: "assets/images/products/sevel-premium.webp",
    description: "Kopi 7 Elemen Premium atau Sevel Premium adalah harmoni sempurna dari tujuh bagian alam — biji, akar, batang, kulit, daun, bunga, dan buah — yang disatukan dalam secangkir kehangatan. Bayangkan secangkir kopi yang tidak hanya membangunkan tubuh, tapi juga menyembuhkan dari dalam. Diperkaya dengan Qusthul Hindi, rempah langka penjaga napas lega, menjadikannya lebih dari sekadar kopi: ini adalah ritual harian untuk tubuh yang bugar dan jiwa yang tenang.",
    benefits: [
      "Stamina tahan lama tanpa jantung berdebar, energi alami dari herbal pilihan",
      "Napas lega & ringan, Qusthul Hindi membantu meredakan sesak, batuk, dan asma ringan",
      "Pertahanan tubuh kuat, antioksidan tinggi dari manggis & herbal sinergis",
      "Lambung tetap nyaman, tanpa iritasi, aman diminum pagi hari sebelum sarapan",
      "Tidur lebih nyenyak, herbal adaptogen membantu menyeimbangkan ritme tubuh"
    ],
    howToUse: [
      "Seduh 1 sachet dengan 150ml air hangat",
      "Aduk hingga rata dan larut sempurna",
      "Nikmati hangat di pagi hari atau saat butuh energi",
      "Dapat dikonsumsi 1-2 kali sehari sesuai kebutuhan",
      "Aman untuk dikonsumsi rutin"
    ],
    composition: [
      "Kopi Robusta pilihan",
      "Krimer nabati (tanpa lemak hewani)",
      "Gula aren organik",
      "Qusthul Hindi (batang), penjaga saluran napas",
      "Pasak bumi (akar), penambah stamina alami",
      "Kulit manggis, sumber xanthone antioksidan",
      "Daun Stevia: Pemanis alami tanpa gula berlebih",
      "Jahe merah, kayu angin, bunga krisan, daun kelor",
      "Tanpa pengawet, tanpa pemanis buatan"
    ]
  },
    {
    id: "teh-adeni",
    name: "Teh Susu Rempah Adeni",
    category: "Minuman Sehat",
    price: 75000,
    packageContent: "10 sachet @ 18gr",
    image: "assets/images/products/teh-susu_adeni.webp",
    description: "Teh Susu Rempah Adeni adalah minuman hangat perpaduan teh, susu, dan rempah pilihan yang membantu menghangatkan tubuh secara alami. Diracik dari kayu manis, jahe, dan kapulaga, ia menjadi teman setia di pagi dingin atau malam yang melelahkan. Rasakan kehangatan yang menenangkan tenggorokan sekaligus meningkatkan daya tahan tubuh. Kenikmatan tradisional dalam setiap teguknya.",
    benefits: [
    "Menghangatkan tubuh secara alami saat cuaca dingin",
    "Meredakan rasa tidak nyaman di tenggorokan",
    "Membantu meningkatkan daya tahan tubuh harian",
    "Memberikan relaksasi alami setelah aktivitas padat"
    ],
    howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (80-90°C)",
    "Aduk hingga larut sempurna dan susu tercampur rata",
    "Nikmati hangat di pagi hari atau saat tubuh terasa kedinginan",
    "Dapat dinikmati tanpa tambahan gula karena sudah pas manisnya"
    ],
    composition: [
    "Kayu Manis – Menghangatkan tubuh & melancarkan sirkulasi darah",
    "Kapulaga – Meredakan batuk & menyegarkan saluran napas",
    "Jahe – Menghangatkan & meningkatkan daya tahan tubuh",
    "Lada Hitam – Melancarkan pernapasan & anti-inflamasi alami",
    "Cengkeh – Antibakteri & meredakan iritasi tenggorokan"
    ]
  },
    {
    id: "jannatee-cool",
    name: "Teh Jannatee Cool",
    category: "Minuman Sehat",
    price: 85000,
    packageContent: "20 kantong @ 2,5 gram",
    image: "assets/images/products/teh_jannatee_cool.webp",
    description: "Teh Jannatee Cool adalah minuman herbal penyejuk jiwa yang membantu menenangkan pikiran dan meredakan stres harian. Perpaduan daun mint, habbatussauda, dan zaitun menciptakan sensasi segar yang menyeimbangkan tubuh dan pikiran. Cocok dinikmati saat butuh ketenangan atau sebagai teman meditasi dan istirahat. Kesegaran alami untuk jiwa yang lebih damai.",
    benefits: [
    "Menenangkan pikiran dan meredakan stres harian",
    "Memberikan sensasi segar yang menyegarkan jiwa",
    "Membantu menjaga keseimbangan tubuh dan pikiran",
    "Mendukung relaksasi alami setelah aktivitas padat"
    ],
    howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (80-90°C)",
    "Diamkan 3-5 menit agar ekstrak herbal larut sempurna",
    "Nikmati hangat atau dinginkan untuk sensasi lebih segar",
    "Konsumsi 1-2 kali sehari, terutama saat butuh ketenangan"
    ],
    composition: [
    "Daun Mint – Menenangkan & memberikan sensasi segar",
    "Daun Bidara – Menyejukkan jiwa & pikiran",
    "Kayu Manis – Menghangatkan & melancarkan sirkulasi",
    "Kapulaga – Menjaga kesehatan pencernaan",
    "Daun Tin – Kaya nutrisi & antioksidan",
    "Habbatussauda – Meningkatkan daya tahan tubuh",
    "Daun Zaitun – Antioksidan tinggi & kesehatan jantung"
    ]
  },

  {
  id: "teh-jannatee-hot",
  name: "Teh Jannatee Hot",
  category: "Minuman Sehat",
  price: 85000,
  packageContent: "20 kantong @ 2,5 gr",
  image: "assets/images/products/teh_jannatee_hot.webp",
  description: "Teh Jannatee Hot adalah minuman herbal penghangat alami yang membantu menjaga stamina tubuh di cuaca dingin. Diracik dari cabai jawa, cengkih, dan kayu angin, ia memberikan kehangatan yang menenangkan sekaligus meningkatkan sirkulasi darah. Rasakan sensasi hangat yang merambat ke seluruh tubuh tanpa rasa terbakar berlebihan. Kekuatan rempah Nusantara dalam secangkir ketenangan.",
  benefits: [
    "Menghangatkan tubuh secara alami saat cuaca dingin",
    "Meningkatkan sirkulasi darah dan menjaga stamina",
    "Meredakan rasa tidak nyaman akibat kedinginan",
    "Memberikan sensasi hangat yang menenangkan tanpa efek samping"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (90-100°C)",
    "Diamkan 3-5 menit hingga warna teh berubah kecokelatan",
    "Nikmati hangat saat pagi hari atau saat tubuh terasa kedinginan",
    "Dapat dikonsumsi 1-2 kali sehari untuk menjaga kehangatan tubuh"
  ],
  composition: [
    "Biji Kedawung – Menghangatkan tubuh & menjaga stamina",
    "Cabai Jawa – Meningkatkan sirkulasi darah & kehangatan alami",
    "Cengkih – Antibakteri & meredakan rasa tidak nyaman",
    "Kayu Angin – Menghangatkan & melancarkan pernapasan",
    "Adas – Menenangkan pencernaan & aroma yang menenangkan"
  ]
},

{
  id: "teh-centella",
  name: "Centella Teh Sinergi",
  category: "Minuman Sehat",
  price: 70000,
  packageContent: "24 kantong @ 2 gr",
  image: "assets/images/products/centella_teh.webp",
  description: "Centella Teh Sinergi adalah perpaduan harmonis pegagan, teh hijau, dan rempah pilihan yang membantu menjaga kesehatan kulit dan metabolisme tubuh. Formulasi sinergis ini bekerja menyeluruh untuk mendukung detoks alami dan kebugaran harian. Rasakan kesegaran teh hijau yang dipadu kebaikan pegagan untuk kulit yang lebih cerah dan tubuh yang ringan. Kesehatan menyeluruh dalam secangkir kebiasaan baru.",
  benefits: [
    "Mendukung kesehatan kulit dari dalam untuk tampilan lebih cerah",
    "Membantu menjaga metabolisme tubuh dan proses detoks alami",
    "Memberikan energi ringan tanpa efek gelisah berlebihan",
    "Mendukung pencernaan sehat berkat kombinasi herbal sinergis"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (80-85°C)",
    "Diamkan 2-3 menit hingga ekstrak herbal larut sempurna",
    "Nikmati hangat di pagi hari sebagai ritual kesehatan harian",
    "Konsumsi 1-2 kali sehari untuk hasil optimal dalam 2-4 minggu"
  ],
  composition: [
    "Pegagan (Centella) – Menyehatkan kulit & mendukung sirkulasi darah",
    "Teh Hijau – Kaya antioksidan & membantu metabolisme",
    "Jati Belanda – Mendukung detoks alami & keseimbangan berat badan",
    "Jahe Merah – Menghangatkan tubuh & melancarkan pencernaan"
  ]
},

{
  id: "matcha-latte",
  name: "Matcha Latte",
  category: "Minuman Sehat",
  price: 65000,
  packageContent: "10 sachet @29 gram",
  image: "assets/images/products/hania_matcha_latte.webp",
  description: "Matcha Latte adalah minuman serbuk teh hijau premium yang dipadukan dengan susu creamy untuk energi alami tanpa rasa gelisah. Kaya antioksidan dan L-theanine, membantu meningkatkan fokus sekaligus menenangkan pikiran. Rasakan sensasi creamy yang lembut dengan aroma teh hijau yang khas. Kesegaran Jepang dalam setiap teguknya.",
  benefits: [
    "Memberikan energi stabil tanpa efek gelisah berlebihan",
    "Kaya antioksidan untuk melawan radikal bebas",
    "Meningkatkan fokus & konsentrasi berkat L-theanine",
    "Mendukung metabolisme tubuh secara alami"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (80-85°C)",
    "Aduk hingga larut sempurna dan berwarna hijau kehijauan",
    "Nikmati hangat di pagi hari atau saat butuh boost energi",
    "Dapat disajikan dingin dengan es batu untuk sensasi lebih segar"
  ],
  composition: [
    "Gula – Sumber energi cepat yang mudah diserap",
    "Krimer – Memberikan tekstur creamy yang lembut",
    "Susu Skim Bubuk – Kaya kalsium tanpa lemak berlebihan",
    "Ekstrak Teh Hijau – Antioksidan tinggi & penambah energi alami"
  ]
},
{
  id: "hni-coffee",
  name: "HNI Coffee",
  category: "Minuman Sehat",
  price: 125000,
  packageContent: "20 sachet @27 gram",
  image: "assets/images/products/coffee_hni.webp",
  description: "HNI Coffee adalah kopi premium yang diperkaya habbatusauda dan susu kambing untuk energi yang menyehatkan. Perpaduan kopi instan berkualitas dengan madu serbuk menciptakan rasa yang kaya dan aroma yang menggoda. Diformulasikan khusus untuk memberikan stamina alami tanpa efek samping berlebihan. Kopi sehat untuk menemani hari produktif Anda.",
  benefits: [
    "Memberikan energi alami untuk aktivitas sepanjang hari",
    "Habbatusauda mendukung kesehatan tubuh secara menyeluruh",
    "Susu kambing kaya nutrisi dan mudah dicerna",
    "Madu serbuk memberikan rasa manis alami tanpa gula berlebihan"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (90°C)",
    "Aduk hingga larut sempurna dan beraroma harum",
    "Nikmati hangat di pagi hari atau saat butuh tambahan energi",
    "Dapat dikonsumsi 1-2 kali sehari sesuai kebutuhan"
  ],
  composition: [
    "Krimer Nabati – Memberikan tekstur creamy yang lembut",
    "Gula – Sumber energi cepat",
    "Kopi Instan – Memberikan aroma & cita rasa kopi khas",
    "Ekstrak Habbatusauda – Mendukung kesehatan tubuh alami",
    "Madu Serbuk – Pemanis alami dengan nutrisi tambahan",
    "Susu Kambing – Kaya nutrisi & mudah dicerna",
    "Coklat – Memberikan rasa yang kaya & aroma menggoda"
  ]
},
{
  id: "realco-cappuccino",
  name: "Hania Realco Cappuccino Less Sugar",
  category: "Minuman Sehat",
  price: 50000,
  packageContent: "10 sachet @22 gram",
  image: "assets/images/products/hania_realco.webp",
  description: "Hania Realco Cappuccino Less Sugar adalah minuman kopi premium dengan gula aren alami dan kolagen untuk kesehatan kulit. Diformulasikan dengan kadar gula rendah namun tetap nikmat, cocok untuk gaya hidup sehat modern. Rasakan kelezatan cappuccino yang creamy dengan manfaat ganda untuk tubuh dan kulit. Kenikmatan tanpa rasa bersalah.",
  benefits: [
    "Kolagen mendukung kesehatan kulit agar lebih kenyal & cerah",
    "Gula aren alami memberikan energi stabil tanpa spike gula darah",
    "Kadar gula rendah cocok untuk diet sehat & diabetesi ringan",
    "Harga terjangkau tanpa kompromi pada kualitas rasa"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (85-90°C)",
    "Aduk hingga larut sempurna dan berwarna cokelat creamy",
    "Nikmati hangat di pagi hari atau sebagai teman santai",
    "Dapat disajikan dengan susu tambahan untuk rasa lebih creamy"
  ],
  composition: [
    "Kopi – Memberikan cita rasa kopi yang khas",
    "Gula Aren – Pemanis alami dengan nutrisi tambahan",
    "Kolagen – Mendukung kesehatan kulit & sendi",
    "Krimer – Memberikan tekstur creamy yang lembut"
  ]
},
{
  id: "realco-premium",
  name: "Hania Realco Black Coffee Premium Blend",
  category: "Minuman Sehat",
  price: 95000,
  packageContent: "200 gram",
  image: "assets/images/products/hania_realco_premium.webp",
  description: "Hania Realco Black Coffee Premium Blend adalah kopi hitam 100% dari biji kopi pilihan perpaduan Arabica dan Robusta. Tanpa campuran bahan lain, memberikan cita rasa autentik yang kaya dan aroma yang menggoda. Diracik khusus untuk pecinta kopi murni yang menghargai keaslian rasa. Pengalaman kopi premium untuk para penikmat sejati.",
  benefits: [
    "100% biji kopi pilihan tanpa campuran bahan lain",
    "Perpaduan Arabica & Robusta menciptakan cita rasa seimbang",
    "Memberikan energi alami tanpa tambahan gula atau krimer",
    "Aroma khas kopi hitam yang menggoda dan menyegarkan"
  ],
  howToUse: [
    "Giling 1 sendok makan biji kopi (8g) hingga halus",
    "Tuangkan ke dalam cangkir dan tambahkan 180ml air panas (90°C)",
    "Aduk rata dan diamkan 4-5 menit hingga ekstrak kopi larut sempurna",
    "Nikmati hangat tanpa gula atau tambahkan pemanis sesuai selera"
  ],
  composition: [
    "100% Biji Kopi Arabica – Memberikan cita rasa halus & aroma floral",
    "100% Biji Kopi Robusta – Memberikan kekuatan & body kopi yang khas"
  ]
},
{
  id: "realco-robusta",
  name: "Hania Realco Black Coffee Fine Robusta",
  category: "Minuman Sehat",
  price: 50000,
  packageContent: "10 sachet @10 gram",
  image: "assets/images/products/hania_realco_robusta.webp",
  description: "Hania Realco Black Coffee Fine Robusta adalah kopi bubuk 100% dari biji Robusta pilihan yang memberikan cita rasa kuat dan energi maksimal. Dengan karakter khas Robusta yang bold dan aroma yang menggoda, kopi ini cocok untuk pecinta kopi hitam yang menyukai sensasi kuat di setiap teguknya. Tanpa campuran bahan lain, keaslian rasa terjaga sempurna. Kekuatan alami untuk memulai hari dengan semangat.",
  benefits: [
    "100% kopi bubuk Robusta tanpa campuran bahan lain",
    "Memberikan energi maksimal untuk aktivitas padat",
    "Cita rasa kuat dan bold khas kopi Robusta",
    "Praktis dalam kemasan sachet siap seduh"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (90-95°C)",
    "Aduk hingga larut sempurna dan beraroma harum",
    "Nikmati hangat tanpa gula untuk cita rasa autentik",
    "Dapat ditambahkan pemanis atau susu sesuai selera"
  ],
  composition: [
    "100% Biji Kopi Robusta – Memberikan cita rasa kuat & energi maksimal"
  ]
},

  {
  id: "realco-latte20",
  name: "Hania Realco Latte - 20 sachet",
  category: "Minuman Sehat",
  price: 130000,
  packageContent: "20 sachet @ 22 gram",
  image: "assets/images/products/realco-latte-20.webp",
  description: "Hania Realco Latte adalah minuman kopi premium dengan gula aren alami dan kolagen untuk kesehatan kulit yang menyeluruh. Perpaduan sempurna antara cita rasa latte yang creamy dan manfaat ganda untuk tubuh. Rasakan kelezatan kopi yang lembut dengan sensasi hangat yang menenangkan. Kenikmatan premium untuk ritual harian Anda.",
  benefits: [
    "Kolagen mendukung kesehatan kulit agar lebih kenyal & cerah",
    "Gula aren alami memberikan energi stabil tanpa spike gula darah",
    "Tekstur creamy yang lembut dan nikmat di setiap teguk",
    "Cita rasa latte premium yang memanjakan lidah"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (85-90°C)",
    "Aduk hingga larut sempurna dan berwarna cokelat creamy",
    "Nikmati hangat di pagi hari atau sebagai teman santai",
    "Dapat disajikan dengan es batu untuk sensasi lebih segar"
  ],
  composition: [
    "Kopi – Memberikan cita rasa kopi yang khas",
    "Gula Aren – Pemanis alami dengan nutrisi tambahan",
    "Kolagen – Mendukung kesehatan kulit & sendi",
    "Krimer – Memberikan tekstur creamy yang lembut"
  ]
},

  {
  id: "realco-latte10",
  name: "Hania Realco Latte - 10 sachet",
  category: "Minuman Sehat",
  price: 65000,
  packageContent: "10 sachet @ 22 gram",
  image: "assets/images/products/realco-latte-10.webp",
  description: "Hania Realco Latte adalah minuman kopi premium dengan gula aren alami dan kolagen untuk kesehatan kulit yang menyeluruh. Perpaduan sempurna antara cita rasa latte yang creamy dan manfaat ganda untuk tubuh. Rasakan kelezatan kopi yang lembut dengan sensasi hangat yang menenangkan. Kenikmatan premium untuk ritual harian Anda.",
  benefits: [
    "Kolagen mendukung kesehatan kulit agar lebih kenyal & cerah",
    "Gula aren alami memberikan energi stabil tanpa spike gula darah",
    "Tekstur creamy yang lembut dan nikmat di setiap teguk",
    "Cita rasa latte premium yang memanjakan lidah"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (85-90°C)",
    "Aduk hingga larut sempurna dan berwarna cokelat creamy",
    "Nikmati hangat di pagi hari atau sebagai teman santai",
    "Dapat disajikan dengan es batu untuk sensasi lebih segar"
  ],
  composition: [
    "Kopi – Memberikan cita rasa kopi yang khas",
    "Gula Aren – Pemanis alami dengan nutrisi tambahan",
    "Kolagen – Mendukung kesehatan kulit & sendi",
    "Krimer – Memberikan tekstur creamy yang lembut"
  ]
},
  
{
  id: "realco-ginseng",
  name: "Hania Realco Ginseng Coffee",
  category: "Minuman Sehat",
  price: 65000,
  packageContent: "10 sachet @ 23 gram",
  image: "assets/images/products/realco-ginseng_coffee.webp",
  description: "Hania Realco Ginseng Coffee adalah kopi premium yang diperkaya ekstrak ginseng untuk stamina dan vitalitas tubuh secara alami. Kombinasi gula aren, kolagen, dan ginseng menciptakan formula sinergis untuk energi tahan lama tanpa efek samping. Rasakan sensasi hangat yang merambat ke seluruh tubuh dengan cita rasa kopi yang kaya. Stamina alami untuk hari yang lebih produktif.",
  benefits: [
    "Ekstrak ginseng membantu menjaga stamina & vitalitas alami",
    "Kolagen mendukung kesehatan kulit dari dalam",
    "Gula aren memberikan energi stabil tanpa ketergantungan",
    "Formula sinergis untuk energi tahan lama sepanjang hari"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (90°C)",
    "Aduk hingga larut sempurna dan beraroma harum",
    "Nikmati hangat di pagi hari atau saat butuh tambahan energi",
    "Konsumsi 1-2 kali sehari untuk hasil optimal"
  ],
  composition: [
    "Kopi – Memberikan cita rasa kopi yang khas",
    "Gula Aren – Pemanis alami dengan nutrisi tambahan",
    "Krimer – Memberikan tekstur creamy yang lembut",
    "Kolagen – Mendukung kesehatan kulit & sendi",
    "Ekstrak Ginseng – Meningkatkan stamina & vitalitas alami"
  ]
},

{
  id: "fibdrink",
  name: "Hania Juicy FibDrink",
  category: "Minuman Sehat",
  price: 85000,
  packageContent: "10 sachet @ 9 gram",
  image: "assets/images/products/hania_juicy_fibdrink.webp",
  description: "Hania Juicy FibDrink adalah minuman serbuk rasa aneka buah yang kaya serat untuk mendukung kesehatan pencernaan dan metabolisme tubuh. Diformulasikan dengan rasa buah yang menyegarkan dan tinggi serat untuk membantu proses detoks alami. Rasakan kesegaran buah-buahan dalam setiap teguknya yang membantu tubuh tetap ringan dan sehat. Segar, sehat, dan menyenangkan.",
  benefits: [
    "Kaya serat untuk mendukung kesehatan pencernaan",
    "Membantu proses detoks alami dan metabolisme tubuh",
    "Rasa buah yang menyegarkan dan nikmat",
    "Membantu menjaga berat badan ideal secara alami"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air dingin (suhu 8°C)",
    "Aduk rata hingga serbuk larut sempurna",
    "Nikmati segar sebagai teman santai atau setelah makan",
    "Konsumsi 1-2 kali sehari untuk hasil optimal"
  ],
  composition: [
    "Serat Larut – Mendukung kesehatan pencernaan",
    "Ekstrak Buah Alami – Memberikan rasa buah yang menyegarkan",
    "Vitamin C – Antioksidan alami untuk daya tahan tubuh",
    "Prebiotik – Mendukung kesehatan bakteri baik dalam usus"
  ]
},

{
  id: "fibdrink-lemon",
  name: "Hania Juicy FibDrink Lemon",
  category: "Minuman Sehat",
  price: 85000,
  packageContent: "10 sachet @ 9 gram",
  image: "assets/images/products/hania_juicy_fibdrink_lemon.webp",
  description: "Hania Juicy FibDrink Lemon adalah minuman serbuk rasa lemon yang kaya serat untuk mendukung kesehatan pencernaan dan detoks alami. Dengan kandungan Psyllium Husk 40,5% dan pemanis alami stevia, membantu menjaga berat badan ideal tanpa rasa bersalah. Rasakan kesegaran lemon yang menyegarkan dengan manfaat serat tinggi untuk tubuh yang lebih ringan. Segar, sehat, dan rendah kalori.",
  benefits: [
    "Kaya serat Psyllium Husk untuk mendukung kesehatan pencernaan",
    "Pemanis alami stevia & eritritol, aman untuk diet rendah gula",
    "Membantu proses detoks alami dan metabolisme tubuh",
    "Rasa lemon segar yang menyegarkan dan nikmat"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air dingin (suhu 8°C)",
    "Aduk rata hingga serbuk larut sempurna",
    "Nikmati segar sebagai teman santai atau setelah makan",
    "Konsumsi 1 sachet per hari. Hindari konsumsi berlebihan."
  ],
  warning: "Konsumsi berlebihan dapat menyebabkan efek laksatif (mencret).",
  composition: [
    "Psyllium Husk (40,5%) – Serat tinggi untuk pencernaan sehat",
    "Pemanis Alami (Xilitol, Eritritol) – Rasa manis tanpa kalori berlebihan",
    "Inulin – Prebiotik untuk kesehatan usus",
    "Jeruk Lemon Bubuk (6,38%) – Vitamin C & rasa segar alami",
    "Fruktosa dengan Sulfit – Pemanis alami dengan pengawet makanan",
    "Enzim Papain – Membantu pencernaan protein",
    "Ekstrak Mint – Menyegarkan napas & menenangkan perut",
    "Wortel Bubuk (5%) – Kaya beta karoten & vitamin A",
    "Lidah Buaya Bubuk (4,75%) – Menenangkan saluran pencernaan",
    "Daun Ungu – Mendukung kesehatan pembuluh darah",
    "Jeruk Nipis Bubuk – Menambah kesegaran & vitamin C",
    "Glikosida Steviol (Stevia) – Pemanis alami tanpa gula"
  ]
},
{
  id: "gluta-juicy-drink",
  name: "Hania Gluta Juicy Drink",
  category: "Minuman Sehat",
  price: 185000,
  packageContent: "10 sachet @ 15 gram",
  image: "assets/images/products/hania_gluta.webp",
  description: "Hania Gluta Juicy Drink adalah minuman serbuk rasa aneka buah yang diperkaya kolagen untuk kesehatan kulit yang menyeluruh. Kombinasi rasa buah yang menyegarkan dengan manfaat kolagen membantu menjaga kekenyalan dan kecerahan kulit dari dalam. Rasakan kesegaran buah-buahan dengan nutrisi yang mendukung kulit sehat bercahaya. Kecantikan alami dalam setiap teguknya.",
  benefits: [
    "Kolagen mendukung kekenyalan & kecerahan kulit",
    "Rasa buah aneka yang menyegarkan dan nikmat",
    "Membantu menjaga kesehatan kulit dari dalam",
    "Praktis untuk dikonsumsi setiap hari"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air dingin (suhu 8°C)",
    "Aduk rata hingga serbuk larut sempurna",
    "Nikmati segar sebagai teman santai atau setelah makan",
    "Konsumsi 1-2 kali sehari untuk hasil optimal"
  ],
  composition: [
    "Kolagen – Mendukung kekenyalan & elastisitas kulit",
    "Ekstrak Buah Alami – Memberikan rasa segar & vitamin",
    "Vitamin C – Antioksidan untuk kulit cerah",
    "Pemanis Alami – Rasa manis tanpa kalori berlebihan"
  ]
},
{
  id: "sweetevi",
  name: "SweetEvi",
  category: "Minuman Sehat",
  price: 60000,
  packageContent: "Netto: 10 ml",
  image: "assets/images/products/pemanis_sweetevi.webp",
  description: "SweetEvi adalah pemanis alami 100% dari ekstrak daun stevia yang memberikan rasa manis tanpa kalori dan aman untuk diabetesi. Tidak mengandung gula, tidak meningkatkan kadar gula darah, dan bebas efek samping. Cukup 1-2 tetes untuk memberikan rasa manis alami pada minuman atau makanan Anda. Manis sehat tanpa rasa bersalah.",
  benefits: [
    "100% daun stevia, tanpa campuran bahan kimia",
    "Nol kalori dan aman untuk penderita diabetes",
    "Tidak meningkatkan kadar gula darah",
    "Praktis hanya 1-2 tetes untuk rasa manis optimal"
  ],
  howToUse: [
    "Kocok botol sebelum digunakan",
    "Tambahkan 1-2 tetes ke dalam minuman atau makanan",
    "Sesuaikan jumlah tetesan dengan tingkat kemanisan yang diinginkan",
    "Cocok untuk kopi, teh, jus, atau masakan"
  ],
  composition: [
    "Daun Stevia Cair (100%) – Pemanis alami tanpa kalori"
  ]
},
{
  id: "goat-milk",
  name: "Etta Goat Milk",
  category: "Minuman Sehatt",
  price: 75000,
  packageContent: "10 sachet @ 25 gram",
  image: "assets/images/products/etta_goatmilk.webp",
  description: "Etta Goat Milk adalah susu kambing bubuk premium yang lebih mudah dicerna dan kaya nutrisi untuk mendukung kesehatan tubuh menyeluruh. Kandungan kalsium, protein, dan vitamin B2 yang tinggi baik untuk pertumbuhan anak dan menjaga kesehatan tulang dewasa. Rasakan kelezatan susu kambing yang gurih dengan manfaat nutrisi lengkap. Nutrisi alami untuk seluruh keluarga.",
  benefits: [
    "Lebih mudah dicerna dibanding susu sapi",
    "Kaya kalsium untuk kesehatan tulang & gigi",
    "Tinggi protein untuk mendukung pertumbuhan",
    "Baik dikonsumsi semua usia, anak hingga dewasa"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air hangat (60-70°C)",
    "Aduk hingga larut sempurna dan berwarna putih creamy",
    "Nikmati hangat di pagi atau malam hari",
    "Dapat dikonsumsi 1-2 kali sehari"
  ],
  composition: [
    "Susu Kambing Etawa Bubuk – Kaya nutrisi & mudah dicerna",
    "Gula – Memberikan rasa manis alami"
  ]
},
{
  id: "goat-milk-aren",
  name: "Etta Goat Milk Aren",
  category: "Minuman Sehat",
  price: 80000,
  packageContent: "10 sachet @ 25 gram",
  image: "assets/images/products/etta_susu_kambing_aren.webp",
  description: "Etta Goat Milk Aren adalah susu kambing bubuk premium yang dipadukan dengan gula aren alami untuk rasa yang lebih nikmat dan energi yang stabil. Kandungan susu kambing 40% memberikan nutrisi lengkap, sementara gula aren memberikan manfaat mineral tambahan. Rasakan kehangatan dan kelezatan kombinasi susu kambing dengan aroma khas gula aren. Nutrisi lengkap dengan cita rasa tradisional.",
  benefits: [
    "Kombinasi susu kambing & gula aren untuk nutrisi lengkap",
    "Gula aren memberikan energi stabil tanpa spike gula darah",
    "Kaya kalsium & protein untuk kesehatan tulang",
    "Aroma khas aren yang menggugah selera"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air hangat (60-70°C)",
    "Aduk hingga larut sempurna dan berwarna cokelat creamy",
    "Nikmati hangat di pagi atau malam hari",
    "Dapat dikonsumsi 1-2 kali sehari"
  ],
  composition: [
    "Susu Kambing Etawa Bubuk (49.2%) – Kaya nutrisi & mudah dicerna",
    "Krimer Bubuk (45.5%) – Memberikan tekstur creamy",
    "Gula Aren (5.4%) – Pemanis alami dengan mineral tambahan"
  ]
},
{
  id: "goat-milk-ck",
  name: "Etta Goat Milk Cokelat",
  category: "Minuman Sehat",
  price: 85000,
  packageContent: "10 sachet @ 25 gram",
  image: "assets/images/products/etta_susu_kambing_cokelat.webp",
  description: "Etta Goat Milk Cokelat adalah susu kambing bubuk premium dengan rasa cokelat yang lezat untuk menambah kenikmatan konsumsi susu harian. Tetap mempertahankan manfaat nutrisi susu kambing yang kaya kalsium dan protein, dengan tambahan cita rasa cokelat yang disukai anak-anak dan dewasa. Rasakan kelezatan cokelat yang menyatu sempurna dengan gurihnya susu kambing. Sehat dan nikmat dalam satu gelas.",
  benefits: [
    "Rasa cokelat yang disukai anak-anak & dewasa",
    "Tetap kaya nutrisi susu kambing yang mudah dicerna",
    "Kaya kalsium untuk kesehatan tulang & gigi",
    "Membuat minum susu jadi lebih menyenangkan"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air hangat (60-70°C)",
    "Aduk hingga larut sempurna dan berwarna cokelat",
    "Nikmati hangat di pagi atau malam hari",
    "Dapat disajikan dingin dengan es batu"
  ],
  composition: [
    "Susu Kambing Etawa Bubuk – Kaya nutrisi & mudah dicerna",
    "Krimer Bubuk – Memberikan tekstur creamy",
    "Cokelat – Memberikan rasa & aroma yang lezat"
  ]
},
{
  id: "susu-kambing-fc",
  name: "Hania Susu Kambing Full Cream",
  category: "Minuman Sehat",
  price: 75000,
  packageContent: "10 pouches @ 20 gram",
  image: "assets/images/products/hania_goatmilk.webp",
  description: "Hania Susu Kambing Full Cream adalah susu kambing bubuk 100% tanpa campuran bahan lain, memberikan nutrisi alami yang lengkap untuk kesehatan tubuh menyeluruh. Kaya akan kalsium, protein, dan vitamin B2 yang baik untuk pertumbuhan anak dan menjaga kesehatan tulang dewasa. Rasakan kemurnian susu kambing yang gurih dengan semua manfaat nutrisinya yang utuh. Kemurnian alami untuk kesehatan optimal.",
  benefits: [
    "100% susu kambing bubuk tanpa campuran",
    "Kaya kalsium untuk kesehatan tulang & gigi",
    "Tinggi protein untuk mendukung pertumbuhan",
    "Baik dikonsumsi oleh anak-anak dan dewasa"
  ],
  howToUse: [
    "Seduh 1 pouch dengan 150ml air hangat (60-70°C)",
    "Aduk hingga larut sempurna dan berwarna putih creamy",
    "Nikmati hangat di pagi atau malam hari",
    "Dapat dikonsumsi 1-2 kali sehari"
  ],
  composition: [
    "Susu Kambing Bubuk (100%) – Kemurnian nutrisi alami"
  ]
},
{
  id: "susu-kambing-skim",
  name: "Hania Susu Kambing Skim",
  category: "Minuman Sehat",
  price: 100000,
  packageContent: "10 pouches @ 20 gram",
  image: "assets/images/products/hania_susu_kambing_skim.webp",
  description: "Hania Susu Kambing Skim adalah susu kambing bubuk rendah lemak tanpa penambahan gula, cocok untuk diet sehat dan menjaga berat badan ideal. Tetap kaya protein dan kalsium untuk mendukung kesehatan tulang tanpa khawatir lemak berlebihan. Rasakan nutrisi lengkap susu kambing dengan formula yang lebih ringan untuk tubuh. Sehat tanpa kompromi.",
  benefits: [
    "Rendah lemak, cocok untuk diet sehat",
    "Tanpa penambahan gula, aman untuk diabetesi",
    "Tinggi protein untuk menjaga massa otot",
    "Kaya kalsium untuk kesehatan tulang"
  ],
  howToUse: [
    "Seduh 1 pouch dengan 150ml air hangat (60-70°C)",
    "Aduk hingga larut sempurna",
    "Nikmati hangat di pagi hari atau setelah olahraga",
    "Dapat dikonsumsi 1-2 kali sehari"
  ],
  composition: [
    "Susu Kambing Bubuk (100%) – Rendah lemak, tinggi protein"
  ]
},
{
  id: "susu-sapi-fc",
  name: "Hania Susu Sapi Full Cream",
  category: "Minuman Sehat",
  price: 75000,
  packageContent: "10 sachet @ 25 gram",
  image: "assets/images/products/hania_susu_sapi-fcream.webp",
  description: "Hania Susu Sapi Full Cream adalah susu bubuk full cream 100% yang memberikan nutrisi lengkap untuk mendukung kesehatan tubuh dan pertumbuhan optimal. Kaya akan kalsium, protein, dan vitamin D untuk kesehatan tulang, gigi, dan daya tahan tubuh. Rasakan kelezatan susu full cream yang creamy dan gurih untuk memenuhi kebutuhan nutrisi harian keluarga. Nutrisi lengkap untuk hari yang lebih berenergi.",
  benefits: [
    "100% susu sapi full cream tanpa campuran",
    "Kaya kalsium & vitamin D untuk kesehatan tulang",
    "Tinggi protein untuk mendukung pertumbuhan & perbaikan sel",
    "Memberikan energi untuk aktivitas sepanjang hari"
  ],
  howToUse: [
    "Seduh 1 sachet dengan 150ml air hangat (60-70°C)",
    "Aduk hingga larut sempurna dan berwarna putih creamy",
    "Nikmati hangat di pagi atau malam hari",
    "Dapat dikonsumsi 1-2 kali sehari"
  ],
  composition: [
    "Susu Sapi Full Cream (100%) – Nutrisi lengkap untuk kesehatan"
  ]
},

{
  id: "hni-health",
  name: "HNI Health",
  category: "Madu Herbal",
  price: 80000,
  packageContent: "Netto: 250ml",
  image: "assets/images/products/madu_hni_health.webp",
  description: "HNI Health adalah formula lengkap 21 bahan herbal alami dalam madu untuk memelihara kesehatan tubuh menyeluruh. Menggabungkan sari kurma, royal jelly, habbatussauda, dan ekstrak herbal pilihan sebagai nutrisi harian keluarga. Mendukung stamina, daya tahan tubuh, dan keseimbangan metabolisme secara alami. Konsumsi rutin untuk tubuh yang lebih bugar dan vitalitas optimal setiap hari.",
  benefits: [
    "Memelihara kesehatan tubuh secara menyeluruh",
    "Meningkatkan stamina dan daya tahan tubuh",
    "Kaya nutrisi dari 21 bahan herbal alami",
    "Mendukung keseimbangan metabolisme harian"
  ],
  howToUse: [
    "Dewasa: 2-3 x 3 sdm per hari",
    "Anak-anak: 2-3 x 3 sdt per hari"
  ],
  composition: [
    "Sari Kurma – Sumber energi alami & kaya nutrisi",
    "Madu Alami – Antibakteri & penambah stamina",
    "Royal Jelly – Vitalitas & kesehatan kulit",
    "Bee Polen – Protein & vitamin untuk daya tahan",
    "Bayam Merah – Kaya zat besi & antioksidan",
    "Wortel – Vitamin A untuk kesehatan mata",
    "Beras Hitam – Antioksidan & serat tinggi",
    "Rosella Ungu – Menjaga kesehatan jantung",
    "Habbatussauda – Mendukung sistem kekebalan",
    "Zaitun – Antioksidan & baik untuk jantung",
    "Blueberry – Kesehatan otak & penglihatan",
    "Blackberry – Antioksidan tinggi",
    "Daun Ashitaba – Regenerasi sel & metabolisme",
    "Curcuma – Anti-inflamasi alami",
    "Kulit Manggis – Xanthone untuk antioksidan",
    "Daun Sirsak – Mendukung kesehatan sel",
    "Plum Hitam – Serat & pencernaan sehat",
    "Anggur Hitam – Antioksidan & kesehatan jantung",
    "Spirulina – Superfood nutrisi lengkap",
    "Daun Stevia – Pemanis alami tanpa kalori",
    "Meniran – Detoks alami & kesehatan hati"
  ]
},
{
  id: "zidavit",
  name: "Zidavit",
  category: "Madu Herbal",
  price: 80000,
  packageContent: "Netto: 250 gr",
  image: "assets/images/products/madu_zidavit.webp",
  description: "Zidavit adalah madu herbal khusus yang membantu memelihara kesehatan dengan menambah zat besi alami dan meningkatkan nafsu makan. Diperkaya ekstrak belut, temulawak, dan pegagan untuk mendukung tumbuh kembang optimal anak. Formula lembut yang disukai anak dengan rasa jeruk yang menyegarkan. Solusi alami untuk anak yang susah makan dan butuh tambahan nutrisi.",
  benefits: [
    "Membantu menambah zat besi alami dalam tubuh",
    "Meningkatkan nafsu makan anak secara alami",
    "Mendukung tumbuh kembang optimal",
    "Mengandung ekstrak herbal penambah nutrisi"
  ],
  howToUse: [
    "Usia 2-3 thn: 2 x 1 sdt sehari",
    "Usia 4-12 thn: 2-3 x 2 sdm sehari"
  ],
  composition: [
    "Mel Depuratum (Madu Murni) – Sumber nutrisi alami",
    "Anguila Bicolor Extract (Ekstrak Belut) – Kaya protein & zat besi",
    "Curcuma Xanthoriza (Temulawak) – Meningkatkan nafsu makan",
    "Centella Asiatica (Pegagan) – Mendukung perkembangan otak",
    "Orange Aroma – Rasa jeruk yang disukai anak"
  ]
},
{
  id: "fitago",
  name: "Fitago",
  category: "Madu Herbal",
  price: 65000,
  packageContent: "Netto: 250 gram",
  image: "assets/images/products/madu_fitago.webp",
  description: "Fitago adalah madu herbal sinergis yang membantu memelihara daya tahan tubuh dengan kombinasi 13 bahan alami pilihan. Mengandung madu murni, kurma, habbatussauda, dan ekstrak herbal untuk perlindungan alami dari dalam. Rasakan manfaat lengkap dalam satu sendok makan untuk tubuh yang lebih kuat menghadapi aktivitas padat. Teman sehat untuk keluarga aktif sepanjang hari.",
  benefits: [
    "Membantu memelihara daya tahan tubuh",
    "Kaya antioksidan dari ekstrak herbal alami",
    "Mendukung stamina harian tanpa efek samping",
    "Formula sinergis 13 bahan herbal pilihan"
  ],
  howToUse: [
    "Konsumsi 1-2 sendok makan setiap pagi",
    "Dapat diminum langsung atau dicampur air hangat",
    "Disarankan rutin setiap hari untuk hasil optimal"
  ],
  composition: [
    "Madu Murni – Antibakteri & sumber energi",
    "Kurma – Kaya nutrisi & penambah stamina",
    "Zaitun – Antioksidan tinggi",
    "Rosella – Menjaga kesehatan jantung",
    "Anggur & Delima – Kaya vitamin & mineral",
    "Habbatussauda – Mendukung sistem kekebalan",
    "Blueberry – Kesehatan otak & penglihatan",
    "Kulit Manggis – Xanthone antioksidan",
    "Daun Sirsak – Mendukung kesehatan sel",
    "Kunyit – Anti-inflamasi alami",
    "Spirulina – Superfood nutrisi lengkap",
    "Daun Stevia – Pemanis alami",
    "Ekstrak Herbal Lainnya – Sinergi kesehatan menyeluruh"
  ]
},
{
  id: "madu-habbat",
  name: "Madu Habbat",
  category: "Madu Herbal",
  price: 130000,
  packageContent: "Netto: 250 gr",
  image: "assets/images/products/madu_habbat.webp",
  description: "Madu Habbat adalah madu murni berkualitas tinggi yang mengandung 181 jenis senyawa alami termasuk 11 asam amino esensial. Dihasilkan dari nektar bunga pilihan oleh lebah unggul untuk nutrisi lengkap tubuh. Kaya vitamin, mineral, enzim, dan zat antimikroba alami yang mendukung kesehatan menyeluruh. Kemurnian alami untuk menjaga vitalitas dan daya tahan tubuh setiap hari.",
  benefits: [
    "Mengandung 181 jenis senyawa alami",
    "11 asam amino esensial untuk tubuh",
    "Kaya zat antimikroba & antibiotik alami",
    "Mendukung vitalitas dan daya tahan tubuh"
  ],
  howToUse: [
    "Dewasa: 1-2 sdm setiap pagi",
    "Anak-anak: 1 sdt setiap pagi",
    "Dapat diminum langsung atau dicampur air hangat"
  ],
  composition: [
    "Madu 100% – Nutrisi lengkap & kemurnian alami"
  ]
},
{
  id: "madu-kental",
  name: "Madu Kental",
  category: "Madu Herbal",
  price: 250000,
  packageContent: "Netto: 250 gr",
  image: "assets/images/products/madu kental.webp",
  description: "Madu Herbal adalah madu murni premium dari nektar buah longan dengan tekstur kental dan rasa yang khas. Dihasilkan dari lebah unggul tanpa campuran bahan lain untuk menjaga kemurnian nutrisi. Kaya enzim alami, vitamin, dan mineral yang mendukung kesehatan tubuh menyeluruh. Kemewahan rasa dan nutrisi dalam setiap tetesnya untuk kesehatan optimal.",
  benefits: [
    "100% madu murni dari nektar buah longan",
    "Tekstur kental dengan rasa khas yang lezat",
    "Kaya enzim alami & nutrisi lengkap",
    "Tanpa campuran bahan pengawet atau pemanis"
  ],
  howToUse: [
    "Konsumsi 1-2 sdm setiap pagi",
    "Dapat dicampur air hangat atau teh",
    "Cocok sebagai pengganti gula pada makanan"
  ],
  composition: [
    "100% Madu Asli – Kemurnian nutrisi dari nektar longan"
  ]
},
{
  id: "madu-multiflora",
  name: "Madu Multiflora",
  category: "Madu Herbal",
  price: 100000,
  packageContent: "Netto: 250 gr",
  image: "assets/images/products/madu_multiflora.webp",
  description: "Madu Multiflora adalah madu alami tanpa tambahan bahan lain yang dihasilkan dari lebah unggul Apis Mellifera. Telah melalui kendali mutu ketat dengan kadar air rendah untuk mencegah fermentasi dan menjaga keutuhan nutrisi. Kaya vitamin, mineral, enzim, dan zat antimikroba alami untuk mendukung kesehatan tubuh menyeluruh. Keaslian terjamin untuk keluarga sehat setiap hari.",
  benefits: [
    "100% madu alami tanpa campuran",
    "Kadar air rendah, bebas fermentasi",
    "Kaya vitamin, mineral & enzim alami",
    "Telah melalui kendali mutu ketat"
  ],
  howToUse: [
    "Dewasa: 1-2 sdm setiap pagi",
    "Anak-anak: 1 sdt setiap pagi",
    "Dapat diminum langsung atau dicampur air hangat"
  ],
  composition: [
    "Madu 100% – Kemurnian nutrisi dari lebah Apis Mellifera"
  ]
},
{
  id: "madu-pahit",
  name: "Madu Pahit",
  category: "Madu Herbal",
  price: 120000,
  packageContent: "Netto: 250 gr",
  image: "assets/images/products/madu_pahit.webp",
  description: "Madu Pahit memiliki rasa khas dari lebah Apis dorsata yang mengonsumsi nektar tanaman pahit seperti jati, mahoni, dan kirinyuh. Mengandung alkaloid tinggi sebagai antibakteri alami yang efektif melawan berbagai bakteri berbahaya. Formula unik untuk membersihkan tubuh dari dalam dan mendukung kesehatan pencernaan. Keunikan rasa untuk manfaat kesehatan yang maksimal.",
  benefits: [
    "Kandungan alkaloid tinggi sebagai antibakteri alami",
    "Membantu membersihkan tubuh dari dalam",
    "Mendukung kesehatan pencernaan",
    "Rasa khas dari nektar tanaman pahit pilihan"
  ],
  howToUse: [
    "Konsumsi 1 sdm setiap pagi",
    "Dapat dicampur air hangat untuk mengurangi rasa pahit",
    "Disarankan rutin untuk detoks alami"
  ],
  composition: [
    "Madu 100% – Antibakteri alami dari nektar tanaman pahit"
  ]
},
{
  id: "madu-s-jaga",
  name: "Madu S Jaga",
  category: "Madu Herbal",
  price: 120000,
  packageContent: "Netto: 285 gr",
  image: "assets/images/products/madu_sjaga.webp",
  description: "Madu S Jaga adalah kombinasi madu multiflora, sari kurma murni, dan ekstrak herbal alami untuk membantu memelihara daya tahan tubuh. Formula sinergis yang memberikan nutrisi lengkap untuk menjaga stamina dan vitalitas sepanjang hari. Rasakan kehangatan herbal yang menyatu sempurna dengan kelezatan madu dan sari kurma. Perlindungan alami untuk tubuh yang lebih kuat menghadapi tantangan harian.",
  benefits: [
    "Membantu memelihara daya tahan tubuh",
    "Kombinasi madu, sari kurma & ekstrak herbal",
    "Memberikan energi stabil sepanjang hari",
    "Mendukung stamina dan vitalitas alami"
  ],
  howToUse: [
    "Dewasa: 2 x 1 sendok makan sehari",
    "Minum setiap pagi dan sore hari",
    "Dapat diminum langsung atau dicampur air hangat"
  ],
  composition: [
    "Madu Multiflora – Sumber nutrisi & antibakteri",
    "Sari Kurma Murni – Energi alami & kaya nutrisi",
    "Ekstrak Herbal Alami – Sinergi kesehatan menyeluruh"
  ]
},
{
  id: "sari-kurma",
  name: "Sari Kurma",
  category: "Madu Herbal",
  price: 50000,
  packageContent: "Netto: 350 gr",
  image: "assets/images/products/sari_kurma.webp",
  description: "Sari Kurma adalah ekstrak buah kurma murni 100% yang digunakan secara tradisional untuk menjaga kesehatan badan. Kaya akan zat besi, potassium, serat, dan antioksidan alami untuk mendukung stamina dan kesehatan jantung. Rasakan manis alami kurma tanpa tambahan gula atau pengawet. Nutrisi lengkap dari buah surga untuk kesehatan optimal keluarga.",
  benefits: [
    "100% sari kurma murni tanpa campuran",
    "Kaya zat besi untuk mencegah anemia",
    "Mendukung kesehatan jantung & stamina",
    "Sumber serat alami untuk pencernaan sehat"
  ],
  howToUse: [
    "Dewasa: 1-2 sdm setiap pagi",
    "Anak-anak: 1 sdt setiap pagi",
    "Dapat diminum langsung atau dicampur susu"
  ],
  composition: [
    "100% Sari Kurma – Nutrisi lengkap dari buah kurma pilihan"
  ]
}
  // ... produk lainnya
];

// Ekspor untuk main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products };
}
