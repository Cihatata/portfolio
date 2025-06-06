import { Metadata } from "next";
import React from "react";
import { siteConfig } from "../lib/config";

export const metadata: Metadata = {
  title: `Çalışmalarım | ${siteConfig.name}`,
  description:
    "Notlarım ve Yazdığım bazı yazıları burada görebilirsiniz.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default layout;
