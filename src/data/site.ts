import type { Site } from "@src/types.js";
import social from "../images/Logo.svg";
// import social from "@images/social.svg";

const site: Site = {
  name: "Iuliia.Design",
  title: "Iuliia Bakhtoiarova - Creative UI/UX Designer",
  description:
    "Creative UI/UX Designer with a unique blend of business acumen and strong visual design skills, driving revenue growth through user-centered designs.",
  image: social,
  email: "iuliia.bakhtoiarova@gmail.com",
  twitterHandle: "iuliiadesign",
  socialLinks: [
    {
      href: "http://www.linkedin.com/in/iuliia-bakhtoiarova",
      text: "Go to my LinkedIn profile",
      pack: "bi",
      name: "linkedin",
    },

    {
      href: "https://medium.com/@iuliia.bakhtoiarova/a-career-change-starts-with-you-and-ux-design-principles-in-mind-f9cab9f9b04c",
      text: "Medium article",
      pack: "fa-brands",
      name: "medium-m",
    },
    // {
    //   id: "medium",
    //   href: "https://medium.com/@iuliia.bakhtoiarova/a-career-change-starts-with-you-and-ux-design-principles-in-mind-f9cab9f9b04c",
    //   text: "Medium article",
    //   pack: "simple-line-icons",
    //   name: "paper-plane",
    // },
  ],
  skills: [
    { name: "HTML5", icon: "html5" },
    { name: "HTML7", icon: "html7" },
  ],
};

export default site;
