// data.jsx
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook-square.svg";

export const headerOptions = [
  {
    value: "theme1",
    label: "Shapestagon Ventures",
    surveyor: "(Surv. Ekpenyong E. Etim, mnis)",
    img: "../assests/shapestagon-letter-head.png", // Specify the image path for Theme 1
  },
  {
    value: "theme2",
    label: "Real Time Survey",
    surveyor: "(Surv. E. O. Edema, mnis)",
    img: "../public/real-time.png", // Specify the image path for Theme 2
  },
  {
    value: "theme3",
    label: "Statwit Survey Services",
    surveyor: "(Surv. J. E. Ukama, mnis)",
    img: "../public/ukama-header.png", // Specify the image path for Theme 2
  },
  {
    value: "theme4",
    label: "Uchua Geosurveys (UGS)",
    surveyor: "(Surv. Emmanuel U. Ekerikang, mnis)",
    img: "../assests/ekerikan-header.png", // Specify the image path for Theme 2
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
