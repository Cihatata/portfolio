"use client"
import { Description, Layout, ListContainer, ToolContainer, ToolContent } from "@/app/components";
import { TOOLS } from "@/app/data/tools";
import { ToolCard } from "@/app/tools/components/ToolCard.container";

export default function Tools() {
  return (
    <Layout.Standard>
      <ToolContainer>
        <ToolContent>
          <Description className="md:max-w-5xl px-4 text-lg font-medium">
            Çalışma masamda kullandığım araçları aşağıda görebilirsiniz.
          </Description>
          <ListContainer items={TOOLS} item={ToolCard} />
        </ToolContent>
      </ToolContainer>
    </Layout.Standard>
  )
}