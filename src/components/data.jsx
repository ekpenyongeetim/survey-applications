// data.jsx
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook-square.svg";

export const headerOptions = [
  {
    value: "theme1",
    label: "Shapestagon Ventures",
    surveyor: "(Surv. Ekpenyong E. Etim, mnis)",
    img: "/shapestagon-letter-head.png", // Specify the image path for Theme 1
  },
  {
    value: "theme2",
    label: "Real Time Survey",
    surveyor: "(Surv. E. O. Edema, mnis)",
    img: "/real-time.png", // Specify the image path for Theme 2
  },
  {
    value: "theme3",
    label: "Statwit Survey Services",
    surveyor: "(Surv. J. E. Ukama, mnis)",
    img: "/ukama-header.png", // Specify the image path for Theme 2
  },
  {
    value: "theme4",
    label: "Uchua Geosurveys (UGS)",
    surveyor: "(Surv. Emmanuel U. Ekerikang, mnis)",
    img: "/ekerikan-header.png", // Specify the image path for Theme 2
  },
  // Add more themes as needed
];

// Other data if you have
export const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/apply",
    label: "Apply",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://facebook.com",
    svgLink: facebook,
  },
  { id: 2, href: "https://twitter.com", svgLink: twitter },

  // Add more social links as needed
];
