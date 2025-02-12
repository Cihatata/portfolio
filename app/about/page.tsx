"use client";

import React from "react";
import {
  AboutContent,
  AboutContainer,
  Layout,
  TitleSecondary,
  Description,
} from "../components";

export default function About() {
  return (
    <Layout.Standard>
      <AboutContainer>
        <AboutContent>
          <TitleSecondary>Merhaba !</TitleSecondary>
          <Description className="md:max-w-3xl">
            Ben Cihat ATA. <a href="https://www.trendyol.com" target="_blank" className="text-amber-500 font-semibold">Trendyol</a>`da 
            Frontend Developer olarak çalışıyorum. Ankara`da yaşıyorum. Gazi Üniversitesi Bilgisayar Mühendisliği mezunuyum.
            4+ yıldır sektörde Software Developer olarak çalışıyorum.
            JavaScript teknolojileri ile ilgileniyorum. Ürün odaklı şirketlerde çalışmayı 
            tercih ediyorum. Öğrendiklerimi ve deneyimlerimi başkalarına aktarma konusunda 
            hevesliyim. 
            <br />
            <br />
            Yeni yerler keşfetmeyi seviyorum. Zamanım olduğunda eşimle, arkadaşlarımla veya 
            ailemle görmediğim yerlere gitmeyi çalışıyorum. Çoğu yazılımcı gibi ben de kahve ile uğraşıyorum. 
            <br />
            <br />
            Takım sporlarını yapmayı ve izlemeyi seviyorum. Futbolla daha çok ilgileniyorum. Şehrimin takımını destekliyorum Eskişehirsporluyum. 
            <br />
            <br />
          </Description>
        </AboutContent>
      </AboutContainer>
    </Layout.Standard>
  );
}
