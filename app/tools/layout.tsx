import { Metadata } from "next";
import React from "react";
import { siteConfig } from "../lib/config";

export const metadata: Metadata = {
  title: `Araçlarım | ${siteConfig.name}`,
  description:
    "Çalışma masamda kullandığım araçlar",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default layout;
