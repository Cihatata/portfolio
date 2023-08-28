import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
import { NavigationItem } from "../types";
import { siteConfig } from "../lib/config";

export const ACTIONS: Array<NavigationItem> = [
  {
    id: uuid(),
    href: "/about",
    icon: <Icon icon="feather:user" className="mr-3" />,
    text: "Hakkımda",
  },
  {
    id: uuid(),
    href: "/work",
    icon: <Icon icon="feather:briefcase" className="mr-3" />,
    text: "Çalışmalarım",
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
    href: siteConfig.links.linkedin,
    external: true,
    icon: <Icon icon="feather:linkedin" className="mr-3" />,
    text: "Linkedin",
  },
];
