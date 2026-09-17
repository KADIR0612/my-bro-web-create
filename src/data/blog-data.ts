export type BlogSection = { heading: string; body: string[]; list?: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/mcb-trip-kyun-hota-hai",
    title: "MCB Baar-Baar Trip Kyun Hota Hai?",
    metaTitle: "MCB Trip Kyun Hota Hai? Reasons & Fix | Zuber Shaikh",
    metaDescription:
      "MCB baar-baar trip ho raha hai? Overload, short circuit, earth leakage aur galat MCB rating — reasons aur simple fix Hinglish mein samjhiye.",
    excerpt:
      "Overload, short circuit ya galat rating — MCB trip hone ke 5 common reasons aur unka solution.",
    date: "2026-09-10",
    readTime: "4 min",
    intro:
      "MCB trip hona ghabraane ki baat nahi hai — ye actually aapki safety ka signal hai. Lekin agar baar-baar trip ho raha hai to matlab kahin problem hai. Aaiye simple bhasha mein samjhte hain.",
    sections: [
      {
        heading: "1. Overload — zyada load ek hi line par",
        body: [
          "AC, geyser, microwave aur heater ek saath ek hi circuit par chalayenge to MCB apna kaam karega aur trip kar dega. Ye sabse common reason hai.",
          "Solution: heavy appliances ke liye alag circuit aur alag MCB lagwaiye.",
        ],
      },
      {
        heading: "2. Short circuit",
        body: [
          "Do wire aapas mein touch ho jaayein — phase aur neutral — to current bahut zyada badh jaata hai aur MCB turant trip karta hai. Aksar jala hua switch, pighla joint ya choohe ka kaata wire iski wajah hota hai.",
          "Solution: electrician se fault point dhundhwakar wahi section replace karwaiye.",
        ],
      },
      {
        heading: "3. Earth leakage",
        body: [
          "Geyser ya washing machine mein leakage ho to RCCB trip karega. Nal ya body chhoone par halka jhatka lage to samajh jaaiye leakage hai — ye ignore mat kijiye.",
        ],
      },
      {
        heading: "4. Galat MCB rating",
        body: [
          "6A ki jagah 32A ka MCB laga dena sasta shortcut lagta hai par khatarnak hai — fault par wo trip hi nahi karega. Aur bahut chhota MCB normal load par bhi trip karta rahega.",
        ],
      },
      {
        heading: "5. MCB khud kharab",
        body: [
          "Saalon purana MCB weak ho jaata hai aur bina load ke bhi trip karne lagta hai. Aisa MCB badalna hi sahi hai.",
        ],
      },
      {
        heading: "Kab electrician bulaayein?",
        body: [
          "Agar MCB din mein ek se zyada baar trip ho raha hai, garam ho raha hai, jalne ki smell aa rahi hai ya wapas ON hi nahi ho raha — turant electrician bulaaiye. Ahmedabad mein Zuber Shaikh ko 84888 97375 par call ya WhatsApp kar sakte hain.",
        ],
      },
    ],
  },
  {
    slug: "/blog/inverter-battery-kitne-saal-chalti-hai",
    title: "Inverter Battery Kitne Saal Chalti Hai?",
    metaTitle: "Inverter Battery Life: Kitne Saal Chalti Hai? | Zuber Shaikh",
    metaDescription:
      "Inverter battery kitne saal chalti hai, life kaise badhaye, water level, backup kam hone ke reasons — practical guide Hinglish mein.",
    excerpt:
      "Battery ki normal life, backup kam hone ke reasons aur life badhane ke aasaan tips.",
    date: "2026-09-08",
    readTime: "4 min",
    intro:
      "Inverter battery mehengi aati hai, isliye uski life ka sawaal sabke man mein hota hai. Chaliye dekhte hain ki realistically kitna chalti hai aur kaise zyada chal sakti hai.",
    sections: [
      {
        heading: "Normal battery life",
        body: [
          "Tubular lead-acid battery aam taur par 4 se 6 saal chalti hai agar maintenance theek ho. Flat plate battery 3 se 4 saal, aur lithium battery 8 saal tak ja sakti hai.",
          "Lekin ye numbers tabhi milte hain jab charging sahi ho, load zyada na ho aur water level maintain rahe.",
        ],
      },
      {
        heading: "Backup kam hone ke reasons",
        body: [""],
        list: [
          "Distilled water level kam hona",
          "Terminal par safedi (corrosion) jam jaana",
          "Load capacity se zyada chalana",
          "Bahut garmi wali band jagah par battery rakhna",
          "Purani battery ke plates sulphate ho jaana",
        ],
      },
      {
        heading: "Life badhane ke tips",
        body: [""],
        list: [
          "Har 2-3 mahine water level check kijiye — sirf distilled water daaliye",
          "Terminal saaf rakhiye aur petroleum jelly lagaiye",
          "Battery ko hawa-daar jagah par rakhiye",
          "Mahine mein ek baar battery ko full discharge-charge cycle dijiye",
          "Inverter par sirf zaroori points hi rakhiye — AC aur geyser bilkul nahi",
        ],
      },
      {
        heading: "Battery badalne ka time kab aata hai?",
        body: [
          "Agar full charge ke baad bhi backup aadhe se kam ho gaya hai, battery phool gayi hai, ya charging hote hi garam ho jaati hai — to ab replacement hi sahi hai.",
          "Ahmedabad mein inverter ya battery fitting ke liye 84888 97375 par call kijiye.",
        ],
      },
    ],
  },
  {
    slug: "/blog/ghar-ki-wiring-kab-change-kare",
    title: "Ghar Ki Wiring Kab Change Karni Chahiye?",
    metaTitle: "Ghar Ki Wiring Kab Change Kare? 7 Signs | Zuber Shaikh",
    metaDescription:
      "Purani wiring change karne ke 7 signs — switch garam hona, fuse udna, light dim hona. Rewiring cost aur process Hinglish guide.",
    excerpt:
      "Purani wiring khatarnak ho sakti hai. Ye 7 signs dikhein to rewiring soch lijiye.",
    date: "2026-09-05",
    readTime: "5 min",
    intro:
      "Wiring deewar ke andar chhupi hoti hai, isliye log tab tak dhyan nahi dete jab tak koi badi problem na ho jaaye. Ye signs pehle hi warning de dete hain.",
    sections: [
      {
        heading: "7 signs jo rewiring ki zaroorat batate hain",
        body: [""],
        list: [
          "Switch ya socket garam hona ya spark karna",
          "Baar-baar fuse udna ya MCB trip hona",
          "Appliance chalate hi lights dim ho jaana",
          "Jalne ya plastic pighalne ki smell aana",
          "Socket ke aas-paas kaale nishaan",
          "Wire ki insulation crack ya bhurbhuri ho jaana",
          "Wiring 20-25 saal se zyada purani hona",
        ],
      },
      {
        heading: "Purani wiring khatarnak kyun hai?",
        body: [
          "Pehle ke ghar mein aluminium wire aur patla gauge use hota tha, aur load bhi kam tha. Aaj AC, geyser, microwave, washing machine — sab ek saath chalte hain. Purani wiring ye load nahi sambhal paati, garam hoti hai aur aag ka risk banta hai.",
        ],
      },
      {
        heading: "Poori rewiring ya partial?",
        body: [
          "Har baar poora ghar todna zaroori nahi hota. Agar sirf kitchen ya ek room ki line kamzor hai to partial rewiring se kaam ho jaata hai. Electrician se testing karwa kar decide kijiye — koi bhi sahi electrician pehle check karega, phir hi bolega.",
        ],
      },
      {
        heading: "Rewiring mein kya hona chahiye",
        body: [""],
        list: [
          "ISI mark copper wire, sahi gauge",
          "Har circuit ke liye alag MCB",
          "Proper earthing aur RCCB",
          "Heavy appliances ke liye dedicated line",
          "Kaam ke baad testing aur neat finishing",
        ],
      },
      {
        heading: "Ahmedabad mein rewiring ke liye",
        body: [
          "Zuber Shaikh ITI qualified electrician hain aur ghar ki complete wiring ka kaam poore estimate ke saath karte hain. Call ya WhatsApp: 84888 97375.",
        ],
      },
    ],
  },
  {
    slug: "/blog/short-circuit-se-kaise-bachen",
    title: "Short Circuit Se Kaise Bachen?",
    metaTitle: "Short Circuit Se Kaise Bachen? Safety Guide | Zuber Shaikh",
    metaDescription:
      "Short circuit kyun hota hai aur usse bachne ke practical tips. Emergency mein kya karein — Ahmedabad electrician Zuber Shaikh ki guide.",
    excerpt:
      "Short circuit ke causes, bachne ke tareeke aur emergency mein turant kya karna chahiye.",
    date: "2026-09-02",
    readTime: "4 min",
    intro:
      "Short circuit ghar mein aag lagne ki sabse badi wajah hai. Achhi baat ye hai ki thodi si samajh aur dhyan se ise poori tarah roka ja sakta hai.",
    sections: [
      {
        heading: "Short circuit hota kaise hai?",
        body: [
          "Jab phase aur neutral wire seedha touch ho jaate hain to current ka raasta bahut chhota ho jaata hai aur current achanak hazaaron guna badh jaata hai. Isse wire garam hokar pighal jaata hai aur spark ya aag lag sakti hai.",
          "Common wajah: purani insulation, loose joint, paani lagna, choohe ka wire kaatna aur ghatiya quality ke switch.",
        ],
      },
      {
        heading: "Bachne ke practical tareeke",
        body: [""],
        list: [
          "Sasta wire aur local switch mat lagwaiye — ISI mark hi use kijiye",
          "Har circuit par sahi rating ka MCB aur RCCB rakhiye",
          "Ek socket par multiple extension board mat chadhaiye",
          "Bathroom aur kitchen ke socket paani se door aur waterproof rakhiye",
          "Joint ko tape se nahi, proper connector se joda jaaye",
          "Saal mein ek baar electrical safety check karwaiye",
        ],
      },
      {
        heading: "Agar short circuit ho jaaye to turant kya karein",
        body: [""],
        list: [
          "Sabse pehle main switch / MCB OFF kijiye",
          "Aag lagi ho to paani bilkul mat daaliye — dry powder extinguisher ya mitti use kijiye",
          "Jale hue socket ko chhuiye mat",
          "Supply ON tab tak mat kijiye jab tak electrician check na kar le",
        ],
      },
      {
        heading: "Madad chahiye?",
        body: [
          "Ahmedabad mein short circuit ya urgent fault ke liye Zuber Shaikh ko 84888 97375 par call ya WhatsApp kijiye.",
        ],
      },
    ],
  },
  {
    slug: "/blog/electrical-safety-tips-home",
    title: "Ghar Ke Liye 10 Electrical Safety Tips",
    metaTitle: "10 Electrical Safety Tips for Home | Zuber Shaikh",
    metaDescription:
      "Ghar ke liye 10 simple electrical safety tips — earthing, MCB, socket, extension board aur bachchon ki safety. Ahmedabad electrician guide.",
    excerpt:
      "Aasaan safety tips jo har ghar mein follow hone chahiye — khaaskar bachchon wale ghar mein.",
    date: "2026-08-28",
    readTime: "5 min",
    intro:
      "Bijli ka kaam thoda sa dhyaan maangta hai. Ye 10 tips follow karenge to aapka ghar kaafi zyada safe rahega.",
    sections: [
      {
        heading: "10 safety tips",
        body: [""],
        list: [
          "Earthing har ghar mein honi chahiye — bina earthing ke appliance chalana risky hai",
          "Har circuit par sahi rating ka MCB lagwaiye, jugaad wala fuse nahi",
          "Geyser aur washing machine ke liye RCCB zaroor lagwaiye",
          "Gile haath se switch ya plug mat chhuiye",
          "Bachchon wale ghar mein socket par safety shutter ya cap lagaiye",
          "Ek extension board par heavy appliances mat chalaiye",
          "Charger aur appliance ka kaam khatam hone par plug nikaal dijiye",
          "Wire ko carpet ya darwaaze ke neeche se mat le jaaiye",
          "Kata-phata wire turant badliye, tape lagakar kaam mat chalaiye",
          "Saal mein ek baar poore ghar ka electrical check karwaiye",
        ],
      },
      {
        heading: "Sabse zyada ignore hone wali cheez: earthing",
        body: [
          "Bahut ghar mein earthing ya to hai hi nahi, ya kaam nahi kar rahi. Nal, fridge ya geyser chhoone par halka jhatka lagna iska sabse bada signal hai. Ye chhoti problem nahi hai — turant check karwaiye.",
        ],
      },
      {
        heading: "Ghar ka safety check karwaiye",
        body: [
          "Ahmedabad mein ghar ya dukan ka electrical safety check karwana ho to Zuber Shaikh ko 84888 97375 par call ya WhatsApp kijiye.",
        ],
      },
    ],
  },
];
