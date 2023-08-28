"use client";

import React from "react";
import {
  Layout,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabGroup,
  WorkContent,
  WorkContainer,
  ListContainer,
} from "../components";
import { BLOGS } from "../data";
import { BlogCard } from "./component";

export default function Projects() {
  return (
    <Layout.Standard>
      <WorkContainer>
        <WorkContent>
          <TabGroup>
            <TabsList>
              <TabsTrigger>Yazılarım</TabsTrigger>
              <TabsTrigger>Notlarım</TabsTrigger>
              <TabsTrigger>Yeteneklerim</TabsTrigger>
            </TabsList>
            <TabsContent>
              <ListContainer items={BLOGS} item={BlogCard} />
            </TabsContent>
            <TabsContent>
              <p>Henüz not yok.</p>
            </TabsContent>
            <TabsContent>
              Yetenklerim
            </TabsContent>
          </TabGroup>
        </WorkContent>
      </WorkContainer>
    </Layout.Standard>
  );
}
