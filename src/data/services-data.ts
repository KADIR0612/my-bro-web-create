export type ServicePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  paragraphs: string[];
  benefits: string[];
  cardTitle: string;
  cardText: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "/ghar-wiring-ahmedabad",
    metaTitle: "Ghar Ki Wiring Ahmedabad | Zuber Shaikh Electrician",
    metaDescription:
      "House wiring in Ahmedabad by ITI qualified electrician Zuber Shaikh. Nayi wiring, purani wiring change, earthing aur switch board kaam. Call 84888 97375.",
    eyebrow: "Home Wiring",
    h1: "Ghar Ki Wiring — Ahmedabad",
    intro:
      "Naye ghar ki complete wiring ho ya purani wiring change karni ho, Ahmedabad mein Zuber Shaikh ITI qualified electrician hain aur 7 saal se ghar ki wiring ka kaam kar rahe hain.",
    paragraphs: [
      "Ghar ki wiring sirf wire daalne ka kaam nahi hai. Load calculation, sahi gauge ka copper wire, proper earthing aur MCB protection — ye sab theek ho tabhi ghar safe rehta hai. Hum ISI mark material use karte hain aur har point ko test karke handover karte hain.",
      "Purane ghar mein baar-baar fuse udna, switch garam hona, ya light dim hona — ye signs batate hain ki wiring purani ho chuki hai. Aise mein poori rewiring ya partial rewiring dono option hum aapko samjha kar dete hain, bina zabardasti ke.",
      "Kaam se pehle poora estimate milta hai — material alag, labour alag. Kaam ke baad malba saaf karke jaate hain, deewar ki patching bhi neat hoti hai.",
    ],
    benefits: [
      "Concealed aur open — dono type ki wiring",
      "ISI mark copper wire aur branded switches",
      "Proper earthing aur MCB protection",
      "Point-wise ya complete ghar ka estimate",
      "Neat finishing, kaam ke baad safai",
      "Kaam ke baad testing aur guidance",
    ],
    cardTitle: "Ghar Ki Wiring",
    cardText: "Nayi wiring, rewiring, earthing aur switch board ka complete kaam.",
  },
  {
    slug: "/mcb-panel-board-fitting",
    metaTitle: "MCB & Panel Board Fitting Ahmedabad | Zuber Shaikh",
    metaDescription:
      "MCB change, DB box aur panel board fitting in Ahmedabad. Tripping aur load problem ka solution by ITI electrician Zuber Shaikh. Call 84888 97375.",
    eyebrow: "MCB & Panel",
    h1: "MCB, DB & Panel Board Fitting",
    intro:
      "MCB baar-baar trip ho raha hai ya naya distribution board lagwana hai? Ahmedabad mein MCB aur panel board ka kaam sahi rating aur sahi wiring ke saath karwaiye.",
    paragraphs: [
      "MCB ghar ka sabse zaroori safety device hai. Galat rating ka MCB lagana khatarnak hai — chhota MCB baar-baar trip karega aur bada MCB fault par trip hi nahi karega. Hum load dekh kar sahi rating chunte hain.",
      "Distribution board (DB) mein har circuit alag hona chahiye — light, fan, AC, geyser, power socket. Isse fault aane par poora ghar band nahi hota, sirf wahi circuit trip hota hai.",
      "Commercial aur shop ke liye main panel board, changeover switch aur three phase load balancing ka kaam bhi karte hain.",
    ],
    benefits: [
      "Load ke hisaab se sahi MCB rating",
      "Branded MCB, RCCB aur DB box",
      "Circuit-wise alag protection",
      "Tripping problem ki fault finding",
      "Three phase load balancing",
      "Labels lagakar neat DB finishing",
    ],
    cardTitle: "MCB & Panel Board",
    cardText: "MCB change, DB fitting, RCCB aur panel board ka kaam.",
  },
  {
    slug: "/inverter-battery-fitting",
    metaTitle: "Inverter & Battery Fitting Ahmedabad | Zuber Shaikh",
    metaDescription:
      "Inverter aur battery fitting in Ahmedabad — new installation, wiring, shifting aur repair. ITI electrician Zuber Shaikh. Call or WhatsApp 84888 97375.",
    eyebrow: "Inverter & Battery",
    h1: "Inverter & Battery Fitting",
    intro:
      "Naya inverter lagwana hai, battery change karani hai ya inverter line ghar ke points tak le jaani hai? Ahmedabad mein Zuber Shaikh ye kaam safe wiring ke saath karte hain.",
    paragraphs: [
      "Inverter fitting mein sabse important hai alag inverter line. Hum ghar ke zaroori points — light, fan, TV, router — ko alag line par lete hain taki backup lamba chale aur load balance rahe.",
      "Battery connection mein terminal tight, sahi gauge ka cable aur hawa-daar jagah zaroori hai. Loose terminal se battery jaldi kharab hoti hai aur spark ka risk rehta hai.",
      "Purana inverter beep kar raha hai, backup kam de raha hai ya charging nahi ho rahi — pehle check karke batate hain ki problem battery mein hai ya inverter mein.",
    ],
    benefits: [
      "Naye inverter ki complete installation",
      "Alag inverter line aur point wiring",
      "Battery connection aur trolley setup",
      "Backup kam hone ki jaanch",
      "Inverter shifting aur rewiring",
      "Stabilizer aur voltage problem solution",
    ],
    cardTitle: "Inverter & Battery",
    cardText: "Inverter installation, battery connection aur backup line ka kaam.",
  },
  {
    slug: "/fan-light-fitting",
    metaTitle: "Fan & Light Fitting Ahmedabad | Zuber Shaikh Electrician",
    metaDescription:
      "Ceiling fan, LED light, chandelier aur exhaust fan fitting in Ahmedabad. Same-day service by ITI electrician Zuber Shaikh. Call 84888 97375.",
    eyebrow: "Fitting Work",
    h1: "Fan, Light & Fitting Work",
    intro:
      "Ceiling fan, exhaust fan, LED panel, chandelier ya geyser — Ahmedabad mein fitting ka har chhota-bada kaam same day ho jaata hai.",
    paragraphs: [
      "Fan fitting mein hook ki strength, regulator ki quality aur balancing — teeno matter karte hain. Wobble karta fan matlab galat fitting. Hum fan lagakar balance check karke hi jaate hain.",
      "LED aur false ceiling lights ke liye sahi driver aur point spacing zaroori hai, warna light flicker karti hai ya jaldi fail hoti hai. Chandelier ke liye ceiling ka load bhi dekhte hain.",
      "Geyser aur AC point ke liye alag heavy-duty wiring aur dedicated MCB lagate hain, kyunki ye high load appliances hain.",
    ],
    benefits: [
      "Ceiling, wall aur exhaust fan fitting",
      "LED panel, strip aur chandelier fitting",
      "Geyser aur AC point wiring",
      "Fan wobble aur regulator problem fix",
      "Same-day fitting service",
      "Purane fitting ko shift karna",
    ],
    cardTitle: "Fan & Light Fitting",
    cardText: "Fan, LED, chandelier, geyser aur AC point ki fitting.",
  },
  {
    slug: "/short-circuit-repair",
    metaTitle: "Short Circuit Repair Ahmedabad | Emergency Electrician",
    metaDescription:
      "Short circuit, tripping aur power fail ka urgent repair in Ahmedabad. Fault finding by ITI electrician Zuber Shaikh. Call or WhatsApp 84888 97375.",
    eyebrow: "Emergency Repair",
    h1: "Short Circuit & Fault Repair",
    intro:
      "Ghar ya dukan mein short circuit ho gaya, MCB trip ho raha hai ya poora power chala gaya? Ahmedabad mein jaldi pahunch kar fault dhundh kar theek karte hain.",
    paragraphs: [
      "Short circuit ka sabse pehla kaam hai main supply band karna. Uske baad hum circuit-by-circuit test karke pata lagate hain ki fault kis line mein hai — light, power, geyser ya AC.",
      "Aksar problem chhoti hoti hai: jala hua switch, pighla hua joint, choohe ka kaata wire ya paani se bheega socket. Lekin jab tak sahi point na mile, MCB baar-baar trip karta rahega.",
      "Fault milne ke baad sirf patch nahi karte — jo section kamzor hai use theek se replace karte hain taki dobara wahi problem na aaye.",
    ],
    benefits: [
      "Urgent same-day response",
      "Tester aur meter se proper fault finding",
      "Jale hue wire, switch aur joint replace",
      "Baar-baar tripping ka permanent solution",
      "Current leakage aur shock problem fix",
      "Repair ke baad full safety check",
    ],
    cardTitle: "Short Circuit Repair",
    cardText: "Fault finding, tripping aur power failure ka urgent solution.",
  },
  {
    slug: "/commercial-electrician-ahmedabad",
    metaTitle: "Commercial Electrician Ahmedabad | Zuber Shaikh",
    metaDescription:
      "Commercial electrician in Ahmedabad for shops, showrooms, offices and warehouses. Panel board, lighting and load management. Call 84888 97375.",
    eyebrow: "Commercial",
    h1: "Commercial Electrician in Ahmedabad",
    intro:
      "Dukan, showroom, office ya warehouse — commercial jagah ka electrical kaam alag planning maangta hai. Ahmedabad mein Zuber Shaikh commercial wiring aur maintenance dono karte hain.",
    paragraphs: [
      "Commercial setup mein load zyada hota hai aur downtime mehenga padta hai. Isliye hum pehle load calculation karte hain, phir circuits ko is tarah baantte hain ki ek fault se poora kaam band na ho.",
      "Showroom aur shop lighting mein display ka look important hota hai — track light, spot light, signage board aur show window wiring ka kaam neat concealed finish ke saath karte hain.",
      "Office aur warehouse ke liye panel board, three phase supply, DB distribution, emergency light aur regular maintenance visit bhi arrange kar sakte hain.",
    ],
    benefits: [
      "Shop, showroom aur office ki full wiring",
      "Three phase supply aur panel board",
      "Display, signage aur track lighting",
      "Load management aur power factor guidance",
      "AMC style maintenance visits",
      "Kaam business hours ke hisaab se plan",
    ],
    cardTitle: "Commercial Work",
    cardText: "Shop, office aur warehouse ki wiring, lighting aur panel work.",
  },
  {
    slug: "/switch-board-socket-fitting",
    metaTitle: "Switch Board & Socket Fitting Ahmedabad | Zuber Shaikh",
    metaDescription:
      "Switch board repair, modular switch aur socket fitting in Ahmedabad. Naye point, USB socket aur board shifting. Call Zuber Shaikh 84888 97375.",
    eyebrow: "Switch & Socket",
    h1: "Switch Board & Socket Fitting",
    intro:
      "Naya switch board lagwana hai, modular switches par shift karna hai ya ek extra socket chahiye? Ahmedabad mein ye kaam usi din ho jaata hai.",
    paragraphs: [
      "Purane switch board garam hote hain, spark karte hain aur dikhne mein bhi kharab lagte hain. Modular board par shift karne se look bhi sudharta hai aur safety bhi badhti hai.",
      "Naya point banwate waqt load dekhna zaroori hai. AC, geyser aur microwave jaise appliances ke liye 16A socket aur heavy wire chahiye — normal 6A socket par ye chalana risky hai.",
      "Kitchen, bathroom aur balcony ke sockets ke liye waterproof plate aur RCCB protection recommend karte hain.",
    ],
    benefits: [
      "Modular switch aur plate fitting",
      "Naya socket aur extra point banana",
      "16A heavy duty appliance socket",
      "Spark aur heating problem fix",
      "Board shifting aur relocation",
      "USB aur smart switch fitting",
    ],
    cardTitle: "Switch & Socket",
    cardText: "Modular switch board, naye socket aur point fitting.",
  },
  {
    slug: "/electrical-safety-check",
    metaTitle: "Electrical Safety Check Ahmedabad | Zuber Shaikh",
    metaDescription:
      "Home aur shop ka electrical safety check in Ahmedabad — wiring, earthing, MCB aur load inspection by ITI electrician Zuber Shaikh. Call 84888 97375.",
    eyebrow: "Safety Audit",
    h1: "Electrical Safety Check",
    intro:
      "Ghar ya dukan ka poora electrical system safe hai ya nahi — ye ek inspection se pata chal jaata hai. Ahmedabad mein Zuber Shaikh safety check karke likhit suggestions dete hain.",
    paragraphs: [
      "Safety check mein hum earthing, MCB rating, wire ki condition, joint, load distribution aur appliance points — sab check karte hain. Har cheez ka status simple bhasha mein batate hain.",
      "Naya ghar lene se pehle ya kirayedar aane se pehle safety check karwana samajhdari hai. Chhoti problem abhi theek karna sasta padta hai, baad mein aag ya appliance damage mehnga.",
      "Check ke baad priority list milti hai — kaunsa kaam turant zaroori hai aur kaunsa baad mein ho sakta hai.",
    ],
    benefits: [
      "Earthing aur voltage testing",
      "MCB aur RCCB rating verification",
      "Purani wiring ki condition check",
      "Overload aur heating points identify",
      "Priority-wise repair suggestion",
      "Ghar, dukan aur office — sabke liye",
    ],
    cardTitle: "Safety Check",
    cardText: "Wiring, earthing aur load ka poora electrical safety audit.",
  },
];
