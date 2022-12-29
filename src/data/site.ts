import type { Site } from "@src/types.js";
import social from "@assets/social.jpg";

const site: Site = {
  name: "iuliia Bakhtoiarova",
  title: "iuliia Bakhtoiarova - Creative UI/UX Designer",
  description:
    "A strategic visionary driven to create aesthetically impactful user-centered designs.",
  image: social,
  email: "iuliia.bakhtoiarova@gmail.com",
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
