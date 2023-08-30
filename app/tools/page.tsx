"use client"
import { Description, Layout, ListContainer, TabGroup, TabsContent, TabsList, TabsTrigger, ToolContainer, ToolContent } from "@/app/components";
import { NEXT_TOOL, TOOLS } from "@/app/data/tools";
import { ToolCard } from "@/app/tools/components/ToolCard.container";

export default function Tools() {
  return (
    <Layout.Standard>
      <ToolContainer>
        <ToolContent>
          <TabGroup>
            <TabsList>
              <TabsTrigger>Kullandıklarım</TabsTrigger>
              <TabsTrigger>Kullanmak istediklerim</TabsTrigger>
            </TabsList>
            <TabsContent>
              <Description className="md:max-w-5xl px-4 text-lg font-medium">
                Çalışma masamda kullandığım araçları aşağıda görebilirsiniz.
              </Description>
              <ListContainer items={TOOLS} item={ToolCard} />
            </TabsContent>
            <TabsContent>
              <Description className="md:max-w-5xl px-4 text-lg font-medium">
                Çalışma ortamıma eklemek istediğim araçları aşağıda görebilirsiniz.
              </Description>
              <ListContainer items={NEXT_TOOL} item={ToolCard} />
            </TabsContent>
          </TabGroup>
        </ToolContent>
      </ToolContainer>
    </Layout.Standard>
  )
}