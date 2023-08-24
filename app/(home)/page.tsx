"use client";

import Image from "next/image";
import {
  Description,
  TitlePrimary,
  Wave,
  Button,
  Layout,
  HomeContent,
  HomeContainer,
} from "../components";
import { ACTIONS } from "../data";

export default function Home() {
  return (
    <Layout.Standard>
      <HomeContainer>
        <HomeContent>
          <Avatar />
          <Pill />
          <TitlePrimary>
            Merhaba<Wave>👋 </Wave>, Ben Cihat!
          </TitlePrimary>
          <Description className="text-xl md:max-w-4xl !text-left">
            Sektörde Frontend Developer olarak çalışıyorum. Web uygulamaları geliştirmeyi seviyorum. Zaman buldukça yeni yerler keşfetmeye çalışıyorum. Deneyim paylaşımlarını değerli buluyorum. Burada, edindiğim deneyimleri ve çalışmalarımı paylaşmaya çalışacağım.
          </Description>

          <div className="sm:space-x-4">
            {ACTIONS.map((action) => {
              return (
                <Button
                  key={action.id}
                  href={action.href}
                  rel={action.external ? "noopener noreferrer" : ""}
                  target={action.external ? "_blank" : ""}
                >
                  {action.icon}
                  {action.text}
                </Button>
              );
            })}
          </div>
        </HomeContent>
      </HomeContainer>
    </Layout.Standard>
  );
}

const Pill = () => {
  return (
    <div className="flex group items-center border border-border mb-6 py-2 px-4 max-w-fit mx-auto rounded-full">
      <span className="text-xs font-medium text-accent-foreground tracking-normal ">
        Focusing <span className="inline-block transform transition duration-500 group-hover:scale-150">🎯</span> Web Technology
      </span>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="w-full items-center justify-center flex mb-8">
      <Image alt="avatar" src="/avatar.png" width="120" height="120" className="rounded-full" />
    </div>
    )
}
