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
import { BLOGS, SKILLS } from "../data";
import { BlogCard } from "./component";
import { SkillBadge } from "@/app/work/component/SkillBadge.Component";

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
            <TabsContent className="flex flex-col gap-4">
              {Object.entries(SKILLS).map(([key, value]) => (
                <div key={key}>
                  <p className="font-mono text-lg mb-1">{value.name} </p>
                  <div className="gap-2 flex flex-wrap">
                  {value.skills.map((item) => (
                    <SkillBadge key={item.name} name={item.name} iconType={item?.iconType || ''} classes={item.classes} />
                  ))}
                  </div>
                </div>
              )
              )}
            </TabsContent>
          </TabGroup>
        </WorkContent>
      </WorkContainer>
    </Layout.Standard>
  );
}
