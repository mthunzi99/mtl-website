import carouselImg1 from "../assets/carousel/carouselImg1.png";
import carouselImg2 from "../assets/carousel/carouselImg2.png";

export const navigation = [
  {
    id: 0,
    title: "About Us",
    subMenuHeadings: ["About", "Customer Service Charter"],
    subMenu: [
      { title: "About", url: "#About" },
      { title: "Customer Service Charter", url: "#Customer-Service-Charter" },
    ],
  },
  {
    id: 1,
    title: "Solutions",
    subMenuHeadings: [
      "Business",
      "Wholesale",
      "Consumer",
      "Hosted Services, Devices and Accessories",
    ],
    subMenu: [
      { title: "Business", url: "#Business" },
      { title: "Wholesale", url: "#Wholesale" },
      { title: "Consumer", url: "#Consumer" },
      { title: "Hosted Services", url: "#Hosted-Services" },
      { title: "Devices and Accessories", url: "#Devices-and-Accessories" },
    ],
  },
  { id: 2, title: "Tariffs", url: "#Tariffs" },
  { id: 3, title: "Self Care", url: "#Self-Care" },
  {
    id: 4,
    title: "Support",
    subMenuHeadings: ["FAQs", "Service Centres", "Airtime Topup", "Contact Us"],
    subMenu: [
      { title: "FAQs", url: "#FAQs" },
      { title: "Service Centres", url: "#Service-Centres" },
      { title: "Airtime Topup", url: "#Airtime-Topup" },
      { title: "Contact Us", url: "#Contact-Us" },
    ],
  },
  { id: 5, title: "Phone Directory", url: "#Phone-Directory" },
];

export const carousel = [
  {
    id: 0,
    image: carouselImg1,
    title: "Virtual Private Network",
    subtitle: "Business Conect",
    description:
      "A dedicated Virtual Private Network (VPN) solution which enables the sending and receiving of data and voice securely between branches across Malawi.",
  },
  {
    id: 1,
    image: carouselImg2,
    title: "VoIP Solutions",
    subtitle: "Postpaid Fixed Phone",
    description:
      "Competitive call rates with per second billing. Available to both Small-medium enterprises and Corporates.",
  },
];
