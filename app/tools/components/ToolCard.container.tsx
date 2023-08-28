import { Card } from "@/app/components";
import { ToolItem } from "@/app/types";
import Image from "next/image";


export const ToolCard = ({
  brand,
  id,
  imgSrc,
  name,
  score,
}: ToolItem) => {
  return (
    <Card className="mb-5 flex flex-col items-center justify-center p-4">
      <div className="flex-1 items-center justify-center flex">
      {imgSrc && <Image src={imgSrc} width={160} alt="brand" height={200} className="" />}
      </div>
      <div className="text-md">{brand}</div> 
      <p className="font-medium">{name}</p>
    </Card>
  )
}