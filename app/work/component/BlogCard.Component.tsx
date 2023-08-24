import React from "react";
import { BlogItem } from "@/app/types";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components";
import Link from "next/link";

export const BlogCard = ({
  description,
  title,
  published,
  medium
}: BlogItem) => {
  return (
    <Card className="mb-5">
      <CardHeader className="h-48">
        <CardTitle className="text-lg font-bold ">{title}</CardTitle>
        <CardDescription className="text-accent-foreground">
          {description}
        </CardDescription>
        <span className=" text-xs  font-medium text-muted-foreground">
          {published}
        </span>
      </CardHeader>
      <CardFooter className="flex gap-x-6 py-1">
        <Link
          href={medium}
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer transform hover:translate-x-1 transition duration-300 ease-in-out "
        >
          <span className="font-bold ">Medium &rarr;</span>
        </Link>
      </CardFooter>
    </Card>
  );
};
