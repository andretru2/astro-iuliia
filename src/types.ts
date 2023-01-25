// import type { ImageMetadata } from "@astrojs/image";

export interface Image {
  src: string | ImageMetadata;
  alt: string;
}

export interface Link {
  href: string;
  text: string;
}

export interface IconLink extends Link {
  pack: string;
  name: string;
}

export interface Skills {
  name: string;
  icon: string;
}

export interface Site {
  name: string;
  title: string;
  email: string;
  description: string;
  image: ImageMetadata;
  socialLinks: IconLink[];
  skills: Skills[];
  twitterHandle: string;
}

export interface Project {
  title: string;
  tags: string[];
  description: string;
  image: {
    src: string;
    alt: string;
  };
  url: Link;
  background: {
    src: string;
    alt: string;
  };
  dateCreated: string;
  disabled?: boolean;
}
