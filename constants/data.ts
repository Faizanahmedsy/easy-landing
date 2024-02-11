export const BRAND = {
  name: "LessCode",
  // logo: "/logo.svg",
} as const;

export const navLinks = [
  {
    // icon: < />,
    href: "/",
    text: "Home",
  },
  {
    // icon: <FluentEmojiFlatBriefcase />,
    href: "/work",
    text: "Work",
  },
  {
    // icon: <FluentEmojiFlatGraduationCap />,
    href: "/education",
    text: "Education",
  },
] as const;

export const HERO = {
  mainTxt: "Humanity's Only less-code development tool",
  subTxt:
    "built websites fast, Like blazzzzzingly fast, with easy syntax that even a kid can understand, so that you can focus on things that are more important.",
} as const;
