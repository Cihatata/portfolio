import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
import { NavigationItem } from "../types";
import { siteConfig } from "../lib/config";

export const ACTIONS: Array<NavigationItem> = [
  {
    id: uuid(),
    href: "/about",
    icon: <Icon icon="feather:user" className="mr-3" />,
    text: "About",
  },
  {
    id: uuid(),
    href: "/work",
    icon: <Icon icon="feather:briefcase" className="mr-3" />,
    text: "Work",
  },
  {
    id: uuid(),
    href: siteConfig.links.github,
    external: true,
    icon: <Icon icon="feather:github" className="mr-3" />,
    text: "Github",
  },
  {
    id: uuid(),
    href: siteConfig.links.cv,
    external: true,
    icon: <Icon icon="feather:file-text" className="mr-3" />,
    text: "Resume",
  },
];
